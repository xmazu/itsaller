import React, { SFC } from 'react';

import './loader.scss';
import Spinner from './Spinner';

export interface LoaderProps {
  text?: string;
}

const Loader: SFC<LoaderProps> = ({ text }) => (
  <div className="loader">
    <div className="loader__spinner">
      <Spinner />
    </div>
    {text && <div className="loader__text">{text}</div>}
  </div>
);

export default Loader;
