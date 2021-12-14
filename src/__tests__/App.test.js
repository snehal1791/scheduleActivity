import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import * as ReactDOM from 'react-dom';
import App from '../App';
test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Schedule Activities/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Snapshot test of App', () => {
  it('should match the snapshot', () => {
    const testInstanceAppSnapshot = create(<App />).toJSON();

    expect(testInstanceAppSnapshot).toMatchSnapshot();
  })
})
