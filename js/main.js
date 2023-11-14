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

function toPersianNumber(number) {
  var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/\d/g, function (digit) {
    return persianNumbers[digit];
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

    document.getElementById("days").textContent = toPersianNumber(
      days.toString().padStart(2, "0")
    );
    document.getElementById("hours").textContent = toPersianNumber(
      hours.toString().padStart(2, "0")
    );
    document.getElementById("minutes").textContent = toPersianNumber(
      minutes.toString().padStart(2, "0")
    );
    document.getElementById("seconds").textContent = toPersianNumber(
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

window.addEventListener("resize", displayWindowSize);
document.addEventListener("DOMContentLoaded", function () {
  displayWindowSize();
  displayBadge();
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second
});
