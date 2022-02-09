import renderer from 'react-test-renderer';
import Experience from './experience';

it('Verify Experience Snapshot', () => {
  const tree = renderer.create(<Experience />).toJSON();
  expect(tree).toMatchSnapshot();
});
