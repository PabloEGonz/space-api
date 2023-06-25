import Rocket from '../__mocks__/Rocket';

test('it renders correclty', () => {
  const component = Rocket;
  expect(component).toMatchSnapshot();
});
