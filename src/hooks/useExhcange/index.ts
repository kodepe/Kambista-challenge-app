import { useState } from "react";
import { TabProps } from "../../components/atoms/tabs/interface";
import { useNavigation } from "@react-navigation/native";
import { UseExchangeContext } from "../../contexts/exchange/exchange-hook";

const defaultTypeExchange = 3.72;

export const UseExchange = () => {
  const { form, setForm } = UseExchangeContext();
  const router = useNavigation();
  const [tab, setTab] = useState("2");
  const [state, setState] = useState({ buy: 3.62, sell: 3.84 });
  const [estimatedSaving, setEstimatedSavings] = useState(0);
  const TABS: TabProps[] = [
    {
      id: "2",
      name: `Compra ${state.buy}`,
      className: `rounded-tl-xl rounded-tr-xl`,
    },
    {
      id: "1",
      name: `Venta ${state.sell}`,
      className: `rounded-tl-xl rounded-tr-xl`,
    },
  ];
  const handlerOrder = () => {
    const newState = !form.isDollarToSole;
    setForm({ ...form, isDollarToSole: newState });
    setTab(newState ? "1" : "2");
  };
  const handlerExchange = (value: string) => {
    if (!value) {
      setForm({ ...form, buyValue: "" });
      setEstimatedSavings(0);
      return;
    }
    let calculatedValue: number | null = null;
    setForm({ ...form, buyValue: value });
    if (form.isDollarToSole) {
      calculatedValue = Number(form.buyValue) * state.sell;
    } else {
      calculatedValue = Number(form.buyValue) / state.buy;
    }
    setEstimatedSavings(Number(calculatedValue.toFixed(4)));
  };
  const submit = () => {
    router.navigate("accounts");
  };
  return {
    state,
    form,
    setForm,
    handlerOrder,
    tab,
    setTab,
    TABS,
    handlerExchange,
    estimatedSaving,
    submit,
  };
};
