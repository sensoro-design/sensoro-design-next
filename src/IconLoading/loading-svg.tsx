// This icon file is generated automatically
import React from 'react';
import uniqueId from "lodash/uniqueId";

import type { CustomIconComponentProps } from '@sensoro-design/icons/lib/components/Icon';

export const LoadingGradient = (props: CustomIconComponentProps) => {
  const id = uniqueId();

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1024 1024"
    >
      <defs>
        <linearGradient id={`${id}-left`} x1="100%" y1="80%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
        </linearGradient>
        <linearGradient id={`${id}-right`} x1="0%" y1="0%" x2="0%" y2="80%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <path fill={`url(#${id}-left)`} d="M512.00000004 64v76.032a369.92 369.92 0 0 0-263.04 108.864A370.432 370.432 0 0 0 140.03200004 512a369.92 369.92 0 0 0 108.928 263.04A370.432 370.432 0 0 0 512.00000004 883.968V960A448 448 0 0 1 512.00000004 64z" />
      <path fill={`url(#${id}-right)`} d="M959.99999996 512a448 448 0 0 1-432.64 447.744L511.99999996 960v-76.032c50.304 0 99.008-9.792 144.64-29.184a372.032 372.032 0 0 0 118.4-79.808A369.088 369.088 0 0 0 883.96799996 512L959.99999996 512.064z" />
    </svg>
  )
};
