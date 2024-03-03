import { Card, Typography } from "@mui/material";
import React from "react";
import { ForecastContextProvider } from "./ForecastContext";
import ForecastChart from "./ForecastChart";
import ForecastTable from "./ForecastTable";

export interface ForecastSectionProps {}

const ForecastSection = ({}: ForecastSectionProps) => {
  return (
    <ForecastContextProvider>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h6">Forecast</Typography>
        <ForecastChart />
        <ForecastTable />
      </Card>
    </ForecastContextProvider>
  );
};

export default ForecastSection;
