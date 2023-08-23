import React, { useState } from "react";
import SingleSelector, { OptionType } from "./SingleSelector";
import MultiSelector from "./MultiSelector";
import { MultiValue } from "react-select";

interface ProjectFormData {
  title: string;
  subject: string | null;
  totalMember: number;
  date: string;
  allowType: string | null;
  stacks: string[];
  introduce: string;
  imageSrc: string;
}

export default function ProjectCreate() {
  const [projectData, setProjectData] = useState<ProjectFormData>({
    title: "",
    subject: null,
    totalMember: 0,
    date: "",
    allowType: null,
    stacks: [],
    introduce: "",
    imageSrc: "",
  });

  // 인풋 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 싱글 셀렉터 함수 -> 분야, 참여 방식
  const handleSingleSelectorChange = (
    field: string,
    option: OptionType | null
  ) => {
    setProjectData((prevData) => ({
      ...prevData,
      [field]: option ? option.value : "", // 선택한 옵션의 value를 해당 필드에 설정
    }));
  };

  // 멀티 셀렉터 함수 -> 스택
  // const handleMultiSelectorChange = (selectedOptions: OptionType[]) => {
  //   const selectedValues = selectedOptions.map((option) => option.value);
  //   setProjectData((prevData) => ({
  //     ...prevData,
  //     stacks: selectedValues,
  //   }));
  // };
  // ... (이전 코드 부분)

  // 멀티 셀렉터 함수 -> 스택
  const handleMultiSelectorChange = (
    selectedOptions: MultiValue<OptionType>
  ) => {
    const selectedStacks = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setProjectData((prevData) => ({
      ...prevData,
      stacks: selectedStacks,
    }));
  };

  // ... (이후 코드 부분)

  const onProjectCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Project Data:", projectData);
  };

  return (
    <form onSubmit={onProjectCreateSubmit}>
      <div>
        <p>플젝 이름</p>
        <input
          type="text"
          name="title"
          value={projectData.title}
          onChange={handleInputChange}
          placeholder="20자 이내로 입력해주세요"
        />
      </div>
      <div>
        <p>모집 인원</p>
        <input
          type="number"
          name="totalMember"
          value={projectData.totalMember}
          onChange={handleInputChange}
          min={0}
          max={10}
          step={1}
          placeholder="직접 입력해주세요. (최대 10명까지 가능)"
        />
      </div>
      <div>
        <input
          type="file"
          name="imageSrc"
          value={projectData.imageSrc}
          onChange={handleInputChange}
        />
      </div>
      <SingleSelector
        field="subject"
        selectedOption={projectData.subject}
        onSelectChange={(option) =>
          handleSingleSelectorChange("subject", option)
        }
      />
      <SingleSelector
        field="allowType"
        selectedOption={projectData.allowType}
        onSelectChange={(option) =>
          handleSingleSelectorChange("allowType", option)
        }
      />
      <MultiSelector
        selectedOptions={projectData.stacks}
        onSelectChange={handleMultiSelectorChange}
      />
      <button type="submit">프로젝트 생성</button>
    </form>
  );
}
