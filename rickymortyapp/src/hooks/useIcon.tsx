/* eslint-disable prettier/prettier */
import React from 'react';
import {ICONS} from '../constants';

export default function useIcon(icon: string): string {
  const [iconPath, setIaconPath] = React.useState('');

  React.useEffect(() => {
    switch (icon) {
      case 'character':
        setIaconPath(ICONS.character);
        break;
      case 'place':
        setIaconPath(ICONS.place);
        break;
      case 'episode':
        setIaconPath(ICONS.episode);
        break;
      default:
        setIaconPath(ICONS.character);
    }
  }, [icon]);

  return iconPath;
}
