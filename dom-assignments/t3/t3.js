'use strict';

function browserInfo() {
  const user = navigator.userAgent;
  let browserName, browserVersion;

  if (/Chrome/.test(user) && !/Edg/.test(user)) {
      browserName = "Google Chrome";
      browserVersion = user.match(/Chrome\/(\d+)/)[1];

  } else if (/Edg/.test(user)) {
      browserName = "Microsoft Edge";
      browserVersion = user.match(/Edg\/(\d+)/)[1];

  } else if (/Safari/.test(user) && !/Chrome/.test(user)) {
      browserName = "Safari";
      browserVersion = user.match(/Version\/(\d+)/)[1];

  } else {
      browserName = "Unknown browser";
      browserVersion = "Unknown version";
  }

  return `${browserName}, ${browserVersion}`;
}


function operatingSystem() {
  const system = navigator.userAgent;

  if (/Windows/.test(system)) {
    return 'Windows';
  } else if (/Mac/.test(system)) {
    return 'macOs';
  } else if (/Linux/.test(system)) {
    return 'Linux';
  } else if (/like Mac OS X/.test(system)) {
    return 'iOS';
  } else {
    return 'Unknown operating system';
  };
}

function screenDimensions() {
  return `${screen.width} x ${screen.height}`;
}

function screenSpace() {
  return `${window.innerWidth} x ${window.innerHeight}`;
}

function currentTime(){
  let date = new Date().toLocaleDateString()
  let timeNow = new Date();

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();

  return `Date: ${date}, Time: ${hours}:${minutes}`;
}

function displayInfo() {
  const target = document.querySelector('#target');

  const browser = document.createElement('p');
  browser.textContent = `Browser name and version: ${browserInfo()}`;
  const system = document.createElement('p');
  system.textContent = `Operating system: ${operatingSystem()}`;
  const dimensions = document.createElement('p');
  dimensions.textContent = `Screen width and height: ${screenDimensions()}`;
  const space = document.createElement('p');
  space.textContent = `Available screen space for the browser: ${screenSpace()}`;
  const time = document.createElement('p');
  time.textContent = `${currentTime()}`;

  target.appendChild(browser);
  target.appendChild(system);
  target.appendChild(dimensions);
  target.appendChild(space);
  target.appendChild(time);
}

displayInfo();

