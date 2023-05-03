import { useRef } from "react";

import { Input } from "~/components/shared/Input";

const Search = () => {
  const ref = useRef<HTMLInputElement | null>(null);

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
    <Input
      ref={ref}
      hasSearchIcon
      placeholder="질환명을 입력해 주세요."
      onChange={handleChange}
      onClear={handleClearInput}
      onEnterPress={handleEnterPress}
      style={{ width: "490px" }}
    />
  );
};

export default Search;
