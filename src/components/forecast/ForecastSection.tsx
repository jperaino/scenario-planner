import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { ForecastContextProvider } from "./ForecastContext";
import ForecastChart from "./ForecastChart";
import ForecastTable from "./ForecastTable";
import ForecastIntervalSelector from "./ForecastIntervalSelector";

export interface ForecastSectionProps {}

const ForecastSection = ({}: ForecastSectionProps) => {
  return (
    <ForecastContextProvider>
      <Card sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant="h6">Forecast</Typography>
          <ForecastIntervalSelector />
          <ForecastChart />
          <ForecastTable />
        </Stack>
      </Card>
    </ForecastContextProvider>
  );
};

export default ForecastSection;
