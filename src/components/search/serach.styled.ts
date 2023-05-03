import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  top: 78px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  width: 490px;

  padding: 24px 16px;
  word-break: break-word;

  border-radius: 16px;
  background-color: var(--white-100);
`;

export const Title = styled.h1`
  font-size: var(--size-small);
  font-weight: var(--weight-mediuam);
  color: var(--gray);
`;

export const SearchQueryListWrapper = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;

  width: 100%;
`;

export const SearchQueryWrapper = styled.li`
  display: flex;
  gap: 8px;

  width: 100%;
`;

export const SearchQueryText = styled.p`
  font-size: var(--size-regular);
  font-weight: var(--weight-mediuam);
  color: var(--black-100);
`;

export const SearchingQueryText = styled(SearchQueryText)`
  font-size: var(--size-regular);
  font-weight: var(--weight-bold);
  color: var(--black-100);
`;

export const RecommendSearchQueryListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
`;

export const RecommendSearchQueryWrapper = styled.li`
  width: fit-content;

  padding: 12px;
  border-radius: 12px;
  background-color: var(--blue-sky);
`;

export const RecommendSearchText = styled.p`
  font-size: var(--size-regular);
  font-weight: var(--weight-mediuam);
  color: var(--blue-main);
`;

export const Bar = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.4;

  background-color: var(--gray-light);
`;
