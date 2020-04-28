import getLevel from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
describe('getLevel', () => {
  test.each([
    ['response = true', { status: 'ok', level: 9 }, 'Ваш текущий уровень: 9'],
    ['response = false', { status: 404 }, 'Информация об уровне временно недоступна'],
  ])('%s', (name, response, expected) => {
    fetchData.mockReturnValue(response);
    const result = getLevel(1);

    expect(result).toBe(expected);
  });
});
