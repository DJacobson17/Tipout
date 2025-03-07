import { createContext, useContext, useMemo, useState } from "react";

const TipoutContext = createContext();

function TipoutProvider({ children }) {
  const [ccTips, setCcTips] = useState("");
  const [cashTips, setCashTips] = useState("");
  const [busser, setBusser] = useState(20);
  const [partner, setPartner] = useState("solo");

  const value = useMemo(() => {
    return {
      ccTips,
      setCcTips,
      cashTips,
      setCashTips,
      busser,
      setBusser,
      partner,
      setPartner,
    };
  }, [ccTips, cashTips, busser, partner]);

  return (
    <TipoutContext.Provider value={value}>{children}</TipoutContext.Provider>
  );
}

function useTipout() {
  const context = useContext(TipoutContext);
  if (!context) {
    throw new Error("useTipout must be used within a TipoutProvider");
  }
  return context;
}

export { TipoutProvider, useTipout };
