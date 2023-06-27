import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { hover } from '@testing-library/user-event/dist/hover';

interface Props extends PropsWithChildren{
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
};

const Cell: FC<Props> = ({onClick, className, isActive, children}) => {
  return (
    <div 
      onClick={isActive ? undefined : onClick} 
      className={clsx(
          "h-12 flex items-center justify-center border-b border-r",
          {"text-white bg-blue-600": isActive},
          {"cursor-pointer hover:bg-gray-100": !isActive && onClick}, 
          className)}>
      {children}
    </div>
  )
}

export default Cell;