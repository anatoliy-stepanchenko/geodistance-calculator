function calculateDistance(coord1, coord2) {
  const { lat: lat1, lon: lon1 } = coord1;
  const { lat: lat2, lon: lon2 } = coord2;

  const earthRadius = 6371; // Earth's radius in kilometers.

  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  // Calculation using the haversine formula (the formula is divided into two parts).

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance.toFixed(2); // The distance between two geographic points in kilometers rounded to the hundredths.
}

module.exports = calculateDistance;
