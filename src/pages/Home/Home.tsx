import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: var(--blue-sky);
`;

const Styled = {
  Wrapper,
};

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <h1>HOME</h1>
    </Styled.Wrapper>
  );
};

export default HomePage;
