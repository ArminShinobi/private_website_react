import renderer from 'react-test-renderer';
import PrivacyPolicy from './privacy-policy';

it('Verify Privacy Policy Snapshot', () => {
  const tree = renderer.create(<PrivacyPolicy />).toJSON();
  expect(tree).toMatchSnapshot();
});
