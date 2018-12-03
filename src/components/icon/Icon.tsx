import React, { SFC } from 'react';
import { IconSvgPaths20, IconName } from '@blueprintjs/icons';

export interface IconProps {
  icon: IconName;
}

const Icon: SFC<IconProps> = ({ icon }) => {
  const svgPath = IconSvgPaths20[icon];

  if (!svgPath) {
    return null;
  }

  const pathStrings = svgPath.map((d, index) => (
    <path key={index} d={d} fillRule="evenodd" />
  ));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{ height: 20, width: 20 }}
    >
      <title>{icon}</title>
      {pathStrings}
    </svg>
  );
};

export default Icon;
