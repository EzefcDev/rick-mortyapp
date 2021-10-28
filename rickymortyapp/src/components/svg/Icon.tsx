/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useIcon} from '../../hooks';

interface IIcon {
  name: string;
  size: number;
  focused?: boolean;
  color: string;
}

export default function Icon({name, size, focused, color}: IIcon) {
  const icon = useIcon(name);
  return (
    <Svg
      //@ts-ignore

      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-6 prefix__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      width={size}
      height={size}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={icon}
      />
    </Svg>
  );
}
