import React, { useState, useRef } from "react";
import SingleSelector, { OptionType } from "./SingleSelector";
import MultiSelector from "./MultiSelector";
import { MultiValue } from "react-select";
import MarkdownEditor from "./MarkdownEditor";
import { Editor } from "@toast-ui/react-editor";
import SingleCalendarSelector from "./SingleCalendarSelector";

interface ProjectFormData {
  title: string;
  subject: string | null;
  totalMember: number;
  date: string | null;
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
    date: null,
    allowType: null,
    stacks: [],
    introduce: "",
    imageSrc: "",
  });

  // 인풋 함수 -> 이름, 인원
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

  const [dateType, setDateType] = useState<string | null>(null);

  // 날짜 타입 셀렉터 함수
  const handleDateTypeChange = (option: OptionType | null) => {
    setProjectData((prevData) => ({
      ...prevData,
      date: option ? option.value : "",
    }));
    setDateType(option ? option.value : null);
  };

  // 데드라인 함수
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      date: dateType === "null" ? null : value,
    }));
  };

  // 에디터 함수 -> 소개
  const editorRef = useRef<Editor>(null);

  const handleEditorChange = (content: string) => {
    setProjectData((prevData) => ({
      ...prevData,
      introduce: content,
    }));
  };

  const onProjectCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editorContent = editorRef.current?.getInstance().getMarkdown();

    // 마크다운 에디터 내용을 introduce에 설정하고 폼 데이터에 포함시킴
    setProjectData((prevData) => ({
      ...prevData,
      introduce: editorContent || prevData.introduce,
    }));

    console.log("Project Data:", projectData);
  };

  // 참여방식 따라 셀렉트, 입력 방지
  const isAllowTypeRestricted =
    projectData.allowType === "NOT_ALLOW" || projectData.allowType === "SECRET";

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
        <p>분야</p>
        <SingleSelector
          field="subject"
          selectedOption={projectData.subject}
          onSelectChange={(option) =>
            handleSingleSelectorChange("subject", option)
          }
        />
      </div>
      <div>
        <p>마감 기한</p>
        <SingleCalendarSelector
          selectedOption={dateType}
          onSelectChange={handleDateTypeChange}
          isDisabled={isAllowTypeRestricted} // isDisabled 속성 추가
        />
        {dateType === "date" && (
          <input
            type="date"
            name="date"
            value={projectData.date || ""}
            onChange={handleDateChange}
          />
        )}
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
          disabled={isAllowTypeRestricted}
        />
      </div>
      <div>
        <p>멤버 참여 방식</p>
        <SingleSelector
          field="allowType"
          selectedOption={projectData.allowType}
          onSelectChange={(option) =>
            handleSingleSelectorChange("allowType", option)
          }
        />
      </div>
      <div>
        <p>기술 스택</p>
        <MultiSelector
          selectedOptions={projectData.stacks}
          onSelectChange={handleMultiSelectorChange}
        />
      </div>
      <div>
        <p>프로젝트 소개</p>
        <MarkdownEditor
          ref={editorRef}
          value={projectData.introduce}
          onChange={handleEditorChange}
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
      <button type="submit">프로젝트 생성</button>
    </form>
  );
}
