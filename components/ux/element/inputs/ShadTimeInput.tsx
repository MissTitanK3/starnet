import { Input } from '@/components/ui/input';
import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute | undefined;
  // value: string | number | readonly string[] | undefined;
  value: string | Date | Date[] | null | undefined;
  placeHolder?: string;
  label?: string;
  isDisabled?: boolean;
  inputId?: string;
  adornment?: 'left' | 'right';
  adornmentIcon?: React.ReactNode;
  inputStyleOverride?: React.CSSProperties;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setStep?: number;
  startDate?: Date;
};

const ShadTimeInput = ({
  type,
  value,
  placeHolder,
  label,
  isDisabled = false,
  inputId,
  changeInput,
  onKeyDown,
  adornment,
  adornmentIcon,
  inputStyleOverride,
  setStep,
  startDate,
}: Props) => {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startDate) return;
    const timeZoneOffsetInMinutes = new Date().getTimezoneOffset();
    const offset = -timeZoneOffsetInMinutes;
    const sign = offset >= 0 ? '+' : '-';
    const hours = Math.abs(Math.floor(offset / 60));
    const minutes = Math.abs(offset % 60);
    const timeZone = `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const isoString = `${new Date(startDate).toISOString().substring(0, 10)}T${e.target.value}:00.000${timeZone}`;
    const updated = {
      ...e,
      target: {
        id: inputId,
        value: isoString,
      },
    } as any;
    changeInput(updated);
  };
  return (
    <div
      className="Input"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      {label && <label>{label}</label>}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {adornment === 'left' && (
          <i
            style={{
              marginRight: '0.5rem',
            }}>
            {adornmentIcon}
          </i>
        )}
        <Input
          style={inputStyleOverride}
          onChange={handleTimeChange}
          id={inputId}
          disabled={isDisabled}
          // value={value}
          value={
            value
              ? new Date(value as string).toLocaleTimeString('en-US', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
          }
          type="time"
          min="00:01"
          max="23:59"
          pattern="^(0[8-9]|1[0-6]):[0-5][0-9]$"
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
          onTimeUpdateCapture={type === 'time' ? changeInput : undefined}
          step={setStep ? setStep : 60}
        />
        {adornment === 'right' && (
          <i
            style={{
              marginLeft: '0.5rem',
            }}>
            {adornmentIcon}
          </i>
        )}
      </div>
    </div>
  );
};

export default ShadTimeInput;
