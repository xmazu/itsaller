import React, { SFC } from 'react';
import styled from 'styled-components';
import { IconSvgPaths20, IconName } from '@blueprintjs/icons';

const SVG = styled.svg`
  height: 16px;
  width: 16px;
`;

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
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <title>{icon}</title>
      {pathStrings}
    </SVG>
  );
};

export default Icon;
