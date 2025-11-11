"use client";

import { Clock } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import { FieldValues, Path } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

interface TimePickerProps<T extends FieldValues> {
  name: Path<T> | string;
  placeholderText?: string;
  value: Date | null;
  handleChange: ({
    name,
    value,
  }: {
    name: Path<T> | string;
    value: Date | null;
  }) => void;
}

export const TimePicker = <T extends FieldValues>({
  name,
  placeholderText,
  value,
  handleChange,
}: TimePickerProps<T>) => {
  return (
    <div className="flex items-center h-12 w-full rounded-lg border  bg-background  text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden">
      <div className="flex-1">
        <ReactDatePicker
          name={name}
          onChange={(date) => handleChange({ name, value: date })}
          selected={value}
          placeholderText={placeholderText}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={5}
          timeCaption="Time:"
          autoComplete="off"
          dateFormat="h:mm aa"
          className="h-full"
        />
      </div>
      <div className="w-10 flex h-full justify-center items-center border-l border-border">
        <Clock size={16} />
      </div>
    </div>
  );
};
