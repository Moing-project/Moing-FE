import { useState, useEffect } from "react";
import { UseMutation } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { MutationDefinition } from "@reduxjs/toolkit/dist/query";

export function useDuplicateCheck(
  queryFunction: any,
  queryParam: string,
  inputValue: string,
  isValidInput: boolean
) {
  const [isDuplicated, setIsDuplicated] = useState(false);

  const { data, isLoading } = queryFunction(
    { [queryParam]: inputValue },
    {
      skip: !isValidInput || inputValue === "",
      // 값 유효하고, 비어있지 않을때만 요청 보내기
    }
  );

  ///// ## 중복 검사 결과 표시
  useEffect(() => {
    // 요청 중이거나, 비어있거나, 유효하지 않을 때 return
    if (isLoading || inputValue === "" || !isValidInput) {
      setIsDuplicated(false);
      return;
    }
    setIsDuplicated(data?.msg !== "success");
  }, [inputValue, isValidInput, data, isLoading]);

  return isDuplicated;
}

export function useDuplicateMutationCheck(
  mutationFunction: UseMutation<MutationDefinition<any, any, any, boolean>>,
  queryParam: string,
  inputValue: string,
  isValidInput: boolean
) {
  const [isDuplicated, setIsDuplicated] = useState(false);

  const [dataFunction, { isLoading }] = mutationFunction();

  const query = async () => {
    await dataFunction({ queryParam: inputValue })
      .unwrap()
      .then((data) => {
        setIsDuplicated(data);
      });
  };
  ///// ## 중복 검사 결과 표시
  useEffect(() => {
    // 요청 중이거나, 비어있거나, 유효하지 않을 때 return
    if (isLoading || inputValue === "" || !isValidInput) {
      setIsDuplicated(false);
      return;
    }
    query();
  }, [dataFunction, inputValue, isValidInput, isLoading, query]);

  return isDuplicated;
}
