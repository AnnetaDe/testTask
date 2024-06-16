export const cityCountry = address => address.split(',').slice(-2);
export const toNumber = value => parseFloat(value.replace('$', ''));
export const toPrice = value => '$' + value;
export const formatPrice = cars =>
  cars
    .map(car => ({
      value: Math.ceil(toNumber(car.rentalPrice) / 10) * 10,
      label: (Math.ceil(toNumber(car.rentalPrice) / 10) * 10).toString() + '$',
    }))
    .sort((a, b) => a.value - b.value);
export const formatMileage = cars =>
  cars
    .map(car => ({
      value: Math.ceil(car.mileage / 100) * 100,
      label: (Math.ceil(car.mileage / 100) * 100).toLocaleString('en-US') + ' miles',
    }))
    .sort((a, b) => a.value - b.value);
export const formatMakes = cars =>
  cars
    .map(car => ({ value: car.make, label: car.make }))
    .sort((a, b) => a.value.localeCompare(b.value));

export const unic = (obj, key) => {
  let result = [];
  let keys = [];
  obj.forEach(item => {
    if (!keys.includes(item[key])) {
      keys.push(item[key]);
      result.push(item);
    }
  });
  return result;
};
