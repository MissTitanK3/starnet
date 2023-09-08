import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  type: HTMLInputElement['type'];
  value: string | number;
  id: string;
  inputStyleOverride?: React.CSSProperties;
  cardStyleOverride?: React.CSSProperties;
  changeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const NeuInput = ({
  type,
  value,
  id,
  inputStyleOverride,
  changeInput,
  placeholder,
  cardStyleOverride,
  onKeyDown,
}: Props) => {
  return (
    <NeuCard cardStyleOverride={cardStyleOverride}>
      <input
        placeholder={placeholder}
        className={styles.neuInput}
        style={inputStyleOverride}
        id={id}
        type={type}
        value={value}
        onChange={changeInput}
        multiple
        onKeyDown={onKeyDown}
      />
    </NeuCard>
  );
};

export default NeuInput;
