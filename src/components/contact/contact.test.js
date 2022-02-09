import renderer from 'react-test-renderer';
import Contact from './contact';

it('Verify Contact Snapshot', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
