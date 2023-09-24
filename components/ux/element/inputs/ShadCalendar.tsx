'use client';

import React, { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { SelectSingleEventHandler } from 'react-day-picker';
import ShadButton from '../buttons/ShadButton';
import Overlay from '../overlays/Overlay';

type Props = {
  inputId: string;
  value: Date;
  selectedUpdate: (e: any) => any;
};

const ShadCalendar = ({ value, inputId, selectedUpdate }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const OnSelected = (e: any) => {
    const updated = {
      ...e,
      target: {
        id: inputId,
        value: new Date(e as Date)?.toISOString(),
      },
    } as any;
    selectedUpdate(updated);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <ShadButton
          styled={{
            width: '180px',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
          variant="default">
          {value instanceof Date && !isNaN(value.getTime()) ? format(value, 'PPP') : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </ShadButton>
      </PopoverTrigger>
      <PopoverContent
        style={{
          zIndex: 10000,
          position: 'absolute',
        }}
        className="w-auto p-0"
        align="start">
        <Overlay>
          <Calendar
            style={{
              top: '20dvh',
              left: '30dvw',
            }}
            className="rounded-md border"
            mode="single"
            id={inputId}
            onSelect={OnSelected}
            selected={value}
            onDayClick={handleOpen}
          />
        </Overlay>
      </PopoverContent>
    </Popover>
  );
};

export default ShadCalendar;
