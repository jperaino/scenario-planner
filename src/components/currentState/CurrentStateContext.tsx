import React, { useEffect, useState } from "react";
interface ICurrentStateContext {
  cash: number;
  retirement: number;
  debt: number;
  monthlyIncome: number;
  monthlySpending: number;

  // Calculated
  netWorth: number | null;
  monthlyCashflow: number | null;
}

const CurrentStateContext = React.createContext<
  ICurrentStateContext | undefined
>(undefined);
const Provider = CurrentStateContext.Provider;
const Consumer = CurrentStateContext.Consumer;

export const useCurrentStateContext = () => {
  const args = React.useContext(CurrentStateContext);

  if (!args) {
    throw new Error(
      "Cannot use this component outside of a valid CurrentState context."
    );
  }

  return args;
};

const CurrentStateContextProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [cash, setCash] = useState<number>(50000);
  const [retirement, setRetirement] = useState<number>(75000);
  const [debt, setDebt] = useState<number>(20000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [monthlySpending, setMonthlySpending] = useState<number>(2000);

  const [netWorth, setNetWorth] = useState<number | null>(null);
  const [monthlyCashflow, setMonthlyCashflow] = useState<number | null>(null);

  useEffect(() => {
    setNetWorth(cash + retirement - debt);
  }, [cash, retirement, debt]);

  useEffect(() => {
    setMonthlyCashflow(monthlyIncome - monthlySpending);
  }, [monthlyIncome, monthlySpending]);

  return (
    <Provider
      value={{
        cash,
        retirement,
        debt,
        monthlyIncome,
        monthlySpending,
        netWorth,
        monthlyCashflow,
      }}
    >
      {props.children}
    </Provider>
  );
};

export {
  CurrentStateContext,
  CurrentStateContextProvider,
  Consumer as CurrentStateContextConsumer,
};
export default CurrentStateContext;
