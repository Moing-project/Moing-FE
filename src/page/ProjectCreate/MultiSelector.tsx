import Select, { MultiValue } from "react-select";
import { WorkStackEnum } from "../../types/WorkEnums";
import { OptionType } from "./SingleSelector";

const options = Object.keys(WorkStackEnum).map((key) => ({
  value: key as keyof typeof WorkStackEnum,
  label: WorkStackEnum[key as keyof typeof WorkStackEnum],
}));

interface MultiSelectorProps {
  selectedOptions?: MultiValue<OptionType>;
  onSelectChange: (selectedOptions: MultiValue<OptionType>) => void;
}

export default function MultiSelector({
  selectedOptions,
  onSelectChange,
}: MultiSelectorProps) {
  const handleClearAll = () => {
    onSelectChange([] as MultiValue<OptionType>); // 선택된 옵션들을 빈 배열로 업데이트
  };

  return (
    <Select
      value={selectedOptions}
      isMulti
      onChange={(newValue, actionMeta) => {
        if (actionMeta.action === "select-option") {
          // Select an option
          onSelectChange(newValue as MultiValue<OptionType>);
        } else if (actionMeta.action === "remove-value" && !newValue) {
          // Remove all values (when clicking the clear button)
          handleClearAll();
        }
      }}
      options={options}
      components={{
        IndicatorSeparator: () => null,
        ClearIndicator: (props) => (
          <span
            {...props.innerProps}
            onClick={handleClearAll}
            style={{ cursor: "pointer" }}
          >
            전체 삭제
          </span>
        ),
      }}
    />
  );
}
