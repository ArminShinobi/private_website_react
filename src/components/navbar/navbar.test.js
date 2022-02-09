import renderer from 'react-test-renderer';
import Navbar from './navbar';

it('Verify Navbar Snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
