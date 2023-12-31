// create a popever with a custom content

import React, { useRef } from 'react';
import PlainButton from '../buttons/PlainButton';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useClickOutside } from '../../hooks/useClickOutside';
import ShadCard from '../cards/ShadCard';

type Props = {
  children: React.ReactNode;
  orientation?: 'left' | 'right' | 'top' | 'bottom';
  popoverWidth?: string;
  popoverHeight?: string;
};

const NeuPopover = ({ children, orientation = 'right', popoverWidth = '400px', popoverHeight = '100px' }: Props) => {
  const [open, setOpen] = React.useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setOpen(false));

  const orentationStyle = () => {
    switch (orientation) {
      case 'left':
        return {
          top: '0',
          left: '-390px',
        };
      case 'right':
        return {
          top: '0',
          right: '-390px',
        };
      case 'top':
        return {
          top: '-30px',
          left: '0',
        };
      case 'bottom':
        return {
          bottom: '-35px',
          left: '25px',
        };
      default:
        return {
          top: '0',
          left: '0',
        };
    }
  };

  return (
    <div
      ref={dropdown}
      style={{
        position: 'relative',
        display: 'inline-block',
        zIndex: 1000,
      }}>
      <PlainButton
        onClick={() => setOpen(!open)}
        styled={{
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
        <BsInfoCircleFill color="rgb(0, 150, 150)" />
      </PlainButton>
      {open && (
        <ShadCard
          variant="noHover"
          styleOverride={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: 'rgb(35, 35, 35)',
            width: popoverWidth,
            height: popoverHeight,
            ...orentationStyle(),
          }}>
          <p>{children}</p>
        </ShadCard>
      )}
    </div>
  );
};

export default NeuPopover;
