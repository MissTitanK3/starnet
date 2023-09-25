import { Input } from '@/components/ui/input';
import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  placeHolder?: string;
  label?: string;
  isDisabled?: boolean;
  inputId: string;
  adornment?: 'left' | 'right';
  adornmentIcon?: React.ReactNode;
  inputStyleOverride?: React.CSSProperties;
  changeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setStep?: number;
  id: string;
  defaultValue?: string | number | readonly string[] | undefined;
};

const ShadInput = ({
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
  id,
  defaultValue,
}: Props) => {
  return (
    <div
      id={id}
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
          style={{
            width: '95%',
            margin: '0 auto',
            ...inputStyleOverride,
          }}
          onChange={changeInput}
          id={inputId}
          disabled={isDisabled}
          value={value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
          onTimeUpdateCapture={type === 'time' ? changeInput : undefined}
          step={type === 'time' && setStep ? setStep : undefined}
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

export default ShadInput;
