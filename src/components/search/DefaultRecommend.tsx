import styled from "@emotion/styled";
import { GapUpDownBy } from "~/components/shared";
import { IconSearch } from "~/components/shared/Icons";

const Wrapper = styled.div`
  position: absolute;
  top: 78px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  width: 490px;
  height: 246px;

  padding: 24px 16px;

  border-radius: 16px;
  background-color: var(--white-100);
`;

const Title = styled.h1`
  font-size: var(--size-small);
  font-weight: var(--weight-mediuam);
  color: var(--gray);
`;

const SearchQueryListWrapper = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;

  width: 100%;
`;

const SearchQueryWrapper = styled.li`
  display: flex;
  gap: 8px;

  width: 100%;
`;

const SearchQueryText = styled.p`
  font-size: var(--size-regular);
  font-weight: var(--weight-mediuam);
  color: var(--black-100);
`;

const RecommendSearchQueryListWrapper = styled.ul`
  display: flex;
  gap: 12px;

  width: 100%;
`;

const RecommendSearchQueryWrapper = styled.li`
  width: fit-content;

  padding: 12px;
  border-radius: 12px;
  background-color: var(--blue-sky);
`;

const RecommendSearchText = styled.p`
  font-size: var(--size-regular);
  font-weight: var(--weight-mediuam);
  color: var(--blue-main);
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.4;

  background-color: var(--gray-light);
`;

const Styled = {
  Wrapper,
  SearchQueryListWrapper,
  SearchQueryWrapper,
  RecommendSearchQueryListWrapper,
  RecommendSearchQueryWrapper,
  RecommendSearchText,
  Title,
  SearchQueryText,
  Bar,
};

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

const DefaultRecommend = () => {
  return (
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
            <Styled.RecommendSearchText>{search}</Styled.RecommendSearchText>
          </Styled.RecommendSearchQueryWrapper>
        ))}
      </Styled.RecommendSearchQueryListWrapper>
    </Styled.Wrapper>
  );
};

export default DefaultRecommend;
