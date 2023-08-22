export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(404, 'Страница не найдена');
    this.errors.set(200, 'Успешно');
    this.errors.set(501, 'Сервер не отвечает');
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
