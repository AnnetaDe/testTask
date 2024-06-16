import { createSelector } from '@reduxjs/toolkit';
import { toNumber } from '../../helpers';

export const selectBrandFilter = state => state.filters.make;
export const selectPriceFilter = state => state.filters.price;
export const selectFromFilter = state => state.filters.from;
export const selectToFilter = state => state.filters.to;
export const selectAllCars = state => state.cars.allItems;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectPerPage = state => state.cars.perPage;
export const selectMoreToLoad = state => state.cars.moreToLoad;
export const selectCountPages = state => state.cars.countPages;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;
export const selectAllBrands = state => state.cars.liked;

export const selectFilteredCars = createSelector(
  [
    selectAllCars,
    selectBrandFilter,
    selectPriceFilter,
    selectFromFilter,
    selectToFilter,
    selectCurrentPage,
    selectPerPage,
  ],
  (cars, brand, price, from, to, currentPage, perPage) => {
    const filteredCars = cars.filter(car => {
      const brandMatch = brand ? car.make === brand : true;
      const priceMatch = price ? toNumber(car.rentalPrice) <= price : true;
      const fromMatch = from ? car.mileage >= from : true;
      const toMatch = to ? car.mileage <= to : true;
      return brandMatch && priceMatch && fromMatch && toMatch;
    });

    return filteredCars.slice(0, currentPage * perPage);
  }
);

// export const selectFilteredCarsCount = createSelector(
//   [selectAllCars, selectBrandFilter, selectPriceFilter, selectFromFilter, selectToFilter],
//   (cars, brand, price, from, to) => {
//     return cars.filter(car => {
//       const brandMatch = brand ? car.make === brand : true;
//       const priceMatch = price ? car.rentalPrice <= price : true;
//       const fromMatch = from ? car.mileage >= from : true;
//       const toMatch = to ? car.mileage <= to : true;
//       return brandMatch && priceMatch && fromMatch && toMatch;
//     }).length;
//   }
// );
