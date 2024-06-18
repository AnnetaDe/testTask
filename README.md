# Car Rental Application

Welcome to the Car Rental Application-Yoo turn, a responsive web app built with React, Redux
Toolkit, and React Router DOM. This application provides an easy and intuitive interface for users
to browse through a catalog of cars, mark their favorites, and view them on a dedicated favorites
page.

## Table of Contents

- [Description](#description)
- [Tools and Technologies](#tools-and-technologies)
- [Pages](#pages)
  - [Home](#home)
  - [Catalog](#catalog)
  - [Favorites](#favorites)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The You Turn Rental Application is designed to offer a seamless experience for users looking to rent
cars. Users can browse through a catalog of available cars, view detailed information, and mark
their favorite cars for quick access. The application is built with a focus on clean, responsive
design and ease of use.

## Tools and Technologies

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **React Router DOM**: A library for routing in React applications.
- **CSS Grid**: A layout system for creating responsive grid-based layouts.
- **Local Storage**: Used to persist user data such as favorite cars across sessions. -**Something
  else**: There are plenty of nice stuff that make the app a bit more awesome

## Pages

### Home

The Home page provides catchy info about the daily deals u cant miss. The list has to be call api
once per hour or once per day, but for explicit behaviour it fetches api with useEffect when the
'age' of data is more the 1 minute, otherwise the list is kept at the local storage. You can easily
change it here: redux->cars->operations->getDaily

Secondly the "home" page serves as the starting point for users and includes links to other pages
such as the Catalog and Favorites.

### Catalog

The Catalog page displays a grid of available cars for rent. Each car card includes an image, name,
and brief description. Users can click on a car to view more details in the modal window and mark it
as a favorite. There are search panel with cruxial filters that are made with ReactSelect Library

### Favorites

The Favorites page shows all the cars that the user has marked as favorites. This page allows users
to quickly access their preferred cars without having to search through the entire catalog again.
Favorite cars are stored in local storage to persist across sessions.

## Setup and Installation

To get started with the You Turn Car Rental Application, follow these steps:

1. **Clone the repository**: https://github.com/AnnetaDe/testTask
2. **Run the terminal**: npm i 3.**Enjoy my template**.
