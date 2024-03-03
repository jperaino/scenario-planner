import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useForecastContext } from "./ForecastContext";
import { Interval } from "./forecast.interfaces";

export interface ForecastIntervalSelectorProps {}

const ForecastIntervalSelector = ({}: ForecastIntervalSelectorProps) => {
  const intervalOptions: Interval[] = [5, 10, 15];

  const { interval, setInterval } = useForecastContext();

  const handleInterval = (
    event: React.MouseEvent<HTMLElement>,
    newInterval: Interval
  ) => {
    setInterval(newInterval);
  };

  return (
    <ToggleButtonGroup value={interval} exclusive onChange={handleInterval}>
      {intervalOptions.map((option) => (
        <ToggleButton value={option} aria-label={`${option}-years`}>
          {`${option} years`}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ForecastIntervalSelector;
