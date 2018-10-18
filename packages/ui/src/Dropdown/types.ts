// Global import
import { SelectHTMLAttributes } from 'react';

export interface DropdownItem {
  isDisabled?: boolean;
  label: string;
  options?: DropdownItem[];
  value: any;
}

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  clearable?: boolean;
  dropdownClass?: string;
  items: DropdownItem[];
  searchable?: boolean;
  titleClass?: string;
  width?: string;
  onChange?: (name, value) => void;
};
