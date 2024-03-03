import { BaseMetric } from "../../main.interfaces";

export interface ForecastValues {
  values: number[];
}

export type Interval = 5 | 10 | 15;

export interface ScenarioLine {
  baseMetric: BaseMetric;
  values: number[];
}
