const findBestEmployee = function (employees) {
  "use strict";
  const keys = Object.keys(employees);
  let maxNumber = employees[keys[0]];
  let bestEmployee = "";
  for (let i = 0; i < keys.length; i += 1) {
    console.log(employees[keys[i]]);
    if (employees[keys[i]] >= maxNumber) {
      bestEmployee = keys[i];
    }
  }
  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
