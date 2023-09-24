'use client';

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import React, { useEffect, useRef, useState } from 'react';
// import ShadButton from '../buttons/ShadButton';

// // type Props = {
// //   children: React.ReactNode;
// //   direction?: 'top' | 'bottom' | 'right' | 'left';
// // };

// // const ShadToolTip = ({ children, direction = 'bottom' }: Props) => {
// const ShadToolTip = () => {
//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <ShadButton variant="outline">Hover</ShadButton>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>Add to library</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default ShadToolTip;

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { BsInfoCircleFill } from 'react-icons/bs';
import { PlusIcon } from '@radix-ui/react-icons';
import '../../../ui/Tooltip.module.scss';
import ShadButton from '../buttons/ShadButton';

const ShadToolTip = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <>
            {/* <ShadButton> */}
            {/* <BsInfoCircleFill className="IconButton" /> */}
            {/* </ShadButton> */}
            <button className="IconButton">fuck</button>
          </>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            Add to library
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ShadToolTip;
