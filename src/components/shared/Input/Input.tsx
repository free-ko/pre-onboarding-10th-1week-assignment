import { useState, forwardRef } from "react";
import { useRouter } from "next/router";
import type { FocusEvent, KeyboardEvent, ChangeEvent, MouseEvent } from "react";

import { IconArrowBack, IconSearch } from "public/svg";
import { IconClose } from "public/svg";

import * as Styled from "./Input.styled";

type InputProps = {
  placeholder: string;
  inputValue?: string;
  hasSearchIcon?: boolean;
  hasArrowBackIcon?: boolean;
  hasCloseIcon?: boolean;
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
      placeholder,
      inputValue,
      hasSearchIcon = true,
      hasArrowBackIcon = false,
      hasCloseIcon = false,
      style,
      onFocus,
      onBlur,
      onClear,
      onChange,
      onEnterPress,
    },
    ref
  ) => {
    const router = useRouter();
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (typeof onFocus === "function") {
        onFocus(event);
      }

      setIsFocus(true);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (typeof onBlur === "function") {
        onBlur(event);
      }

      setIsFocus(false);
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
      if (typeof onClear === "function") {
        onClear(event);
      }
    };

    const handleBackClick = () => {
      void router.push("/");
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
          {hasSearchIcon && (
            <Styled.IconSearchWrapper aria-hidden={true}>
              <IconSearch isActive={isFocus} />
            </Styled.IconSearchWrapper>
          )}

          <Styled.Input
            ref={ref}
            type="text"
            defaultValue={inputValue}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleEnterPress}
          />

          {hasCloseIcon && (
            <Styled.IconCloseWrapper
              aria-hidden={true}
              onClick={handleClearInput}
            >
              <IconClose />
            </Styled.IconCloseWrapper>
          )}
        </Styled.InputWrapper>
      </Styled.InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
