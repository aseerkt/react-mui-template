import { render } from '@testing-library/react';
import Header from '..';

describe('<Header /> tests', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
