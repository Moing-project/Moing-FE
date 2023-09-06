import React, { useState, useRef, useEffect } from "react";
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
import { useUploadImageMutation } from "../../redux/modules/ImageAPI";
import { ProjectsMekeLayout } from "../../styledComponents/ProjectCreate";
import {
  CustomBtn,
  SubmitButton,
} from "../../styledComponents/commons/Buttons";
import { useNavigate } from "react-router-dom";

interface ProjectFormData {
  title: string;
  subject: keyof typeof WorkTypeEnum | null;
  needMember: number;
  date: string | null;
  allowType: keyof typeof WorkAllowEnum | null;
  stacks: Array<keyof typeof WorkStackEnum | null>;
  introduce: string;
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
  });

  const navigate = useNavigate();

  // 파일 함수 -> 프로젝트 썸네일
  // const [image, setImage] = useState<Array<File>>();
  // const [isImageUploaded, setImageUploaded] = useState<boolean>(false); // 이미지 업로드 완료 여부

  // const [upload, { isLoading: uploadLoading }] = useUploadImageMutation();

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setImage(Array.from(event.target.files as FileList));
  // };

  // const uploadHandler = async () => {
  //   if (!uploadLoading) {
  //     const payload = new FormData();
  //     for (const file of image as Array<File>) {
  //       payload.append("imageFile", file);
  //     }
  //     const res = await upload(payload);
  //     if ("data" in res) {
  //       setProjectData((prevData) => ({
  //         ...prevData,
  //         imageSrc: res.data.data,
  //       }));
  //       setImageUploaded(true); // 이미지 업로드 완료 표시
  //     }
  //   }
  // };

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

  // 폼 제출 상태
  // const [isSubmitting, setSubmitting] = useState<boolean>(false);

  // 프로젝트 생성 mutation
  // const [projectCreate, { isLoading }] = usePostProjectMutation();

  // const onProjectCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const res = await projectCreate(projectData);
  //   console.log(res);
  // };

  const onProjectCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 프로젝트 데이터를 JSON 형식으로 직렬화
      const formData = JSON.stringify(projectData);

      // 서버의 엔드포인트 URL을 설정 (team 가상 서버에 POST하는 예제)
      const serverUrl = "http://localhost:3001/team"; // 실제 서버 URL로 변경해야 합니다.

      // POST 요청을 보냅니다.
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // 요청이 성공한 경우에 대한 처리
        alert("프로젝트 생성 요청이 성공했습니다.");
        window.location.href = "/projects";
        // 필요한 리디렉션 또는 다른 작업 수행
      } else {
        // 요청이 실패한 경우에 대한 처리
        alert("프로젝트 생성 요청이 실패했습니다.");
      }
    } catch (error) {
      alert("프로젝트 생성 요청 중 오류 발생");
    }
  };

  // 이미지 업로드가 완료될 때만 폼 제출을 허용
  // useEffect(() => {
  //   if (isImageUploaded) {
  //     setSubmitting(false); // 이미지 업로드 완료 후 폼 제출 가능
  //   }
  // }, [isImageUploaded]);

  return (
    <ProjectsMekeLayout onSubmit={onProjectCreateSubmit}>
      <header>
        <h1>프로젝트 생성하기</h1>
        <p>협업하고 싶은 프로젝트를 모잉과 함께 간단히 생성해보아요!</p>
      </header>
      <section>
        <div className="text">
          <p>프로젝트 이름</p>
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleInputChange}
            placeholder="20자 이내로 입력해주세요"
            className="defaultInput"
          />
        </div>
        <div>
          <p>프로젝트 분야</p>
          <SingleSelector
            field="subject"
            selectedOption={projectData.subject}
            onSelectChange={(option) =>
              handleSingleSelectorChange("subject", option)
            }
            placeholder="아래 분야 중 한 가지를 선택해주세요"
          />
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
            className="defaultInput"
          />
        </div>
        <div>
          <p>멤버 참여 방식</p>
          <SingleSelector
            field="allowType"
            selectedOption={projectData.allowType}
            onSelectChange={handleAllowTypeChange}
            placeholder="멤버 참여 방식을 지정해주세요"
          />
        </div>
        <div>
          <p>모집 마감 기간</p>
          <SingleCalendarSelector
            selectedOption={dateType}
            onSelectChange={handleDateTypeChange}
            isDisabled={isAllowTypeRestricted} // isDisabled 속성 추가
            placeholder="모집 마감 방법을 지정해주세요"
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
          <p>기술 스택</p>
          <MultiSelector
            // selectedOptions={projectData.stacks}
            onSelectChange={handleMultiSelectorChange}
            placeholder="프로젝트 사용 스택을 선택해주세요"
          />
        </div>
      </section>
      <div className="introduce">
        <p className="title">프로젝트 소개</p>
        <MarkdownEditor
          ref={editorRef}
          value={projectData.introduce}
          onChange={handleEditorChange}
        />
      </div>
      {/* <div>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="button" onClick={uploadHandler}>
          이미지 업로드
        </button>
      </div> */}
      <nav>
        <SubmitButton
          type="submit"
          $shape="filled"
          $width="medium"
          $height="medium"
        >
          프로젝트 생성
        </SubmitButton>
        <CustomBtn
          onClick={(e: any) => {
            e.preventDefault();
            navigate("/projects");
          }}
          $status=""
          $shape="filled"
          $width="medium"
          $height="medium"
        >
          취소
        </CustomBtn>
      </nav>
    </ProjectsMekeLayout>
  );
}
