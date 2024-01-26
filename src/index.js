function updateTime() {
  let newYorkDate = document.querySelector("#ny-date");
  if (newYorkDate) {
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");

    let losAngDate = document.querySelector("#la-date");
    losAngDate.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");

    let rioDate = document.querySelector("#sydney-date");
    rioDate.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");

    let berlinDate = document.querySelector("#berlin-date");
    berlinDate.innerHTML = moment().tz("Europe/Berlin").format("MMMM Do YYYY");

    let newYorkTime = document.querySelector("#ny-time");
    newYorkTime.innerHTML = moment().tz("America/New_York").format("h:mm:ss A");

    let losAngTime = document.querySelector("#la-time");
    losAngTime.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss A");

    let rioTime = document.querySelector("#sydney-time");
    rioTime.innerHTML = moment().tz("Australia/Sydney").format("h:mm:ss A");

    let berlinTime = document.querySelector("#berlin-time");
    berlinTime.innerHTML = moment().tz("Europe/Berlin").format("h:mm:ss A");
  }
}

updateTime();
setInterval(updateTime, 1000);

function selectCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#selectedCity");
  citiesElement.innerHTML = `<div class="container-1">
          <div class="city-name">
            ${cityName}<br />
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime.format("h:mm:ss A")}
          </div>
        </div>
        </div>
        <a href "/">👈 Go back to home</a>`;
}
let citySelect = document.querySelector("#timezone");
citySelect.addEventListener("change", selectCity);
