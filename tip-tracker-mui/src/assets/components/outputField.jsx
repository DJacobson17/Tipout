import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import { useTipout } from "./tipoutContext";

function OutputField() {
  const { ccTips, cashTips, busser, partner } = useTipout();

  const totalTips = Number(ccTips) + Number(cashTips);
  console.log(totalTips);

  const [barTips, setBarTips] = useState(0);
  console.log(barTips);
  const [busserTips, setBusserTips] = useState(0);
  const [runnerTips, setRunnerTips] = useState(0);

  const netTips = totalTips - busserTips - barTips - runnerTips;

  const partnerTips = (netTips / 2).toFixed(2);
  const selfTips = netTips - partnerTips;

  useEffect(
    function () {
      setBarTips(Math.ceil(totalTips * 0.05).toFixed(2));
      setBusserTips(Math.ceil(totalTips * (busser / 100)).toFixed(2));
      setRunnerTips(Math.ceil(totalTips * 0.05).toFixed(2));
    },
    [totalTips, busser]
  );
  return (
    <div className="output">
      <h2 className="outputGroup">Total Tips: ${totalTips.toFixed(2)}</h2>

      <TextField
        label="Busser Tips"
        id="busser"
        type="number"
        step={1}
        value={busserTips}
        onChange={(event) => setBusserTips(event.target.value)}
      />

      <TextField
        label="Runner Tips"
        id="runner"
        type="number"
        step={1}
        value={runnerTips}
        onChange={(event) => setRunnerTips(event.target.value)}
      />

      <TextField
        label="Bar Tips"
        id="bar"
        type="number"
        step={1}
        value={barTips}
        onChange={(event) => setBarTips(event.target.value)}
      />
      {partner == "solo" && (
        <TextField label="Net Tips" id="net" value={`${netTips.toFixed(2)}`} />
      )}
      {partner == "pool" && (
        <>
          <TextField label="Partner Tips" id="partner" value={partnerTips} />
          <TextField label="Net Tips" id="net" value={selfTips} />
        </>
      )}
    </div>
  );
}

export default OutputField;
