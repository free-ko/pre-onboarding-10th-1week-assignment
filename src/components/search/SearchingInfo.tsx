import { GapUpDownBy } from "~/components/shared";
import { IconSearch } from "~/components/shared/Icons";
import { recommendSearchQueryList } from "./mockData";

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

type Props = {
  inputValue: string;
  createSelectedItemClassName: (currentIdx: number) => string;
};
export const SearchingInfo = ({
  inputValue,
  createSelectedItemClassName,
}: Props) => {
  const hasInputValue = !!inputValue;

  return (
    <>
      {hasInputValue ? (
        <Styled.Wrapper>
          <Styled.SearchingWrapper>
            <IconSearch size="18" color="#a7afb7" />
            <Styled.SearchingQueryText>{inputValue}</Styled.SearchingQueryText>
          </Styled.SearchingWrapper>
          <GapUpDownBy $height={16} />
          <Styled.Title>추천 검색어</Styled.Title>
          <GapUpDownBy $height={16} />
          <Styled.RecommendSearchQueryListWrapper>
            {recommendSearchQueryList.map(({ id, search }, index) => {
              return (
                <Styled.SearchQueryWrapper
                  key={id}
                  selected={createSelectedItemClassName(index)}
                >
                  <IconSearch size="18" color="#a7afb7" />
                  <Styled.SearchQueryText>{search}</Styled.SearchQueryText>
                </Styled.SearchQueryWrapper>
              );
            })}
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
