import {
  BottomBar
} from './bottom-bar.js';

BottomBar();

const openFrontTrunk = document.querySelector('#openFrontTrunk');
const openRearTrunk = document.querySelector('#openRearTrunk');
const openChargingPlug = document.querySelector('#openChargingPlug');

openFrontTrunk.addEventListener('click',
  () => {
    if (openFrontTrunk.textContent === "OPEN") {
      openFrontTrunk.textContent = "CLOSE";
    } else {
      openFrontTrunk.textContent = "OPEN";
    }
  });

openRearTrunk.addEventListener('click',
  () => {
    if (openRearTrunk.textContent === "OPEN") {
      openRearTrunk.textContent = "CLOSE";
    } else {
      openRearTrunk.textContent = "OPEN";
    }
  });

openChargingPlug.addEventListener('click',
  () => {
    let flag = true;

    if (flag === true) {
      openChargingPlug.textContent = "CLOSE";
    } else if (openChargingPlug.textContent === "CLOSE") {
      openChargingPlug.textContent = "OPEN";
    }
  });