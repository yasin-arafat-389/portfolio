"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Typewriter effect
const titles = ["Web Developer", "Frontend Developer", "React Developer"];

let index = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const title = titles[index];
  const speed = 100;
  const typewriterDiv = document.getElementById("typewriter");

  if (!isDeleting && letterIndex <= title.length) {
    typewriterDiv.innerHTML = title.substring(0, letterIndex);
    letterIndex++;
    setTimeout(type, speed);
  } else if (isDeleting && letterIndex >= 0) {
    typewriterDiv.innerHTML = title.substring(0, letterIndex);
    letterIndex--;
    setTimeout(type, speed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % titles.length;
    }
    setTimeout(type, 500);
  }
}

window.onload = function () {
  type();
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () {
//   elementToggleFunc(this);
// });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Modal for dinedash
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the button that closes the modal
var closeBtn = document.getElementById("closeModalBtn");

// When the button is clicked, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the close button is clicked, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Modal for FitSync
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("openModalBtn2");

// Get the button that closes the modal
var closeBtn2 = document.getElementById("closeModalBtn2");

// When the button is clicked, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the close button is clicked, close the modal
closeBtn2.onclick = function () {
  modal2.style.display = "none";
};

// Modal for WorkVista
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("openModalBtn3");

// Get the button that closes the modal
var closeBtn3 = document.getElementById("closeModalBtn3");

// When the button is clicked, open the modal
btn3.onclick = function () {
  modal3.style.display = "block";
};

// When the close button is clicked, close the modal
closeBtn3.onclick = function () {
  modal3.style.display = "none";
};

// Modal for WorkVista
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("openModalBtn4");

// Get the button that closes the modal
var closeBtn4 = document.getElementById("closeModalBtn4");

// When the button is clicked, open the modal
btn4.onclick = function () {
  modal4.style.display = "block";
};

// When the close button is clicked, close the modal
closeBtn4.onclick = function () {
  modal4.style.display = "none";
};

// Download resume
function downloadResume() {
  const pdfPath = "../images/resume-yasin-arafat(web developer).pdf";

  const link = document.createElement("a");

  link.href = pdfPath;

  link.download = "resume.pdf";

  link.click();
}
