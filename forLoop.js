var response = [
  { lat: 4.5, lng: 8.999 },
  { lat: 5777, lng: 56667 },
  { lat: 33, lng: 334 },
];
for (let i = 0; i < response.length; i++) {
  const Lat = response[i].lat;
  console.log("lat =" + response[i].lat, "lng =" + response[i].lng);
  console.log(typeof response[i].lat);
  let lati = response.toString();
  console.log(typeof lati);
}
console.log(Lat);
