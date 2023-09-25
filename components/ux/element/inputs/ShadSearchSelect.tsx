'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Overlay } from '@radix-ui/react-dialog';
import ShadButton from '../buttons/ShadButton';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export type Props = {
  SelectItems: {
    value: string;
    label: string;
  }[];
  onChange: (e: any) => void;
  inputId: string;
  selectDropdownTitle?: string;
  dropdownLabel?: string;
  dropdownWidth?: string;
  outputValue?: string;
};

function ShadSearchSelect({ selectDropdownTitle = 'Search', SelectItems = frameworks, outputValue, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ShadButton
          styled={{
            width: '100%',
          }}
          role="combobox"
          aria-expanded={open}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
              width: '90%',
            }}>
            {value ? SelectItems.find((items) => items.value === value)?.label : `${selectDropdownTitle}...`}
            <ChevronsUpDown />
          </div>
        </ShadButton>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>Nothing found.</CommandEmpty>
          <CommandGroup>
            {SelectItems.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}>
                <Check
                  style={{
                    opacity: value === item.value ? 1 : 0,
                    transition: 'opacity 100ms ease-in-out',
                    marginRight: '0.5rem',
                    height: '1rem',
                    width: '1rem',
                  }}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ShadSearchSelect;
