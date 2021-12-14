import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import * as ReactDOM from 'react-dom';
import App from '../App';

// test('renders the correct conent', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

//   const root = document.createElement("div");
//   ReactDOM.render(<ScheduleActivity />, root);

//   expect(root.querySelector(".main-header").textContent).toBe("Schedule Activities");
// });

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
