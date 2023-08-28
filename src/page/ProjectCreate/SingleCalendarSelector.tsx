import Select from "react-select";

export type OptionType = {
  value: string;
  label: string;
};

interface SingleSelectorProps {
  selectedOption: string | null; // 수정된 선택 옵션 속성
  onSelectChange: (option: OptionType | null) => void;
  isDisabled?: boolean; // 새로 추가한 속성
}

const options = [
  { value: "date", label: "날짜 설정" },
  { value: "null", label: "날짜 미설정" },
];

export default function SingleCalendarSelector({
  selectedOption,
  onSelectChange,
  isDisabled = false, // 기본값으로 비활성화되지 않도록 설정
}: SingleSelectorProps) {
  return (
    <SelectBoxView
      selectedOption={selectedOption}
      handleChange={onSelectChange}
      options={options} // options를 프롭스로 넘겨줌
      isDisabled={isDisabled} // 새로 추가한 속성 전달
    />
  );
}

const SelectBoxView = ({
  selectedOption,
  handleChange,
  options, // options 프롭스 받음
  isDisabled = false, // 기본값으로 비활성화되지 않도록 설정
}: {
  selectedOption: string | null;
  handleChange: (option: OptionType | null) => void;
  options: OptionType[]; // 옵션 데이터 프롭스로 받음
  isDisabled?: boolean; // 새로 추가한 속성
}) => (
  <Select<OptionType>
    value={options.find((option) => option.value === selectedOption)}
    onChange={handleChange}
    options={options}
    components={{ IndicatorSeparator: () => null }}
    isDisabled={isDisabled} // 새로 추가한 속성 사용
  />
);
