import { GapUpDownBy } from "~/components/shared";
import { IconSearch } from "~/components/shared/Icons";

import * as Styled from "./serach.styled";

const searchQueryList = [
  {
    id: "검색",
    search: "검색",
  },
  {
    id: "안과",
    search: "안과",
  },
];

const recommendSearchQueryList = [
  {
    id: "B형간염",
    search: "B형간염",
  },
  {
    id: "비만",
    search: "비만",
  },
  {
    id: "관절염",
    search: "관절염",
  },
  {
    id: "우울증",
    search: "우울증",
  },
  {
    id: "식도염",
    search: "식도염",
  },
];

export const SearchingInfo = ({ inputValue }: { inputValue: string }) => {
  const hasInputValue = !!inputValue;

  return (
    <>
      {hasInputValue ? (
        <Styled.Wrapper>
          <Styled.SearchQueryWrapper>
            <IconSearch size="18" color="#a7afb7" />
            <Styled.SearchingQueryText>{inputValue}</Styled.SearchingQueryText>
          </Styled.SearchQueryWrapper>
          <GapUpDownBy $height={16} />
          <Styled.Title>추천 검색어</Styled.Title>
          <GapUpDownBy $height={16} />
          <Styled.RecommendSearchQueryListWrapper>
            {recommendSearchQueryList.map(({ id, search }) => (
              <Styled.SearchQueryWrapper key={id}>
                <IconSearch size="18" color="#a7afb7" />
                <Styled.SearchQueryText>{search}</Styled.SearchQueryText>
              </Styled.SearchQueryWrapper>
            ))}
          </Styled.RecommendSearchQueryListWrapper>
        </Styled.Wrapper>
      ) : (
        <Styled.Wrapper>
          <Styled.Title>추천 검색어</Styled.Title>
          <GapUpDownBy $height={16} />
          <Styled.SearchQueryListWrapper>
            {searchQueryList.map(({ id, search }) => (
              <Styled.SearchQueryWrapper key={id}>
                <IconSearch size="18" color="#a7afb7" />
                <Styled.SearchQueryText>{search}</Styled.SearchQueryText>
              </Styled.SearchQueryWrapper>
            ))}
          </Styled.SearchQueryListWrapper>
          <GapUpDownBy $height={24} />
          <Styled.Bar />
          <GapUpDownBy $height={16} />
          <Styled.Title>추천 검색어로 검색해보세요</Styled.Title>
          <GapUpDownBy $height={16} />
          <Styled.RecommendSearchQueryListWrapper>
            {recommendSearchQueryList.map(({ id, search }) => (
              <Styled.RecommendSearchQueryWrapper key={id}>
                <Styled.RecommendSearchText>
                  {search}
                </Styled.RecommendSearchText>
              </Styled.RecommendSearchQueryWrapper>
            ))}
          </Styled.RecommendSearchQueryListWrapper>
        </Styled.Wrapper>
      )}
    </>
  );
};
