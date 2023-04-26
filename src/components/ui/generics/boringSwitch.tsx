import { useState } from "react";
import { Label } from "../form/label";
import { Switch } from "./switch";

const BoringSwitch = () => {
  const [boringEnabled, setBoringEnabled] = useState(false);

  const toggleBoringMode = () => {
    setBoringEnabled(!boringEnabled);
  };

  return (
    <div className="hidden items-center space-x-2 sm:flex">
      <Switch
        id="boring-mode"
        onClick={() => toggleBoringMode()}
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
