import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useForecastContext } from "./ForecastContext";
import {
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer,
} from "@mui/x-charts";

export interface ForecastChartProps {}

const ForecastChart = ({}: ForecastChartProps) => {
  const { dates, scenarioLines } = useForecastContext();

  if (!(dates && scenarioLines)) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ width: "100%", height: 500 }}>
      <ResponsiveChartContainer
        series={scenarioLines.map((ScenarioLine) => {
          return {
            type: "line",
            data: ScenarioLine.values,
            label: ScenarioLine.baseMetric,
          };
        })}
        xAxis={[
          {
            data: dates,
            scaleType: "point",
            id: "x-axis-id",
          },
        ]}
        yAxis={[{ scaleType: "linear", id: "y-axis-id", min: 0 }]}
      >
        <LinePlot />
        <MarkPlot />
        <ChartsTooltip trigger="axis" />
        <ChartsYAxis position="left" axisId="y-axis-id" />
        <ChartsXAxis position="bottom" axisId="x-axis-id" />
      </ResponsiveChartContainer>
    </Box>
  );
};

export default ForecastChart;
