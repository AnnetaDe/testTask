import { createSelector } from '@reduxjs/toolkit';

export const selectEquipmentFilter = state => state.filters.equipment;
export const selectTypeFilter = state => state.filters.form;
export const selectLocationFilter = state => state.filters.location;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectMoreToLoad = state => state.cars.currentPage < state.cars.countPages;
export const selectCountPages = state => state.cars.countPages;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;
export const selectAllCars = s => s.cars.items;
export const selectLikedCars = s => s.cars.liked;
export const selectType = s => s.filters.form;
export const selectLocation = s => s.filters.location;
export const selectPage = s => s.cars?.currentPage ?? 1;
export const selectPerPage = s => s.cars?.perPage ?? 10;
const eqp = [
  'automatic',
  'AC',
  'petrol',
  'radio',
  'bathroom',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];
export const selectFilteredCars = createSelector(
  [selectAllCars, selectType, selectLocation, selectEquipmentFilter],
  (cars, type, location, equipment = []) => {
    const t = (type || '').trim().toLowerCase();
    const q = (location || '').trim().toLowerCase();

    return cars.filter(c => {
      const cType = (c.form || '').toLowerCase();
      const cLoc = (c.location || '').toLowerCase();

      if (t && cType !== t) return false;
      if (q && !cLoc.includes(q)) return false;

      if (equipment.length > 0) {
        // require at least one selected equipment to be truthy on car
        const hasEq = equipment.some(eq => Boolean(c[eq]));
        if (!hasEq) return false;
      }

      return true;
    });
  }
);

export const selectPagedCars = createSelector(
  [selectFilteredCars, selectPage, selectPerPage],
  (list, page, per) => {
    const total = list.length;
    const pages = Math.max(1, Math.ceil(total / (per || 1)));
    const p = Math.min(Math.max(1, page), pages);
    const start = (p - 1) * per;
    return { items: list.slice(start, start + per), total, pages, page: p, perPage: per };
  }
);
