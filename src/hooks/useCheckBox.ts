import { useState } from "react";

export function useCheckBox() {
  const [checked, setChecked] = useState<boolean>(false);

  return {
    checked,
    setChecked,
  };
}
