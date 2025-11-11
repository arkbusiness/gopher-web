"use client";

import { enUS } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { FieldValues, Path } from "react-hook-form";
registerLocale("en", enUS);

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProp<T extends FieldValues> {
  name: Path<T> | string;
  placeholderText?: string;
  showTimeSelect?: boolean;
  isDisabled?: boolean;
  dateFormat?: string;
  value: Date | null;
  handleChange: ({
    name,
    value,
  }: {
    name: Path<T> | string;
    value: Date | null;
  }) => void;
}

export const DatePicker = <T extends FieldValues>({
  name,
  placeholderText,
  value,
  handleChange,
  showTimeSelect = false,
  isDisabled = false,
}: DatePickerProp<T>) => {
  const format = showTimeSelect ? "MMMM d, yyyy h:mm aa" : "MMMM d, yyyy";

  return (
    <div>
      <div className="flex items-center h-12 w-full rounded-lg border  bg-background  text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden">
        <div className="flex-1">
          <ReactDatePicker
            name={name}
            onChange={(date) => handleChange({ name, value: date })}
            selected={value}
            placeholderText={placeholderText}
            disabled={isDisabled}
            locale="en"
            dateFormat={format}
            showTimeSelect={showTimeSelect}
            timeIntervals={15}
            autoComplete="off"
            className="w-full h-full"
          />
        </div>
        <div className="w-10 flex h-full justify-center items-center border-l border-border">
          <CalendarIcon size={16} />
        </div>
      </div>
    </div>
  );
};
