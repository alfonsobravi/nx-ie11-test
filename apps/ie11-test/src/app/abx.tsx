import React from 'react';
import { useSelector } from 'react-redux';

import { SystemSelectors } from './_system/system.selectors';

/* eslint-disable-next-line */
export interface AbxProps {}

export const Abx = (props: AbxProps) => {
const lastMessage = useSelector(SystemSelectors.lastMessage);
console.log('REDUX', lastMessage);
  return (
    <div>
      <h1>Abx component has Redux powers!</h1>
      <pre>
      lastMessage: {JSON.stringify(lastMessage, null, 2)}
      </pre>
    </div>
  );
};

export default Abx;
