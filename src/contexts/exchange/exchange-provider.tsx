import { ExchangeContext } from "./exchange-context";

export const ExchangeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ExchangeContext.Provider value={{}}>{children}</ExchangeContext.Provider>
  );
};
