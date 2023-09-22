'use client';

import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { SelectSingleEventHandler } from 'react-day-picker';
import ShadButton from '../buttons/ShadButton';
import Overlay from '../overlays/Overlay';

type Props = {
  OnSelectSingle?: SelectSingleEventHandler | undefined;
  singleValue?: Date;
};

const ShadCalendar = ({ OnSelectSingle, singleValue }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ShadButton
          styled={{
            width: '180px',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
          variant="default">
          {singleValue ? format(singleValue, 'PPP') : <span>Pick a date</span>}
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
            onSelect={OnSelectSingle}
            selected={singleValue}
          />
        </Overlay>
      </PopoverContent>
    </Popover>
  );
};

export default ShadCalendar;
