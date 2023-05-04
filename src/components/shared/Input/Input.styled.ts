import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const InputWrapper = styled.div<{ $width?: string }>`
  position: relative;

  display: flex;
  align-items: center;

  width: ${({ $width }) => ($width ? $width : "560px")};
  height: 72px;

  padding: 0 12px;

  outline: none;
  border-radius: 42px;
  border: 2px solid #fff;
  background-color: var(--white-100);

  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-color: var(--blue-main);
  }
`;

export const Input = styled.input`
  width: 100%;

  font-size: 16px;
  font-weight: 400;

  margin-left: 6px;

  color: #33373d;
  caret-color: #00c3cc;
  background-color: #fff;

  &::placeholder {
    color: #a7afb7;
  }

  &:focus {
    outline: none;
  }
`;

export const IconArrowBackWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 12px;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f8f9fb;
  }
`;

export const IconCloseWrapper = styled.span`
  margin-right: 8px;
  cursor: pointer;
`;

export const IconSearchWrapper = styled.button`
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border-radius: 50%;
  background-color: var(--blue-main);
`;
