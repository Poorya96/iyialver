function displayWindowSize() {
  var dropdownNames = document.querySelectorAll(".Dropdown_name");
  var dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownNames.forEach(function (dropdownName, index) {
    dropdownName.addEventListener("mouseover", function () {
      var w = document.documentElement.clientWidth;
      if (w < 1024) {
        return;
      } else {
        dropdownMenus[index].classList.add("show");

        dropdownName.addEventListener("mouseout", function () {
          dropdownMenus[index].classList.remove("show");
        });
      }
    });

    // Additional event listener to keep menu open when mouse is over it
    dropdownMenus[index].addEventListener("mouseover", function () {
      var w = document.documentElement.clientWidth;
      if (w < 1024) {
        return;
      } else {
        dropdownMenus[index].classList.add("show");

        dropdownMenus[index].addEventListener("mouseout", function () {
          dropdownMenus[index].classList.remove("show");
        });
      }
    });
  });
}
window.addEventListener("resize", displayWindowSize);
document.addEventListener("DOMContentLoaded", displayWindowSize);
displayWindowSize(); // Call the function for the first time

function convertNumber(number, toPersian = true) {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (toPersian) {
    return number.toString().replace(/\d/g, function (digit) {
      return persianNumbers[digit];
    });
  } else {
    return number.toString().replace(/[\u06F0-\u06F9]/g, function (digit) {
      return englishNumbers[persianNumbers.indexOf(digit)];
    });
  }
}

function getNumber() {
  var paragraphElement = document.getElementById("number");
  var persianNumber = paragraphElement.innerText; // عدد فارسی در قالب متن دریافت می‌شود
  var englishNumber = convertNumber(persianNumber, false); // تبدیل عدد فارسی به عدد انگلیسی

  return parseInt(englishNumber);
}

function addProduct() {
  var addButton = document.getElementById("add-product");
  var paragraphElement = document.getElementById("number");

  addButton.addEventListener("click", function () {
    var pValue = getNumber();
    var dValue = 10;

    if (pValue >= dValue) {
      addButton.setAttribute("disabled", "true");
    } else {
      var newValue = convertNumber(pValue + 1);
      paragraphElement.innerText = newValue;
      // if (newValue < dValue) {
      //   addButton.removeAttribute("disabled");
      // }
    }
  });
}

function minusProduct() {
  var minusButton = document.getElementById("minus-product");
  var paragraphElement = document.getElementById("number");

  minusButton.addEventListener("click", function () {
    var pValue = getNumber();
    if (pValue > 1) {
      var newValue = convertNumber(pValue - 1);
      paragraphElement.innerText = newValue;
      if (convertNumber(newValue, false) < 10) {
        var addButton = document.getElementById("add-product");
        addButton.removeAttribute("disabled");
      }
    }
    if (pValue === 1) {
      var button = document.getElementById("delete-product");
      button.click();
    }
  });
}

function deleteProduct() {
  var deleteButton = document.getElementById("delete-product");
  var checkout = document.getElementById("checkout");
  var cart = document.getElementById("cart");
  var product = document.getElementById("product");
  var card_empty = document.getElementById("card_empty");
  deleteButton.addEventListener("click", function () {
    checkout.style.display = "none";
    cart.style.width = "100%";
    product.style.display = "none";
    card_empty.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addProduct();
  minusProduct();
  deleteProduct();
});

function displayBadge() {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    var badge = card.querySelector(".badge_cart");

    card.addEventListener("mouseenter", function () {
      badge.classList.remove("fade-out");
      badge.classList.add("fade-in");
    });

    card.addEventListener("mouseleave", function () {
      badge.classList.remove("fade-in");
      badge.classList.add("fade-out");
    });
  });
}

function updateCountdown() {
  var countdownElement = document.getElementById("countdown");
  var endDate = new Date("2023-12-31T23:59:59"); // Set your target end date and time
  var now = new Date();
  var timeDifference = endDate - now;

  if (timeDifference > 0) {
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = convertNumber(
      days.toString().padStart(2, "0")
    );
    document.getElementById("hours").textContent = convertNumber(
      hours.toString().padStart(2, "0")
    );
    document.getElementById("minutes").textContent = convertNumber(
      minutes.toString().padStart(2, "0")
    );
    document.getElementById("seconds").textContent = convertNumber(
      seconds.toString().padStart(2, "0")
    );
  } else {
    countdownElement.innerHTML = "زمان به اتمام رسیده است!";
  }
}

document.getElementById("scroll-left").addEventListener("click", function () {
  document.querySelector(".scroll-container").scrollBy({
    left: -100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.getElementById("scroll-right").addEventListener("click", function () {
  document.querySelector(".scroll-container").scrollBy({
    left: 100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.getElementById("scroll-left2").addEventListener("click", function () {
  document.querySelector(".scroll-container_2").scrollBy({
    left: -100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.getElementById("scroll-right2").addEventListener("click", function () {
  document.querySelector(".scroll-container_2").scrollBy({
    left: 100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.getElementById("scroll-left3").addEventListener("click", function () {
  document.querySelector(".scroll-container_3").scrollBy({
    left: -100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.getElementById("scroll-right3").addEventListener("click", function () {
  document.querySelector(".scroll-container_3").scrollBy({
    left: 100, // Adjust this value to control the amount of scroll
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  displayBadge();
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second
});
