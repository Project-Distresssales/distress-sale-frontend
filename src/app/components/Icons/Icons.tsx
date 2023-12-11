import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const TickSvg: FC<Props> = ({ width = 20, height = 20, color = '#667085' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.45898 9.99993L8.81732 12.3583L13.5423 7.6416"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface ArrowProps extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
}

export const ArrowDownIcon: FC<ArrowProps> = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" {...rest}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19 9l-7 6l-7-6"
      />
    </svg>
  );
};

export const ArrowUpIcon: FC<ArrowProps> = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" {...rest}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m19 15l-7-6l-7 6"
      />
    </svg>
  );
};

interface SvgIconProps {
  width?: number;
  height?: number;
  children: ReactNode;
}

const SvgIcon: React.FC<SvgIconProps> = ({ width = 20, height = 20, children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    {children}
  </svg>
);

export const HouseIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => (
  <SvgIcon width={width} height={height}>
    <path
      d="M1.66602 18.333H18.3327"
      stroke="#475467"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.45898 18.3334L2.50065 8.30836C2.50065 7.80003 2.74232 7.31674 3.14232 7.00008L8.97565 2.4584C9.57565 1.99173 10.4173 1.99173 11.0257 2.4584L16.859 6.99173C17.2673 7.3084 17.5007 7.7917 17.5007 8.30836V18.3334"
      stroke="#475467"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M12.9173 9.16699H7.08398C6.39232 9.16699 5.83398 9.72533 5.83398 10.417V18.3337H14.1673V10.417C14.1673 9.72533 13.609 9.16699 12.9173 9.16699Z"
      stroke="#475467"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33398 13.542V14.792"
      stroke="#101828"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.75 6.25H11.25"
      stroke="#101828"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export const CarIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => (
  <SvgIcon width={width} height={height}>
    <path
      d="M12.9257 2.3584H7.07565C5.00065 2.3584 4.54232 3.39173 4.27565 4.6584L3.33398 9.16673H16.6673L15.7257 4.6584C15.459 3.39173 15.0007 2.3584 12.9257 2.3584Z"
      stroke="#475467"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3253 16.517C18.4169 17.492 17.6336 18.3337 16.6336 18.3337H15.0669C14.1669 18.3337 14.0419 17.9503 13.8836 17.4753L13.7169 16.9753C13.4836 16.292 13.3336 15.8337 12.1336 15.8337H7.86693C6.66693 15.8337 6.49194 16.3503 6.2836 16.9753L6.11694 17.4753C5.9586 17.9503 5.8336 18.3337 4.9336 18.3337H3.36694C2.36694 18.3337 1.5836 17.492 1.67527 16.517L2.14194 11.442C2.2586 10.192 2.50027 9.16699 4.6836 9.16699H15.3169C17.5003 9.16699 17.7419 10.192 17.8586 11.442L18.3253 16.517Z"
      stroke="#475467"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.33333 6.66699H2.5" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.4993 6.66699H16.666" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 2.5V4.16667" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.75 4.16699H11.25" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12.5H7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 12.5H15" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const TreeListIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => (
  <SvgIcon width={width} height={height}>
    <path
      d="M14.8333 7.33333H6.5V10.6667H14.8333V7.33333ZM12.3333 1.5H6.5V4.83333H12.3333V1.5ZM17.3333 13.1667H6.5V16.5H17.3333V13.1667Z"
      stroke="#475467"
      strokeLinejoin="round"
    />
    <path
      d="M6.08398 3.16699H1.08398M6.08398 9.00033H1.08398M6.08398 14.8337H1.08398M1.08398 17.3337V0.666992"
      stroke="#475467"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export const BusinessBagIcon: React.FC<{ width?: number; height?: number }> = ({ width, height }) => (
  <SvgIcon width={width} height={height}>
    <path
      d="M12.917 5.83333V6.25H13.3337H16.667C17.3535 6.25 17.917 6.81345 17.917 7.5V11.6667C17.917 12.1148 17.6646 12.5181 17.2877 12.7416L17.0837 12.8627V13.1V15.8333C17.0837 16.5282 16.5285 17.0833 15.8337 17.0833H4.16699C3.47211 17.0833 2.91699 16.5282 2.91699 15.8333V13.1083V12.869L2.71027 12.7484C2.3304 12.5268 2.08366 12.1346 2.08366 11.6667V7.5C2.08366 6.81345 2.64711 6.25 3.33366 6.25H6.66699H7.08366V5.83333V4.33926L8.50625 2.91667H11.4944L12.917 4.33926V5.83333ZM8.33366 3.75H7.91699V4.16667V5.83333V6.25H8.33366H11.667H12.0837V5.83333V4.16667V3.75H11.667H8.33366ZM3.33366 7.08333H2.91699V7.5V11.6667V12.0833H3.33366H7.50033H7.91699V11.6667V9.58333H12.0837V11.6667V12.0833H12.5003H16.667H17.0837V11.6667V7.5V7.08333H16.667H3.33366ZM10.8337 12.9167H11.2503V12.5V10.8333V10.4167H10.8337H9.16699H8.75033V10.8333V12.5V12.9167H9.16699H10.8337ZM15.8337 16.25H16.2503V15.8333V13.3333V12.9167H15.8337H12.5003H12.0837V13.3333V13.75H7.91699V13.3333V12.9167H7.50033H4.16699H3.75033V13.3333V15.8333V16.25H4.16699H15.8337Z"
      fill="#101828"
      stroke="#475467"
      strokeWidth="0.833333"
    />
  </SvgIcon>
);
