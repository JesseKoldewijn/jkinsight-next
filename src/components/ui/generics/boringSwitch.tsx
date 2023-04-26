import { useEffect, useRef, useState } from "react";
import { Label } from "../form/label";
import { Switch } from "./switch";

const BoringSwitch = () => {
  const [boringEnabled, setBoringEnabled] = useState(false);

  const toggleBoringMode = (e) => {
    const newState = e.target.dataset.state;
    setBoringEnabled(!boringEnabled);
  };

  return (
    <div className="hidden items-center space-x-2 sm:flex">
      <Switch
        id="boring-mode"
        onClick={(e) => toggleBoringMode(e)}
        data-state={boringEnabled}
      />
      <Label htmlFor="boring-mode">
        {(boringEnabled == false || boringEnabled == null) && "Fancy Mode"}
        {boringEnabled == true && "Boring Mode"}
      </Label>
    </div>
  );
};

export default BoringSwitch;
