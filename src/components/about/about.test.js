import renderer from 'react-test-renderer';
import About from './about';

it('Verify About Snapshot', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
