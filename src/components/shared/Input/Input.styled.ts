import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;
`;

export const InputWrapper = styled.div<{ $width?: string }>`
  position: relative;

  display: flex;
  align-items: center;

  width: ${({ $width }) => ($width ? $width : "560px")};
  height: 48px;

  padding-right: 19px;

  outline: none;
  border: 1px solid #c2c6ce;
  border-radius: 1000px;
  background-color: #fff;

  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #959ca6;
  }

  &:focus-within {
    border-color: #00c3cc;
  }
`;

export const Input = styled.input`
  width: 100%;

  font-size: 16px;
  font-weight: 400;

  margin-left: 16px;

  color: #33373d;
  caret-color: #00c3cc;
  background-color: #fff;

  &::placeholder {
    color: #c2c6ce;
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

export const IconSearchWrapper = styled.span`
  margin-left: 17px;
`;

export const IconCloseWrapper = styled.span`
  cursor: pointer;
`;
