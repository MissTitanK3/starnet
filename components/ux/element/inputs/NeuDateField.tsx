import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  value: string | number | readonly string[] | undefined;
  id: string;
  inputStyleOverride?: React.CSSProperties;
  cardStyleOverride?: React.CSSProperties;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const NeuDateField = ({ value, id, inputStyleOverride, changeInput, placeholder, cardStyleOverride }: Props) => {
  return (
    <NeuCard cardStyleOverride={cardStyleOverride}>
      <input
        type="datetime-local"
        placeholder={placeholder}
        className={styles.neuInput}
        style={inputStyleOverride}
        id={id}
        value={value}
        onChange={changeInput}
      />
    </NeuCard>
  );
};

export default NeuDateField;
