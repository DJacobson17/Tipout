import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import PartnerToggle from "./partnerToggle";
import { useTipout } from "./tipoutContext";

function InputField() {
  const { ccTips, setCcTips, cashTips, setCashTips } = useTipout();

  const handleCcTipsChange = (event) => {
    setCcTips(event.target.value);
  };

  const handleCashTipsChange = (event) => {
    setCashTips(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Credit Card Tips"
        value={ccTips}
        onChange={handleCcTipsChange}
      />
      <TextField
        label="Cash Tips"
        value={cashTips}
        onChange={handleCashTipsChange}
      />
      <Slider
        defaultValue={20}
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
