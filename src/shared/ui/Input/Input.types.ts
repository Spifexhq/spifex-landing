import type React from "react";

export type InputKind = "text";
export type InputVariant = "default" | "outlined" | "filled";
export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export type InputCommonProps = {
  kind?: InputKind;
  label?: string;
  errorMessage?: string;
  variant?: InputVariant;
  size?: InputSize;
  isLoading?: boolean;
  style?: React.CSSProperties;
};

export type TextInputProps = InputCommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    kind?: "text";
    showTogglePassword?: boolean;
  };

export type InputProps = TextInputProps;