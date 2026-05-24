// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Static values for weather
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind chill calculation (Imperial units)
function calculateWindChill(t, s) {
  return (
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Apply conditions
let windChillValue = "N/A";
if (temp <= 50 && wind > 3) {
  windChillValue = calculateWindChill(temp, wind) + " °F";
}
document.getElementById("windChill").textContent = windChillValue;
