# geodistance-calculator

A lightweight npm package for calculating the distance between two sets of geographic coordinates (latitude and longitude) on Earth.

## Installation

To install this package, you can use npm or yarn:

```sh
npm install geodistance-calculator
# or
yarn install geodistance-calculator
```

## Usage

Use the `calculateDistance` function to calculate the distance between two cities.

```javascript
const calculateDistance = require("@anatoliy-stepanchenko/geodistance-calculator");

const londonCoords = { lat: 51.509865, lon: -0.118092 }; // London
const kyivCoords = { lat: 50.4501, lon: 30.5234 }; // Kyiv

const distance = calculateDistance(londonCoords, kyivCoords);

console.log(
  `The distance between London and Kyiv is approximately ${distance} kilometers.`
);
```

## License

This package is open-source and available under the MIT License. See the LICENSE file for details.

## Issues

If you encounter any issues or have questions, please create an issue in the GitHub repository.
