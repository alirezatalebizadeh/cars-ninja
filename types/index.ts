import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyle?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  pageNumber: number;
  options: OptionProps[];
}

export interface SearchManufaturerProp {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
