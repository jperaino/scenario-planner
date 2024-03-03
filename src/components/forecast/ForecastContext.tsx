import React from "react";
interface IForecastContext {
  // Define outputs here
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
  return (
    <Provider
      value={
        {
          // Add outputs here
        }
      }
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
