import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';
import ShadInput from './ShadInput';

type Props = {
  SelectItems: {
    value: string;
    label: string;
  }[];
  onChange: (e: any) => void;
  inputId: string;
  selectDropdownTitle?: string;
  dropdownWidth?: string;
  value?: string;
};

const ShadSelect = ({
  SelectItems = [],
  onChange,
  inputId,
  selectDropdownTitle,
  dropdownWidth = '180px',
  value,
}: Props) => {
  const [activeSearch, setActiveSearch] = useState('');
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
    <Select onValueChange={handleUpdate} defaultValue={value}>
      <SelectTrigger
        style={{
          width: '95%',
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
          width: dropdownWidth,
          height: SelectItems.length > 5 ? '200px' : 'auto',
        }}>
        <ShadInput
          id="searching"
          inputId="searching"
          placeHolder="Search..."
          type="text"
          inputStyleOverride={{
            width: '90%',
            margin: '15px auto -15px auto',
            fontSize: '1rem',
          }}
          value={activeSearch}
          changeInput={(e) => setActiveSearch(e.target.value)}
        />
        <hr />
        <SelectGroup
          placeholder="Select One"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '5px',
          }}>
          {SelectItems.filter((item) => {
            if (activeSearch === '') {
              return item;
            } else if (item.label.toLowerCase().includes(activeSearch.toLowerCase())) {
              return item;
            }
          }).map((item, key) => (
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
              {item.label === 'Command*' ? <strong>{item.label}</strong> : <>{item.label}</>}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ShadSelect;
