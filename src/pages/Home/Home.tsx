import styled from "@emotion/styled";

import { Search } from "~/components/search";
import { GapUpDownBy } from "~/components/shared";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: var(--blue-sky);
`;

const Title = styled.h1`
  font-size: var(--size-Large);
  font-weight: var(--weight-bold);
  text-align: center;
  line-height: 1.6;
`;

const Styled = {
  Wrapper,
  Title,
};

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Styled.Title>
      <GapUpDownBy $height={24} />
      <Search />
    </Styled.Wrapper>
  );
};

export default HomePage;
