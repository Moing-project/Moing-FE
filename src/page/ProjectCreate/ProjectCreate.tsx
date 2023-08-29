import React, { useState, useRef, ReactNode } from "react";
import SingleSelector, { OptionType } from "./SingleSelector";
import MultiSelector from "./MultiSelector";
import { MultiValue } from "react-select";
import MarkdownEditor from "./MarkdownEditor";
import { Editor } from "@toast-ui/react-editor";
import SingleCalendarSelector from "./SingleCalendarSelector";
import { usePostProjectMutation } from "../../redux/modules/ProjectAPI";
import {
  WorkAllowFunctions,
  WorkAllowEnum,
  WorkTypeEnum,
  WorkStackEnum,
} from "../../types/WorkEnums";

interface ProjectFormData {
  title: string;
  subject: keyof typeof WorkTypeEnum | null;
  needMember: number;
  date: string | null;
  allowType: keyof typeof WorkAllowEnum | null;
  stacks: Array<keyof typeof WorkStackEnum | null>;
  introduce: string;
  imageSrc: string;
}

export default function ProjectCreate() {
  const [projectData, setProjectData] = useState<ProjectFormData>({
    title: "",
    subject: null,
    needMember: 0,
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
    const selectedStacks = selectedOptions.map(
      (option) => option.value
    ) as Array<keyof typeof WorkStackEnum | null>;

    setProjectData((prevData) => ({
      ...prevData,
      stacks: selectedStacks,
    }));
  };

  // 날짜 타입 셀렉터 함수
  const [dateType, setDateType] = useState<string | null>(null);

  const handleDateTypeChange = (option: OptionType | null) => {
    setProjectData((prevData) => ({
      ...prevData,
      date: option ? option.value : "",
    }));
    setDateType(option ? option.value : null);
  };

  // date 함수
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      date: dateType === "null" ? null : value,
    }));
  };

  // 에디터 함수 -> 소개
  const editorRef = useRef<Editor | null>(null);

  const handleEditorChange = () => {
    const editorMarkdown = editorRef.current!.getInstance().getMarkdown();

    setProjectData((prevData) => ({
      ...prevData,
      introduce: editorMarkdown,
    }));
  };

  // 모집 방식 함수
  const handleAllowTypeChange = (option: OptionType | null) => {
    const newAllowType = option ? option.value : null;

    if (
      newAllowType === WorkAllowFunctions.Key(WorkAllowEnum.NOT_ALLOW) ||
      newAllowType === WorkAllowFunctions.Key(WorkAllowEnum.SECRET)
    ) {
      setProjectData((prevData) => ({
        ...prevData,
        allowType: newAllowType as "NOT_ALLOW" | "SECRET", // 타입 단언
        date: null,
        needMember: 0,
      }));
    } else {
      setProjectData((prevData) => ({
        ...prevData,
        allowType: newAllowType as "ALL_ALLOW" | "REQUIRED_ALLOW" | null, // 타입 단언
      }));
    }
  };

  // 참여방식 따라 셀렉트, 입력 방지
  const isAllowTypeRestricted =
    projectData.allowType === "NOT_ALLOW" || projectData.allowType === "SECRET";

  // 프로젝트 생성 mutation
  const [projectCreate, { isLoading }] = usePostProjectMutation();

  const onProjectCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoading) {
      const res = await projectCreate(projectData);
      console.log(res);
    }
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
          name="needMember"
          value={projectData.needMember}
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
          onSelectChange={handleAllowTypeChange}
        />
      </div>
      <div>
        <p>기술 스택</p>
        <MultiSelector
          // selectedOptions={projectData.stacks}
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
