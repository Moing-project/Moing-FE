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
}

export default function SingleSelector({
  field,
  selectedOption,
  onSelectChange,
}: SingleSelectorProps) {
  const [options, setOptions] = useState<OptionType[]>([]); // 옵션 데이터 상태 추가

  useEffect(() => {
    // 옵션 데이터 설정 로직
    let newOptions: OptionType[] = [];

    switch (field) {
      case "subject":
        newOptions = Object.keys(WorkTypeEnum).map((key) => ({
          value: key as keyof typeof WorkTypeEnum,
          label: WorkTypeEnum[key as keyof typeof WorkTypeEnum],
        }));
        break;
      case "allowType":
        newOptions = Object.keys(WorkAllowEnum).map((key) => ({
          value: key as keyof typeof WorkAllowEnum,
          label: WorkAllowEnum[key as keyof typeof WorkAllowEnum],
        }));
        break;
      default:
        break;
    }

    setOptions(newOptions);
  }, [field]); // field 변경 시에만 실행

  return (
    <SelectBoxView
      selectedOption={selectedOption}
      handleChange={onSelectChange}
      options={options} // options를 프롭스로 넘겨줌
    />
  );
}

const SelectBoxView = ({
  selectedOption,
  handleChange,
  options, // options 프롭스 받음
}: {
  selectedOption: string | null;
  handleChange: (option: OptionType | null) => void;
  options: OptionType[]; // 옵션 데이터 프롭스로 받음
}) => (
  <Select<OptionType>
    value={options.find((option) => option.value === selectedOption)}
    onChange={handleChange}
    options={options}
    components={{ IndicatorSeparator: () => null }}
  />
);
