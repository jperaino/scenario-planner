export enum BaseMetric {
  NetWorth = "netWorth",
  Debt = "debt",
  Investments = "investments",
  Cash = "cash",
  Assets = "assets",
}

export enum AssetType {
  CASH = "Cash",
  INVESTMENTS = "Investments",
  REAL_ESTATE = "Real Estate",
  RETIREMENT_ACCOUNTS = "Retirement Accounts",
  OTHER_ASSET = "Other Asset",
}

export enum DebtType {
  MORTGAGE = "Mortgage",
  PERSONAL_LOAN = "Personal Loan",
  STUDENT_LOAN = "Student Loan",
  OTHER_DEBT = "Other Debt",
}

export type BalanceType = AssetType | DebtType;

export interface Transaction {
  origin: BalanceType;
  destination: BalanceType;
  amount: number;
  date: Date;
}

export enum TransactionFrequency {
  ONE_TIME = "One Time",
  MONTHLY = "Monthly",
  ANNUAL = "Annual",
}

// TODO - Provide stronger typing for this
export type TransactionFunction = () => number;

export interface TransactionRecipe {
  origin: BalanceType;
  destination: BalanceType;

  frequency: TransactionFrequency;

  // TODO - Consider if these are necessary here or if they should be in Events
  startDate?: Date;
  endDate?: Date;

  amount: number | TransactionFunction;
}

export type LifeEventCondition = Date | FinancialCondition;

export interface FinancialCondition {
  balanceType: BalanceType;
  logicalCondition: LogicalCondition;
  amount: number;
}

export enum LogicalCondition {
  GREATER_THAN = ">",
  LESS_THAN = "<",
  EQUAL = "=",
}

export interface LifeEvent {
  name: string;
  startCondition?: LifeEventCondition;
  endCondition?: LifeEventCondition;

  transactionRecipes: TransactionRecipe[];
}

export interface Scenario {
  name: string;
  lifeEvents: LifeEvent[];
}
