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
  keydownInput?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
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
  keydownInput,
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
          id={inputId}
          disabled={isDisabled}
          value={value}
          placeholder={placeHolder}
          onKeyDown={onKeyDown}
          colsCount={cols}
          rowsCount={rows}
          onChange={changeInput}
          onKeyDownCapture={keydownInput ? keydownInput : undefined} // Use when you want to intercept the keydown event before it bubbles up to the document
        />
      </div>
    </div>
  );
};

export default ShadTextArea;
