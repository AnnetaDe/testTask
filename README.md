TravelTrucks — Car Rental App

React + Redux Toolkit + React Router. Browse cars, filter, view details, and save favorites
(persisted).

Features

Catalog with debounced filters (type, location, equipment).

Car details page: gallery, Tabs (Features / Details / Reviews), BookingCard.

Favorites (like/unlike) persisted to localStorage.

“Daily deals” with TTL cache (refresh when stale).

Responsive layout with fixed right column (min 340 / max 420).

Stack

React 18, Redux Toolkit, React Router DOM

Tailwind CSS

Lodash.debounce

LocalStorage for likes + cache

Routing

/ — Home (daily deals)

/catalog — Catalog (filters + pagination)

/favorites — Liked cars

/cars/:id — Car details (accepts Link state, fetches by id as fallback)

Project Structure src/ components/ CarItem/ CarPage/ CarsList/ Categories/ # badges, filters UI
Container/ Filters/ Layout/ LikedList/ Loader/ NavBar/ RedButton/ SearchPanel/ config/ css/ pages/
redux/ cars/ operations.js # getAll, getDaily (TTL) slice.js filter/ filterSelectors.js slice.js
App.jsx index.css

State Shape (essential) cars: { items: Car[], liked: Car[], // persisted currentPage: number,
perPage: number, total: number, isLoading: boolean, isError: boolean }

filters: { type: string, // exact match location: string, // substring match equipment: string[] //
OR by default (can switch to AND) }
