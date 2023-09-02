import React, { useState } from "react";
import * as I from "../../components/UsingIcons";
import * as S from "../../styledComponents/Projects";
import ProjectsListItem from "./ProjectsListItem";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../../styledComponents/commons/SearchInput";
import Pagination from "../../components/Pagination";
import SearchSelector, { OptionType } from "./SearchSelector";
import { MultiValue } from "react-select";
import MultiSelector from "../ProjectCreate/MultiSelector";

export default function ProjectsList({ data }: any) {
  const navigate = useNavigate();

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const ITEM_PER_PAGE = 2; // 페이지당 아이템 수

  // 검색어 상태
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [isEmpty, setIsEmpty] = useState<boolean>(searchTerm === "");

  // 싱글 셀렉터 함수 -> 분야
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSingleSelectorChange = (
    field: string,
    option: OptionType | null
  ) => {
    setSelectedSubject(option ? option.value : null);
    console.log(selectedSubject);
  };

  // 멀티 셀렉터 함수 -> 스택
  const [selectedStacks, setSelectedStacks] = useState<string[] | null>([]);

  const handleMultiSelectorChange = (
    selectedOptions: MultiValue<OptionType>
  ) => {
    setSelectedStacks(selectedOptions.map((option) => option.value));
  };

  const [toggleExpired, setToggleExpired] = useState();

  if (!data) {
    return null;
  }

  // 검색어 입력 핸들러
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    setCurrentPage(1); // 검색어가 변경될 때 페이지를 1로 초기화
    setIsEmpty(newValue === "");
  };

  const clearValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setIsEmpty(true);
    e.preventDefault();
  };

  // 필터링된 데이터
  const filteredData = data.filter((project: any) =>
    project.name?.toLowerCase().includes(searchTerm)
  );

  // 페이징
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const totalPages = Math.ceil(filteredData.length / ITEM_PER_PAGE);
  const itemsToDisplay = filteredData.slice(startIndex, endIndex);

  // 페이지 변경 핸들러
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <S.ProjectListSection>
      <h1 className="mainTitle">전체 팀 목록</h1>
      <article>
        <nav>
          <SearchSelector
            field="subject"
            selectedOption={selectedSubject}
            onSelectChange={(option) =>
              handleSingleSelectorChange("subject", option)
            }
            placeholder="프로젝트 분야"
          />
          <MultiSelector
            // selectedOptions={projectData.stacks}
            onSelectChange={handleMultiSelectorChange}
            placeholder="기술 스택"
          />
        </nav>
        <SearchBox $isEmpty={isEmpty}>
          <div>
            <I.Search />
            <input
              type="text"
              placeholder="프로젝트 이름으로 검색해보세요"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </div>
          <button onClick={clearValue}>
            <I.Remove />
          </button>
        </SearchBox>
      </article>
      <S.ProjectsListUl>
        <S.ProjectListMakeLi onClick={() => navigate("/projects/create")}>
          <h1>빠른 프로젝트 생성하기</h1>
          <I.ProjectMake />
          <p>
            내가 원하는 프로젝트가 없나요? <br />
            그러하면 원하는 프로젝트를 빠르게 생성해보세요!
          </p>
        </S.ProjectListMakeLi>
        {itemsToDisplay.map((project: any) => (
          <ProjectsListItem key={project.id} project={project} />
        ))}
      </S.ProjectsListUl>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.ProjectListSection>
  );
}
