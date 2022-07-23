import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> tests', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
