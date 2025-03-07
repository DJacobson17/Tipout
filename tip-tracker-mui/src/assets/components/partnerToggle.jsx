import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTipout } from "./tipoutContext";

export default function PartnerToggle() {
  const { partner, setPartner } = useTipout();

  const handlePartnerChange = (event, newPartner) => {
    if (newPartner !== null) {
      setPartner(newPartner);
    }
  };
  return (
    <>
      <ToggleButtonGroup
        value={partner}
        exclusive
        onChange={handlePartnerChange}
      >
        <ToggleButton value="solo">SOLO</ToggleButton>
        <ToggleButton value="pool">POOL</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
