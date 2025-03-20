import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import PartnerToggle from "./partnerToggle";
import { useTipout } from "./tipoutContext";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function InputField() {
  const { ccTips, setCcTips, cashTips, setCashTips, setBusser } = useTipout();

  const handleBusserChange = (event) => {
    setBusser(event.target.value);
  };

  const handleCcTipsChange = (event) => {
    setCcTips(event.target.value);
  };

  const handleCashTipsChange = (event) => {
    setCashTips(event.target.value);
  };

  return (
    <div>
      <TextField
        label="💳 Credit Card Tips"
        type="number"
        value={ccTips}
        onChange={handleCcTipsChange}
      />
      <TextField
        label="💵 Cash Tips"
        type="number"
        value={cashTips}
        onChange={handleCashTipsChange}
      />
      <Slider
        defaultValue={20}
        onChange={handleBusserChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={15}
        max={25}
      />
      <PartnerToggle />
    </div>
  );
}

export default InputField;
