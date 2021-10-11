// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// // method: "POST" is missing from the object below
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   })
  

const userUrl = "http://localhost:3000/users"

const bodyData = {
  name: "Steve",
  email: "steve@steve.com"
}

const objStuff = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(bodyData)
}

function submitData() {
  return fetch (userUrl, objStuff)
  .then(response => response.json())
  .then(getId)
  .catch(errorFunc)
}

const bodyTag =document.querySelector("body")

function getId(object){
  console.log (document.body.innerHTML = object.id)
  }

function errorFunc(error) {
  document.body.innerHTML = error.message
}