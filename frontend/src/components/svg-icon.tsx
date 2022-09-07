import React from "react";

export interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ArrowLeft: React.FC<SvgProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 71.812843 54.828129"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs />
    <g transform="translate(-69.142233,-110.96289)">
      <path d="m 96.554687,110.96289 -25.074218,25.07617 -2.338236,2.33802 2.338236,2.33776 25.074218,25.07618 4.677733,-4.67774 -19.429686,-19.42969 h 59.152346 v -6.61328 H 81.802734 l 19.429686,-19.42968 z" />
    </g>
  </svg>
);

export const MenuRing: React.FC<SvgProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 13.225952 13.226257"
    version="1.1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs />
    <g transform="translate(-700.09438,-83.237316)">
      <path
        style={{
          fill: "none",
          strokeWidth: "0.793749",
          strokeOpacity: 1,
        }}
        d="m 516.81106,496.79254 a 6.2177081,6.2177081 0 0 1 -5.66252,6.19287 6.2177081,6.2177081 0 0 1 -6.67375,-5.08693 6.2177081,6.2177081 0 0 1 4.47071,-7.10131 6.2177081,6.2177081 0 0 1 7.47214,3.81877"
        transform="rotate(-36.969406)"
      />
    </g>
  </svg>
);

export const Hamburger: React.FC<SvgProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 7.2007445 5.4202878"
    version="1.1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs />
    <g transform="translate(-719.4468,-87.140332)">
      <g transform="translate(33.787529,-35.311155)">
        <rect
          width="7.2007289"
          height="0.79374999"
          x="685.6593"
          y="122.45149"
        />
        <rect
          width="7.2007289"
          height="0.79374999"
          x="685.6593"
          y="127.07800"
        />
        <rect
          width="7.2007289"
          height="0.79374999"
          x="685.6593"
          y="124.76475"
        />
      </g>
    </g>
  </svg>
);

export const LeftHexEnd: React.FC<SvgProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 34.882848 44.979179"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs />
    <g transform="translate(-55.562494,-98.689572)">
      <path d="M 78.05208,98.689577 55.562494,121.17917 78.05208,143.66875 h 12.393253 l 10e-6,-44.979178 z" />
    </g>
  </svg>
);

export const RightHexEnd: React.FC<SvgProps> = ({ className, style }) => (
  <svg
    viewBox="0 0 34.882848 44.979179"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs />
    <g transform="translate(-55.562494,-98.689572)">
      <path d="M 67.955757,98.689577 90.445343,121.17917 67.955757,143.66875 H 55.562504 l -10e-6,-44.979178 z" />
    </g>
  </svg>
);
