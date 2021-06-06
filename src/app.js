/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    let randomPronoun = Math.floor(Math.random() * pronoun.length);
    //  console.log(pronoun[randomPronoun]);
    for (let j = 0; j < adj.length; j++) {
      let randomAdj = Math.floor(Math.random() * adj.length);

      for (let x = 0; x < noun.length; x++) {
        let randomNoun = Math.floor(Math.random() * noun.length);

        for (let z = 0; z < extensions.length; z++) {
          let randomExtensions = Math.floor(Math.random() * extensions.length);

          console.log(
            pronoun[randomPronoun] +
              adj[randomAdj] +
              noun[randomNoun] +
              extensions[randomExtensions]
          );
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
