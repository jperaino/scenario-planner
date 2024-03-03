import React, { useEffect, useState } from "react";
import { Interval } from "./forecast.interfaces";
interface IForecastContext {
  interval: Interval;
  setInterval: (newInterval: Interval) => void;
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
  const [interval, setInterval] = useState<Interval>(10);
  const [dates, setDates] = useState<string[] | null>(null);
  const [lines, setLines] = useState([
    [3, 2, 1, 3, 2],
    [5, 1, 2, 1, 3],
  ]);

  useEffect(() => {
    setDates(datesFromInterval(interval));
  }, [interval]);

  const datesFromInterval = (interval: number): string[] => {
    const yearList: string[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < interval; i++) {
      const year = currentYear + i;
      yearList.push(new Date(year, 0, 1).getFullYear().toString());
    }
    return yearList;
    // return dates;
  };

  return (
    <Provider
      value={{
        interval,
        setInterval,
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
