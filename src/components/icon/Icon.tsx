import React, { SFC } from 'react';
import { IconSvgPaths20, IconSvgPaths16, IconName } from '@blueprintjs/icons';
import classnames from 'classnames';

import './icon.scss';

export interface IconProps {
  icon: IconName;
  className?: string;
  small?: boolean;
}

const Icon: SFC<IconProps> = ({ className, icon, small }) => {
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
      className={classnames('icon', className, {
        'icon--small': small
      })}
      viewBox={`0 0 ${small ? '16 16' : '20 20'}`}
    >
      <title>{icon}</title>
      {pathStrings}
    </svg>
  );
};

export default Icon;
