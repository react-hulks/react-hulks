import * as React from 'react';
import { render } from 'react-testing-library';

import useProgress from '.';

function renderTestComponent(current: number, total: number) {
  const Component = () => {
    const [progress] = useProgress(current, total);
    return <div data-testid="progress">{progress}</div>;
  };

  return render(<Component />);
}

describe('useProgress hook', () => {
  test('should calculate the progress', () => {
    const { getByTestId } = renderTestComponent(50, 100);
    expect(getByTestId('progress')).toHaveTextContent('50');
  });

  test('handle division by zero case', () => {
    const { getByTestId } = renderTestComponent(100, 0);
    expect(getByTestId('progress')).toHaveTextContent('0');
  });
});
