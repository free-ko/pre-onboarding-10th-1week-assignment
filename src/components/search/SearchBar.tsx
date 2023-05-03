import { useRef, useState } from "react";
import styled from "@emotion/styled";

import { Input } from "~/components/shared/Input";
import { DefaultRecommend } from "~/components/search";

const Wrapper = styled.div`
  position: relative;
`;

const Styled = {
  Wrapper,
};

const SearchBar = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleEnterPress = () => {
    const searchData = ref.current?.value.trim();

    if (!searchData) {
      return alert("검색어를 입력해주세요.");
    }
  };

  const handleChange = () => {
    // 실시간으로 검색 결과 UI에 검색어를 렌더링 해야 함
  };

  const handleClearInput = () => {
    const { current } = ref;
    if (current === null) {
      return;
    }

    current.value = "";
  };

  return (
    <Styled.Wrapper>
      <Input
        ref={ref}
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
      {isFocus && <DefaultRecommend />}
    </Styled.Wrapper>
  );
};

export default SearchBar;
