import { createSelector } from '@reduxjs/toolkit';

export const selectEquipmentFilter = state => state.filters.equipment;
export const selectTypeFilter = state => state.filters.type;
export const selectLocationFilter = state => state.filters.location;
const selectAllCars = state => state.cars.items;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectPerPage = state => state.cars.perPage;
export const selectMoreToLoad = state => state.cars.currentPage < state.cars.countPages;
export const selectCountPages = state => state.cars.countPages;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;

export const selectFilteredCars = createSelector(
  [
    selectAllCars,
    selectEquipmentFilter,
    selectTypeFilter,
    selectLocationFilter,
    selectCurrentPage,
    selectPerPage,
    selectMoreToLoad,
    selectCountPages,
    selectIsLoading,
    selectIsError,
  ],
  (cars, equipment, type, location, currentPage, perPage) => {
    const filteredCars = cars.filter(car => {
      const equipmentMatch = equipment ? car.equipment === equipment : true;
      const typeMatch = type ? car.type === type : true;
      const locationMatch = location ? car.location === location : true;
      return equipmentMatch && typeMatch && locationMatch;
    });

    const recountedTotal = filteredCars.length;
    const recountedPages = Math.ceil(recountedTotal / perPage);

    return filteredCars;
  }
);
