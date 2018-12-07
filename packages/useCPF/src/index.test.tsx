import * as React from 'react';
import { render } from 'react-testing-library';

import useCPF from '.';

const TestComponent = () => {
  const [CPF, { isValid }] = useCPF('55688966076');

  return (
    <div>
      <div data-testid="CPF">{CPF}</div>
      <div data-testid="validationCheck">{isValid ? 'valid' : 'invalid'}</div>
    </div>
  );
};

describe('useCPF hook', () => {
  test('renders with a formatted valid CPF', async () => {
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('CPF')).toHaveTextContent('556.889.660-76');
    expect(getByTestId('validationCheck')).toHaveTextContent('valid');
  });
});
