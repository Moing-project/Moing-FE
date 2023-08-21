import * as I from "./UsingIcons";
import { ReactNode } from "react";

interface CheckboxWithLabelProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

export default function CheckboxWithLabel({
  id,
  checked,
  onChange,
  children,
}: CheckboxWithLabelProps) {
  return (
    <p>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>
        {checked ? <I.Checked /> : <I.Unchecked />}
        {children}
      </label>
    </p>
  );
}
