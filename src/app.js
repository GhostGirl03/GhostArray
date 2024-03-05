/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["me", "you"];
const adj = ["pretty", "brilliant"];
const noun = ["people", "computer"];

const domains = [];

window.onload = function() {
  //write your code here
  for (const i of pronoun) {
    for (const j of adj) {
      for (const k of noun) {
        domains.push(i + j + k);
      }
    }
  }
  document.querySelector("div").innerHTML = domains.join("<br/>");
};
