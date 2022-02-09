import renderer from 'react-test-renderer';
import Portfolio from './portfolio';

it('Verify Portfolio Snapshot', () => {
  const tree = renderer.create(<Portfolio />).toJSON();
  expect(tree).toMatchSnapshot();
});
