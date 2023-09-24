import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

type Props = {
  SelectItems: {
    value: string;
    label: string;
  }[];
  onChange: (e: any) => void;
  inputId: string;
  selectDropdownTitle?: string;
  dropdownLabel?: string;
};

const ShadSelect = ({ SelectItems = [], onChange, inputId, selectDropdownTitle, dropdownLabel }: Props) => {
  const handleUpdate = (value: string) => {
    const updated = {
      target: {
        id: inputId,
        value: value,
      },
    };
    onChange(updated);
  };

  return (
    <Select onValueChange={handleUpdate}>
      <SelectTrigger
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 500,
          cursor: 'pointer',
        }}
        className="w-[180px]">
        <SelectValue
          style={{
            margin: '25px',
          }}
          placeholder={selectDropdownTitle ? selectDropdownTitle : 'Select One'}
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
        <SelectGroup
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '10px',
          }}>
          {/* <SelectLabel>Select One</SelectLabel> */}
          {SelectItems.map((item, key) => (
            <SelectItem
              style={{
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 500,
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              key={key}
              value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ShadSelect;
