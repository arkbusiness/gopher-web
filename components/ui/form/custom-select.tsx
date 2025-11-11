import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface CustomSelectProps {
  value: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  handleValueChange: (value: string) => void;
}

export const CustomSelect = ({
  value,
  placeholder = "Select...",
  options,
  handleValueChange,
}: CustomSelectProps) => {
  return (
    <Select
      value={value}
      onValueChange={(value) => {
        handleValueChange(value);
      }}
    >
      <SelectTrigger
        className="flex w-full h-12! bg-background"
        id="select-selector"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem value={option.value.toString()} key={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
