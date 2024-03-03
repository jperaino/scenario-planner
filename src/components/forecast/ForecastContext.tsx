import React, { useState } from "react";
interface IForecastContext {
  dates: string[] | null;
  lines: number[][] | null;
}

const ForecastContext = React.createContext<IForecastContext | undefined>(
  undefined
);
const Provider = ForecastContext.Provider;
const Consumer = ForecastContext.Consumer;

export const useForecastContext = () => {
  const args = React.useContext(ForecastContext);

  if (!args) {
    throw new Error(
      "Cannot use this component outside of a valid Forecast context."
    );
  }

  return args;
};

const ForecastContextProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [dates, setDates] = useState(["A", "B", "C", "D", "E", "F"]);
  const [lines, setLines] = useState([
    [3, 2, 1, 3, 2, 1],
    [5, 1, 2, 1, 3, 2],
  ]);

  return (
    <Provider
      value={{
        dates,
        lines,
      }}
    >
      {props.children}
    </Provider>
  );
};

export {
  ForecastContext,
  ForecastContextProvider,
  Consumer as ForecastContextConsumer,
};
export default ForecastContext;
