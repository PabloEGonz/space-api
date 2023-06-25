import Rockets from '../__mocks__/Rockets';

test('it renders correclty', () => {
  const component = Rockets;
  expect(component).toMatchSnapshot();
});
