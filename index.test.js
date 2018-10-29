/* jshint esversion: 6 */
const { getRandomInt, getRandomIntRange, getRandomChar, getRandomCharLowerCase, getRandomCharUpperCase, getRandomName } = require('./index.js');
const nbTests = 1000;
test('getRandomInt', () => {
  const max = 1000;
  for (let i = 0; i < nbTests; i++) {
    const value = getRandomInt(max);
    expect(value <= max);
  }
});

test('getRandomInRange', () => {
  const min = 10;
  const max = 1000;
  for (let i = 0; i < nbTests; i++) {
    const value = getRandomIntRange(min, max);
    expect(value >= min && value <= max);
  }
});

test('getRandomChar', () => {
  for (let i = 0; i < nbTests; i++) {
    const value = getRandomChar();
    expect(value <= 'z' && value >= 'A');
  }
});

test('getRandomCharLowerCase', () => {
  for (let i = 0; i < nbTests; i++) {
    const value = getRandomCharLowerCase();
    expect(value <= 'z' && value >= 'a');
  }
});

test('getRandomCharUpperCase', () => {
  for (let i = 0; i < nbTests; i++) {
    const value = getRandomCharUpperCase();
    expect(value <= 'Z' && value >= 'A');
  }
});

describe('Test function getRandomName', () => {
  test('getRandomName with default input', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName()).not.toBeUndefined();
    }
  });

  test('getRandomName for name of male and with default regions input', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['male'])).not.toBeUndefined();
    }
  });


  test('getRandomName for name of female and with default regions input', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['female'])).not.toBeUndefined();
    }
  });

  test('getRandomName for name of female and with some specific regions input', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['female'], ['europe', 'asia'])).not.toBeUndefined();
    }
  });

  test('getRandomName for name of male and with some specific regions input', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['male'], ['europe', 'africa'])).not.toBeUndefined();
    }
  });

  test('getRandomName for name of a specific regions', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['male', 'female'], ['europe'])).not.toBeUndefined();
    }
  });

  test('getRandomName should not return undefined', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['male', 'female'], ['france','oceania'])).not.toBeUndefined();
    }
  });
  test('getRandomName should return undefined', () => {
    for (let i = 0; i < nbTests; i++) {
      expect(getRandomName(['male', 'female'], ['france'])).toBeUndefined();
    }
  });
});