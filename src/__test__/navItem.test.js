import NavItem from '../components/NavItem';

test('it renders correclty', () => {
  const component = NavItem;
  expect(component).toMatchSnapshot();
});
