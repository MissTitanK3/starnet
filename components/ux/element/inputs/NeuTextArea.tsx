import React from 'react';
import styles from './Input.module.scss';
import NeuCard from '../cards/NeuCard';

type Props = {
  value: string;
  id: string;
  inputStyleOverride?: React.CSSProperties;
  cardStyleOverride?: React.CSSProperties;
  changeInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rowsCount: number;
  colsCount: number;
  keyDownAction?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const NeuTextArea = ({
  value,
  id,
  inputStyleOverride,
  changeInput,
  placeholder,
  cardStyleOverride,
  rowsCount,
  colsCount,
  keyDownAction,
}: Props) => {
  return (
    <NeuCard cardStyleOverride={cardStyleOverride}>
      <textarea
        placeholder={placeholder}
        className={styles.neuInput}
        style={inputStyleOverride}
        id={id}
        value={value}
        onChange={changeInput}
        rows={rowsCount}
        cols={colsCount}
        onKeyDown={keyDownAction}
        autoCapitalize="sentences"
        // autoResize
        autoCorrect="on"
      />
    </NeuCard>
  );
};

export default NeuTextArea;
