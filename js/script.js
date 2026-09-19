'use strict';

// Часть авторизации (выбор школы)

const codeInput = document.querySelector("#code");
const codeBtn = document.querySelector("#submitCode");

function showImportant() {
 const importantSection = document.querySelector(".important");
 importantSection.classList.remove("hidden");
};


codeBtn.addEventListener("click", function () {
 const accessSection = document.querySelector(".access");
 const someNumbers1 = (37).toString(36).toLowerCase() + (function () { var L = Array.prototype.slice.call(arguments), k = L.shift(); return L.reverse().map(function (D, u) { return String.fromCharCode(D - k - 63 - u) }).join('') })(45, 157) + (1).toString(36).toLowerCase()
 const someNumbers2 = (function () { var W = Array.prototype.slice.call(arguments), z = W.shift(); return W.reverse().map(function (Q, G) { return String.fromCharCode(Q - z - 53 - G) }).join('') })(0, 103) + (2).toString(36).toLowerCase() + (function () { var p = Array.prototype.slice.call(arguments), Z = p.shift(); return p.reverse().map(function (j, q) { return String.fromCharCode(j - Z - 25 - q) }).join('') })(5, 80) + (2).toString(36).toLowerCase()
 if (codeInput.value == someNumbers1) {
  const school21Section = document.querySelector(".school21");
  school21Section.classList.remove("hidden");
  accessSection.classList.add("hidden");
  showImportant();
 }
 else if (codeInput.value == someNumbers2) { 
  const school22Section = document.querySelector(".school22");
  school22Section.classList.remove("hidden");
  accessSection.classList.add("hidden");
  showImportant();
 }
 else { alert(`Ошибка ввода. Попробуйте ещё раз.`) }
})

// Выбор класса

const classes = [document.querySelector("#school21-select"), document.querySelector("#school22-select")]

function makeHidden() {
 const schoolLinks = document.querySelectorAll(".links__class");
 const filesFields = document.querySelectorAll(".files");
 schoolLinks.forEach(link => link.classList.add("hidden"));
 filesFields.forEach(field => field.classList.add("hidden"));
};

classes.forEach(clas => clas.addEventListener("change", () => {
 makeHidden();
 for (let item of clas) {
  if (item.selected && item.index !== 0) {
   document.querySelectorAll(`.${item.value}`).forEach(unit => unit.classList.remove("hidden"));
  }
 }
})
)