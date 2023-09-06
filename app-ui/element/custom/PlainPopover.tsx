// create a popever with a custom content

import React, { useRef } from 'react';
import PlainButton from '../buttons/PlainButton';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useClickOutside } from '@/app-ui/hooks/useClickOutside';

type Props = {
  children: React.ReactNode;
  orientation?: 'left' | 'right' | 'top' | 'bottom';
  popoverWidth?: string;
};

const PlainPopover = ({ children, orientation = 'right', popoverWidth = '400px' }: Props) => {
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
          top: '-50px',
          left: '0',
        };
      case 'bottom':
        return {
          bottom: '-30px',
          left: '40px',
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
      }}>
      <PlainButton
        onClick={() => setOpen(!open)}
        styled={{
          maxWidth: '200px',
          height: '100%',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BsInfoCircleFill color="rgb(0, 150, 150)" />
      </PlainButton>
      {open && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: '#606060',
            height: '100%',
            width: popoverWidth,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: '10px',
            border: '1px solid #ffffff',
            ...orentationStyle(),
          }}>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default PlainPopover;
