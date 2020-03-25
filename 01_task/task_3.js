// _____________ task 3______START
// Написать функцию валидации IPv4 адреса в Dot-десятичной нотации. IP является валидным, если состоит из четырех октетов,
// со значениями от 0 до 255 включительно. На вход функции подается строка. На выходе ожидается булево значение true или false.
// Не использовать регулярные выражения.
// Примеры
// Валидные: 1.2.3.4, 123.45.67.89
// Невалидные: 1.2.3, 1.2.3.4.5, 123.456.78.90, 123.045.067.089

console.log('>>>>>Task 3. Validate IPv4: <<<<<');

const validatorIP = (addressIPv4) => {
  const arrayAddresses = addressIPv4.split('.');
  console.log(arrayAddresses)
  let res = true;
  if (arrayAddresses.length !== 4) {
    return false;
  }

  arrayAddresses.forEach((address) => {
    if (address.length === 0) res = false
    if (address < 0 || address > 255) res = false;
  });
  return res;
};


const testAddress = '8.255..8';
console.log(`Test Address ${testAddress} on validate is ${validatorIP(testAddress)}`);

// _____________ task 3______END
