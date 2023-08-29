import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  value: string;
  id: string;
  inputStyleOverride?: React.CSSProperties;
  cardStyleOverride?: React.CSSProperties;
  changeInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions: string[];
  placeholder?: string;
};

const NeuDropdown = ({
  value,
  id,
  inputStyleOverride,
  changeInput,
  placeholder,
  cardStyleOverride,
  selectOptions,
}: Props) => {
  return (
    <NeuCard cardStyleOverride={cardStyleOverride}>
      <select
        placeholder={placeholder}
        className={styles.neuInput}
        style={{
          ...inputStyleOverride,
          color: '#fff',
          border: 'none',
          outline: 'none',
          backgroundColor: '#242424',
          fontWeight: 500,
          padding: '0 1rem',
          height: '1.5rem',
        }}
        id={id}
        value={value}
        onChange={changeInput}>
        {selectOptions.map((option, key) => {
          return (
            <option key={`type-options-${key}`} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </NeuCard>
  );
};

export default NeuDropdown;
