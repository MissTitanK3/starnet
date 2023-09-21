import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';

type Props = {
  SelectItems: {
    value: string;
    label: string;
  }[];
};

const ShadSelect = ({ SelectItems = [] }: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          style={{
            margin: '25px',
          }}
          placeholder="Select Mission Type"
        />
      </SelectTrigger>
      <SelectContent
        position="popper"
        side="top"
        style={{
          zIndex: 100,
          width: '180px',
          height: SelectItems.length > 5 ? '200px' : 'auto',
        }}>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          {SelectItems.map((item, key) => (
            <SelectItem key={key} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ShadSelect;
