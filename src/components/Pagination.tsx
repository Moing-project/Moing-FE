import React from "react";
import * as S from "../styledComponents/commons/Pagination";
import { After, Before, First, Last } from "./UsingIcons";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  // 이전 페이지로 이동하는 함수
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // 페이지 번호 클릭 시 이동하는 함수
  const goToPage = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  // 맨 처음 페이지로 이동하는 함수
  const goToFirstPage = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  // 맨 마지막 페이지로 이동하는 함수
  const goToLastPage = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };

  return (
    <S.Pagination>
      <S.PaginationNaviBtn
        onClick={goToFirstPage}
        className={currentPage === 1 ? "inactive" : "active"}
      >
        <First />
      </S.PaginationNaviBtn>
      <S.PaginationNaviBtn
        onClick={goToPreviousPage}
        className={currentPage > 1 ? "active" : "inactive"}
      >
        <Before />
      </S.PaginationNaviBtn>
      <div>
        {[...Array(totalPages)]?.map((_, index) => (
          <S.PaginationPageBtn
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </S.PaginationPageBtn>
        ))}
      </div>
      <S.PaginationNaviBtn
        onClick={goToNextPage}
        className={currentPage < totalPages ? "active" : "inactive"}
      >
        <After />
      </S.PaginationNaviBtn>
      <S.PaginationNaviBtn
        onClick={goToLastPage}
        className={currentPage === totalPages ? "inactive" : "active"}
      >
        <Last />
      </S.PaginationNaviBtn>
    </S.Pagination>
  );
}
