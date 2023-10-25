function displayWindowSize(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  
  var dropdownNames = document.querySelectorAll(".D_name");
  var dropdownMenus = document.querySelectorAll(".D_menu");

  dropdownNames.forEach(function(dropdownName, index) {
    dropdownName.addEventListener("mouseover", function() {
      dropdownMenus[index].style.display = "block";
    });

    dropdownName.addEventListener("mouseout", function() {
      dropdownMenus[index].style.display = "none";
    });

    // Additional event listener to keep menu open when mouse is over it
    dropdownMenus[index].addEventListener("mouseover", function() {
      dropdownMenus[index].style.display = "block";
    });

    dropdownMenus[index].addEventListener("mouseout", function() {
      dropdownMenus[index].style.display = "none";
    });
  });

  if (w < 900) {
    dropdownMenus.forEach(function(menu) {
      menu.style.display = "none";
    });
  }
}

window.addEventListener("resize", displayWindowSize);
document.addEventListener("DOMContentLoaded", displayWindowSize);
displayWindowSize(); // Call the function for the first time
