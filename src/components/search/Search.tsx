import { useRef, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "~/components/shared/Input";
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

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleEnterPress = () => {
    const searchData = inputRef.current?.value.trim();

    if (!searchData) {
      return alert("검색어를 입력해주세요.");
    }
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
        onEnterPress={handleEnterPress}
        style={{ width: "490px" }}
      />
      {isFocus && <SearchingInfo inputValue={inputValue} />}
    </Styled.Wrapper>
  );
};

export default Search;
