import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Overlay = ({ children }: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100dvw',
        height: '100dvh',
        top: 0,
        left: 0,
        backgroundColor: '#242424f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
        zIndex: 100,
      }}>
      {children}
    </div>
  );
};

export default Overlay;
