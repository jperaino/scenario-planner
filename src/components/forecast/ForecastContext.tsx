import React, { useEffect, useState } from "react";
import { Interval, ScenarioLine } from "./forecast.interfaces";
import { useCurrentStateContext } from "../currentState/CurrentStateContext";
import { BaseMetric } from "../../main.interfaces";
interface IForecastContext {
  interval: Interval;
  setInterval: (newInterval: Interval) => void;
  dates: string[] | null;
  scenarioLines: ScenarioLine[];
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
  const { netWorth, monthlyCashflow, cash, debt, retirement } =
    useCurrentStateContext();

  const [interval, setInterval] = useState<Interval>(5);
  const [dates, setDates] = useState<string[] | null>(null);
  const [scenarioLines, setScenarioLines] = useState<ScenarioLine[]>([]);

  useEffect(() => {
    // Prevent chart from crashing if scenarioLines.values.length > dates.length
    setScenarioLines([]);

    setDates(datesFromInterval(interval));
  }, [interval]);

  useEffect(() => {
    setScenarioLines(generateScenarioLines());
  }, [netWorth, monthlyCashflow, dates]);

  const datesFromInterval = (interval: number): string[] => {
    const yearList: string[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < interval; i++) {
      const year = currentYear + i;
      yearList.push(new Date(year, 0, 1).getFullYear().toString());
    }
    return yearList;
  };

  const generateScenarioLines = (): ScenarioLine[] => {
    const scenarioLines: ScenarioLine[] = [];

    if (dates) {
      // Add net worth scenario line
      if (cash && monthlyCashflow) {
        scenarioLines.push({
          baseMetric: BaseMetric.NetWorth,
          values: dates.map((date, i) => {
            return cash + i * 12 * monthlyCashflow;
          }),
        });
      }

      // Add cash scenario line
      if (debt) {
        scenarioLines.push({
          baseMetric: BaseMetric.Debt,
          values: dates.map((date, i) => {
            return debt;
          }),
        });
      }
    }

    return scenarioLines;
  };

  return (
    <Provider
      value={{
        interval,
        setInterval,
        dates,
        scenarioLines,
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
