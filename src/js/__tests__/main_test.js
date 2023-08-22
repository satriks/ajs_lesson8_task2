import HandleErrors from '../ErrorRepository';

test.each([
  ['Страница не найдена', 404, 'Страница не найдена'],
  ['Успешно', 200, 'Успешно'],
  ['Сервер не отвечает', 501, 'Сервер не отвечает'],
  ['Неизвестная ошибка', 563, 'Unknown error'],
])(('Описание: %s'), (name, code, expected) => {
  const er = new HandleErrors();
  expect(er.translate(code)).toBe(expected);
});
