import { SxProps, TextField } from '@mui/material';
import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  type: HTMLInputElement['type'];
  value: string;
  id: string;
  sx?: React.CSSProperties;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const NeuInput = ({ type, value, id, sx, changeInput, placeholder }: Props) => {
  return (
    <NeuCard
      styleOverride={{
        width: '100%',
        height: '70%',
      }}>
      <input
        placeholder={placeholder}
        className={styles.neuInput}
        style={sx}
        id={id}
        type={type}
        value={value}
        onChange={changeInput}
      />
    </NeuCard>
  );
};

export default NeuInput;
