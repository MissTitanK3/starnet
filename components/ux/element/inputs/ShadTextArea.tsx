import { Textarea } from '@/components/ui/textarea';
import React from 'react';

type Props = {
  value: string | number | readonly string[] | undefined;
  placeHolder?: string;
  label?: string;
  isDisabled?: boolean;
  inputId: string;
  inputStyleOverride?: React.CSSProperties;
  changeInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  id: string;
  cols?: number;
  rows?: number;
};

const ShadTextArea = ({
  value,
  placeHolder,
  label,
  isDisabled = false,
  inputId,
  changeInput,
  onKeyDown,
  inputStyleOverride,
  id,
  cols = 30,
  rows = 5,
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
        <Textarea
          style={inputStyleOverride}
          onChange={changeInput}
          id={inputId}
          disabled={isDisabled}
          value={value}
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
          colsCount={cols}
          rowsCount={rows}
        />
      </div>
    </div>
  );
};

export default ShadTextArea;
