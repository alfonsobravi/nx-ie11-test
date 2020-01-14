import React from 'react';
import { render } from '@testing-library/react';

import Xyz from './xyz';

describe(' Xyz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Xyz />);
    expect(baseElement).toBeTruthy();
  });
});
