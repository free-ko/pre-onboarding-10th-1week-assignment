import { KeyboardEvent, useRef, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "~/components/shared/Input";
import { recommendSearchQueryList } from "./mockData";
import { SearchingInfo } from "./SearchingInfo";

const Wrapper = styled.div`
  position: relative;
`;

const Styled = {
  Wrapper,
};

const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedItemIdx, setSelectedItemIdx] = useState<number>(-1);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = () => {
    setInputValue(inputRef.current?.value.trim() || "");
    // 실시간으로 검색 결과 UI에 검색어를 렌더링 해야 함
  };

  const handleClearInput = () => {
    const { current } = inputRef;
    if (current === null) {
      return;
    }

    current.value = "";
    setInputValue("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    let itemIdx = -1;

    switch (event.key) {
      case "ArrowUp":
        itemIdx =
          selectedItemIdx > -1
            ? selectedItemIdx - 1
            : recommendSearchQueryList.length - 1;

        setSelectedItemIdx(itemIdx);

        break;
      case "ArrowDown":
        itemIdx =
          selectedItemIdx < recommendSearchQueryList.length - 1
            ? selectedItemIdx + 1
            : -1;
        setSelectedItemIdx(itemIdx);
        break;
      default:
        break;
    }
  };

  const createSelectedItemClassName =
    (selectedItemIdx: number) => (currentIdx: number) => {
      return selectedItemIdx === currentIdx ? "selected" : "";
    };

  return (
    <Styled.Wrapper>
      <Input
        ref={inputRef}
        hasSearchIcon
        isFocus={isFocus}
        placeholder="질환명을 입력해 주세요."
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onClear={handleClearInput}
        onKeyDown={handleKeyDown}
        style={{ width: "490px" }}
      />
      {/*{isFocus && (*/}
      {/*  <SearchingInfo*/}
      {/*    inputValue={inputValue}*/}
      {/*    createSelectedItemClassName={createSelectedItemClassName(*/}
      {/*      selectedItemIdx*/}
      {/*    )}*/}
      {/*  />*/}
      {/*)}*/}

      <SearchingInfo
        inputValue={inputValue}
        createSelectedItemClassName={createSelectedItemClassName(
          selectedItemIdx
        )}
      />
    </Styled.Wrapper>
  );
};

export default Search;
