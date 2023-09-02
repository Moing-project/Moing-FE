import React, { useEffect, useState } from "react";
import Select from "react-select";
import { WorkAllowEnum, WorkTypeEnum } from "../../types/WorkEnums";

export type OptionType = {
  value: string;
  label: string;
};

interface SingleSelectorProps {
  field: string;
  selectedOption: string | null; // 수정된 선택 옵션 속성
  onSelectChange: (option: OptionType | null) => void;
  placeholder?: string;
}

export default function SearchSelector({
  field,
  selectedOption,
  onSelectChange,
  placeholder,
}: SingleSelectorProps) {
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    let newOptions: OptionType[] = [];

    switch (field) {
      case "subject":
        newOptions = [
          { value: "", label: "전체 선택" }, // 전체 선택 옵션 추가
          ...Object.keys(WorkTypeEnum).map((key) => ({
            value: key as keyof typeof WorkTypeEnum,
            label: WorkTypeEnum[key as keyof typeof WorkTypeEnum],
          })),
        ];
        break;
      case "allowType":
        newOptions = [
          { value: "", label: "전체 선택" }, // 전체 선택 옵션 추가
          ...Object.keys(WorkAllowEnum).map((key) => ({
            value: key as keyof typeof WorkAllowEnum,
            label: WorkAllowEnum[key as keyof typeof WorkAllowEnum],
          })),
        ];
        break;
      default:
        break;
    }

    setOptions(newOptions);
  }, [field]);

  return (
    <Select<OptionType>
      value={options.find((option) => option.value === selectedOption)}
      onChange={onSelectChange}
      options={options}
      components={{ IndicatorSeparator: () => null }}
      placeholder={placeholder}
    />
  );
}
