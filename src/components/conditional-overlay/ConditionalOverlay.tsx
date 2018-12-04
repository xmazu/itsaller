import React, { SFC } from 'react';

import './conditional-overlay.scss';

export interface ConditionalOverlayProps {
  condition: boolean;
  overlay: JSX.Element;
}

const ConditionalOverlay: SFC<ConditionalOverlayProps> = ({
  condition,
  overlay,
  children
}) => (
  <div className="conditionalOverlay">
    {condition && <div className="conditionalOverlay__overlay">{overlay}</div>}
    <div className="conditionalOverlay__content">{children}</div>
  </div>
);

export default ConditionalOverlay;
