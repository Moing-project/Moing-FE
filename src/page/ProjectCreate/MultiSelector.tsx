import React from "react";
import Select from "react-select";
import { WorkStackFunctions } from "../../types/WorkEnums";
import { OptionType } from "./SingleSelector";

const options = WorkStackFunctions.GetWorkStackEnums().map((value) => ({
  value,
  label: value,
}));

interface MultiSelectorProps {
  selectedOptions: string[];
  onSelectChange: (options: OptionType[]) => void;
}

export default function MultiSelector({
  selectedOptions,
  onSelectChange,
}: MultiSelectorProps) {
  const handleClearAll = () => {
    onSelectChange([]); // 선택된 옵션들을 빈 배열로 업데이트
  };

  return (
    <Select
      value={options.filter((option) => selectedOptions.includes(option.value))}
      isMulti
      onChange={(newValue, actionMeta) => {
        if (actionMeta.action === "select-option") {
          // Select an option
          onSelectChange(newValue as OptionType[]);
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

// import React from "react";
// import Select, { ActionMeta } from "react-select";
// import { WorkStackFunctions } from "../../types/WorkEnums";

// export type OptionType = {
//   value: string;
//   label: string;
// };

// interface MultiSelectorProps {
//   selectedOptions: string[];
//   onSelectChange: (options: OptionType[]) => void;
// }

// export default function MultiSelector({
//   selectedOptions,
//   onSelectChange,
// }: MultiSelectorProps) {
//   const options: OptionType[] = WorkStackFunctions.GetWorkStackEnums().map(
//     (value) => ({
//       value,
//       label: value,
//     })
//   );

//   return (
//     <MultiSelectBoxView
//       selectedOptions={selectedOptions}
//       handleChange={onSelectChange}
//       options={options}
//     />
//   );
// }

// const MultiSelectBoxView = ({
//   selectedOptions,
//   handleChange,
//   options,
// }: {
//   selectedOptions: string[];
//   handleChange: (selectedOptions: OptionType[]) => void;
//   options: OptionType[];
// }) => (
//   <>
//     <Select<OptionType>
//       value={options.filter((option) => selectedOptions.includes(option.value))}
//       onChange={handleChange}
//       options={options}
//       components={{ IndicatorSeparator: () => null }}
//     />
//     <p>
//       {selectedOptions
//         .map((option) => options.find((item) => item.value === option)?.label)
//         .join(", ")}
//     </p>
//   </>
// );
