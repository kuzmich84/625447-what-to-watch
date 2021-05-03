import {validateEmail} from "../../utils";

describe(`Valid email`, () => {

  // Шаг 1. Ожидаем, что email валиден
  it(`should allow to enter my email`, () => {
    expect(validateEmail(`kudim84@yandex.ru`)).toBe(true);
  });

  // Шаг 2. Ожидаем, что список email адресов валиден
  it(`should allow to enter correct emails`, () => {
    expect(validateEmail(`a@ivanov.me`)).toBe(true);
    expect(validateEmail(`test@mail.ru`)).toBe(true);
  });

  // Шаг 3. Ожидаем, что это невалидный email
  it(`should not start with @`, () => {
    expect(validateEmail(`@ivanov.com`)).toBe(false);
  });

  // Шаг 4. Финальный тест
  it(`should allow to enter correct emails`, () => {
    expect(validateEmail(`a@ivanov.me`)).toBe(true);
    expect(validateEmail(`test@mail.ru`)).toBe(true);
  });

  it(`should not allow to enter invalid email`, () => {
    expect(validateEmail(`@`)).toBe(false);
    expect(validateEmail(`ddd`)).toBe(false);
    expect(validateEmail(`@@@@`)).toBe(false);
    expect(validateEmail(null)).toBe(false);
  });
});
