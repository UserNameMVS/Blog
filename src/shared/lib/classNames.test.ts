import { classNames } from './classNames'

describe('classNames', () => {
  // Базовое объединение строк - основной сценарий использования функции
  test('should return base class name', () => {
    const result = classNames('main-class')
    expect(result).toBe('main-class')
  })

  // Проверка работы с дополнительными классами из массива
  test('should add additional classes', () => {
    const result = classNames('main-class', {}, ['class1', 'class2'])
    expect(result).toBe('main-class class1 class2')
  })

  // Проверка работы с модификаторами (объект, где значения определяют, включать ли класс)
  test('should apply mods correctly', () => {
    const result = classNames('main-class', { mod1: true, mod2: false, mod3: true })
    expect(result).toBe('main-class mod1 mod3')
  })

  // Проверка пропуска falsy значений в массиве дополнительных классов
  test('should exclude falsy values from additional classes', () => {
    const result = classNames('main-class', {}, ['class1', '', 'class2', null, 'class3', undefined])
    expect(result).toBe('main-class class1 class2 class3')
  })

  // Комбинированный тест всех возможностей функции
  test('should combine all inputs correctly', () => {
    const result = classNames('main-class', { mod1: true, mod2: false }, ['add1', 'add2'])
    expect(result).toBe('main-class add1 add2 mod1')
  })

  // Граничный случай: пустая строка в основном имени класса
  test('should handle empty className', () => {
    const result = classNames('', { mod1: true }, ['add1'])
    expect(result).toBe('add1 mod1')
  })

  // Граничный случай: null и undefined в дополнительных классах
  test('should handle null and undefined in additional classes', () => {
    const result = classNames('main-class', {}, [null, undefined, 'class1'])
    expect(result).toBe('main-class class1')
  })

  // Проверка пустых входных данных
  test('should handle all empty inputs', () => {
    const result = classNames('', {}, [])
    expect(result).toBe('')
  })

  // Проверка с пустым объектом модификаторов
  test('should work with empty mods object', () => {
    const result = classNames('main-class', {}, [])
    expect(result).toBe('main-class')
  })

  // Проверка с пустым массивом дополнительных классов
  test('should work with empty additional array', () => {
    const result = classNames('main-class', { mod1: true }, [])
    expect(result).toBe('main-class mod1')
  })

  // Проверка дубликатов - должны быть исключены (если функция это поддерживает)
  test('should handle duplicate classes', () => {
    // В текущей реализации функция не удаляет дубликаты, они могут повторяться
    const result = classNames('main-class', { 'main-class': true }, ['main-class'])
    expect(result).toBe('main-class main-class main-class')
  })

  // Проверка символа в дополнительных классах
  test('should handle symbol in additional classes', () => {
    const sym = Symbol('test')
    const result = classNames('main-class', {}, [sym.toString(), 'class1'])
    expect(result).toBe('main-class Symbol(test) class1')
  })

  // Проверка работы с большими массивами (производительность)
  test('should handle large number of additional classes', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => `class${i}`)
    const result = classNames('main-class', {}, largeArray)

    // Проверяем, что результат содержит главное имя класса
    expect(result.startsWith('main-class ')).toBe(true)

    // Проверяем, что в результате есть хотя бы несколько сгенерированных классов
    expect(result.includes('class0')).toBe(true)
    expect(result.includes('class999')).toBe(true)
  })

  // Проверка на неизменяемость входных данных
  test('should not mutate input objects', () => {
    const mods = { mod1: true, mod2: false }
    const additional = ['class1', 'class2']

    const originalMods = { ...mods }
    const originalAdditional = [...additional]

    classNames('main-class', mods, additional)

    // Проверяем, что оригинальные объекты не изменились
    expect(mods).toEqual(originalMods)
    expect(additional).toEqual(originalAdditional)
  })
})
