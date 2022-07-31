const API_KEY = "7a6e99b440698f4ab13da3b41eb5ab51";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `Today's Weather: ${data.weather[0].main},`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");


}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
/* 이게 그냥 네비게이터를 불러오는 함수이다 이걸 호출하면 브라우저에서 위치 자료를 줌*/
/* getCurrentPosition 이건 두가지 함수를 받는데 하나는 잘됐을때, 문제가있을때 각각 실행해준다 */

