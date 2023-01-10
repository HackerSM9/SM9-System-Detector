document.cookie =
 "Owner: Samarth Magdum";

alert(
 "This website displays your Mobile's data to you."
);

console.info(
 "System Detector by HackerSM9. This website will takes out your Mobile's data."
);

function openNav() {
 document.getElementById(
   "mySidenav").style.width =
  "250px";
}

function closeNav() {
 document.getElementById(
   "mySidenav").style.width =
  "0";
}

function getIP(json) {
 document.getElementById(
   "ipadd").innerHTML = json
  .ip;
}

document.getElementById(
  "Platform").innerHTML =
 navigator.platform;

document.getElementById(
  "data").innerHTML =
 navigator.userAgent;

document.getElementById(
  "network").innerHTML =
 navigator.connection.type;

document.getElementById(
  "generation").innerHTML =
 navigator.connection
 .effectiveType;

document.getElementById(
  "saver").innerHTML =
 navigator.connection
 .saveData;

document.getElementById("rtt")
 .innerHTML = navigator
 .connection.rtt + " Ms";

document.getElementById(
  "downlink").innerHTML =
 navigator.connection
 .downlink + " Mb/s";

document.getElementById("max")
 .innerHTML = navigator
 .connection.downlinkMax +
 " Mb/s";

document.getElementById(
  "vendor").innerHTML =
 navigator.vendor;

document.getElementById(
  "model").innerHTML =
 navigator.appName;

document.getElementById(
  "browser").innerHTML =
 navigator.appCodeName;

document.getElementById("web")
 .innerHTML =
 navigator.product;
document.getElementById(
  "cookie").innerHTML =
 navigator.cookieEnabled;
document.getElementById("ram")
 .innerHTML =
 navigator.deviceMemory;
document.getElementById("cpu")
 .innerHTML =
 navigator.
hardwareConcurrency;
document.getElementById(
  "lang").innerHTML =
 navigator.languages;
document.getElementById(
  "height").innerHTML = screen
 .height;

document.getElementById(
  "width").innerHTML = screen
 .width;
document.getElementById("bit")
 .innerHTML = screen
 .pixelDepth;

navigator.getBattery().then(
 battery => {
  function updateAllBatteryInfo() {
   updateLevelInfo();
  }
  updateAllBatteryInfo();
  battery.addEventListener(
   'levelchange', () => {
    updateLevelInfo();
   });

  function updateLevelInfo() {
   document.getElementById(
     "level").innerHTML =
    battery.level * 100 +
    "%";
  }

 });

setInterval(myTimer, 1000);

function myTimer() {
 var date = new Date();
 document.getElementById(
  "time").innerHTML = date;
}

function start() {
 navigator.vibrate([700, 700,
  700, 700, 700, 700, 700,
  700, 999999999999999
 ]);
}

function stop() {
 navigator.vibrate(0);
}

const shareData = {
 title: 'SM9 System Detector',
 text: 'SM9 System Detector',
 url: 'https://HackerSM9.github.io/SM9-system-detector/'
}

const btn = document
 .querySelector('button');
const resultPara = document
 .querySelector('.result');

btn.addEventListener('click',
 async () => {
  try {
   await navigator.share(
    shareData)
   resultPara.textContent =
    'Shared'
  } catch (err) {
   resultPara.textContent =
    err
  }
 });

const refreshButton = document
 .querySelector(
  '.refresh-button');

const refreshPage = () => {
 location.reload();
}

refreshButton
 .addEventListener('click',
  refreshPage)

var date = new Date();
var year = date.getFullYear();
document.getElementById(
 "year").innerHTML = year;

$.getJSON(
 "https://api.ipify.org?format=json",
 function(data) {
  $("#ipadd").html(data.ip);
 });
