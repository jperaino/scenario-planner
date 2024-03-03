import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useForecastContext } from "./ForecastContext";
import {
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  ResponsiveChartContainer,
} from "@mui/x-charts";

export interface ForecastChartProps {}

const ForecastChart = ({}: ForecastChartProps) => {
  const { dates, lines } = useForecastContext();

  if (!(dates && lines)) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ width: "100%", height: 500 }}>
      <ResponsiveChartContainer
        series={lines.map((line) => {
          return {
            type: "line",
            data: line,
          };
        })}
        xAxis={[
          {
            data: dates,
            scaleType: "band",
            id: "x-axis-id",
          },
        ]}
        yAxis={[{ scaleType: "linear", id: "y-axis-id", min: 0 }]}
      >
        <LinePlot />
        <ChartsYAxis position="left" axisId="y-axis-id" />
        <ChartsXAxis position="bottom" axisId="x-axis-id" />
      </ResponsiveChartContainer>
    </Box>
  );
};

export default ForecastChart;
