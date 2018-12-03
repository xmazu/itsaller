import React, { SFC } from 'react';
import { IconSvgPaths20, IconSvgPaths16, IconName } from '@blueprintjs/icons';

export interface IconProps {
  icon: IconName;
  small?: boolean;
}

const Icon: SFC<IconProps> = ({ icon, small }) => {
  const svgPath = small ? IconSvgPaths16[icon] : IconSvgPaths20[icon];

  if (!svgPath) {
    return null;
  }

  const pathStrings = svgPath.map((d, index) => (
    <path key={index} d={d} fillRule="evenodd" />
  ));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${small ? '16 16' : '20 20'}`}
      style={{ height: small ? 16 : 20, width: small ? 16 : 20 }}
    >
      <title>{icon}</title>
      {pathStrings}
    </svg>
  );
};

export default Icon;
