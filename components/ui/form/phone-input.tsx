"use client";

import PhoneInput, { type Value } from "react-phone-number-input";

import "react-phone-number-input/style.css";

interface PhoneNumberInputProp {
  name: string;
  value?: string;
  isDisabled?: boolean;
  onChange: (value: Value | undefined) => void;
}
export const PhoneNumberInput = ({
  value,
  name,
  isDisabled = false,
  onChange,
}: PhoneNumberInputProp) => {
  return (
    <div className="w-full">
      <PhoneInput
        placeholder="Eg. +2348012345678"
        id={name}
        value={value}
        defaultCountry="NG"
        disabled={isDisabled}
        className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
        onChange={(value) => {
          onChange(value);
        }}
      />
    </div>
  );
};
