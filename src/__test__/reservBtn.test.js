import ReservBtn from '../__mocks__/ReservBtn';

test('it renders correclty', () => {
  const component = ReservBtn;
  expect(component).toMatchSnapshot();
});
