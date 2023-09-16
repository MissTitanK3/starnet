import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  type: HTMLInputElement['type'];
  value: string | undefined;
  id: string;
  inputStyleOverride?: React.CSSProperties;
  cardStyleOverride?: React.CSSProperties;
  changeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  adornment?: 'left' | 'right';
  adornmentIcon?: React.ReactNode;
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
  adornment,
  adornmentIcon,
}: Props) => {
  return (
    <NeuCard cardStyleOverride={cardStyleOverride}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {adornment === 'left' && (
          <i
            className={styles.adornment}
            style={{
              marginRight: '0.5rem',
            }}>
            {adornmentIcon}
          </i>
        )}
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
        {adornment === 'right' && (
          <i
            className={styles.adornment}
            style={{
              marginLeft: '0.5rem',
            }}>
            {adornmentIcon}
          </i>
        )}
      </span>
    </NeuCard>
  );
};

export default NeuInput;
