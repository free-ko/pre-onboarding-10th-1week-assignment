import { useState, forwardRef } from "react";
import type { FocusEvent, KeyboardEvent, ChangeEvent, MouseEvent } from "react";

import {
  IconClose,
  IconSearch,
  IconArrowBack,
} from "~/components/shared/Icons";

import * as Styled from "./Input.styled";

type InputProps = {
  isFocus: boolean;
  placeholder: string;
  inputValue?: string;
  hasSearchIcon?: boolean;
  hasArrowBackIcon?: boolean;
  style?: { width: string };
  onClear?: (event: MouseEvent) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onEnterPress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isFocus,
      placeholder,
      inputValue,
      hasSearchIcon = true,
      hasArrowBackIcon = false,
      style,
      onFocus,
      onBlur,
      onClear,
      onChange,
      onEnterPress,
    },
    ref
  ) => {
    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (typeof onFocus === "function") {
        onFocus(event);
      }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (typeof onBlur === "function") {
        onBlur(event);
      }
    };

    const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if (typeof onEnterPress === "function" && event.key === "Enter") {
        onEnterPress(event);
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === "function") {
        onChange(event);
      }
    };

    const handleClearInput = (event: MouseEvent) => {
      event.preventDefault();
      if (typeof onClear === "function") {
        onClear(event);
      }
    };

    const handleBackClick = () => {
      // Tablet & Mobile 화면일 때, 검색 창을 꺼야 함
    };

    return (
      <Styled.InputContainer>
        {hasArrowBackIcon && (
          <Styled.IconArrowBackWrapper
            aria-hidden={true}
            onClick={handleBackClick}
          >
            <IconArrowBack />
          </Styled.IconArrowBackWrapper>
        )}

        <Styled.InputWrapper tabIndex={0} $width={style?.width}>
          {!isFocus && <IconSearch size="21" color=" #a7afb7" />}

          <Styled.Input
            ref={ref}
            type="text"
            defaultValue={inputValue}
            placeholder={isFocus ? "" : placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleEnterPress}
          />

          {isFocus && (
            <Styled.IconCloseWrapper
              aria-hidden={true}
              onMouseDown={handleClearInput}
            >
              <IconClose />
            </Styled.IconCloseWrapper>
          )}

          {hasSearchIcon && (
            <Styled.IconSearchWrapper type="button" aria-hidden={true}>
              <IconSearch size="24" color="#FFF" />
            </Styled.IconSearchWrapper>
          )}
        </Styled.InputWrapper>
      </Styled.InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
