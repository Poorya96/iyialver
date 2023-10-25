function displayWindowSize()
{
  var dropdownNames = document.querySelectorAll(".D_name");
  var dropdownMenus = document.querySelectorAll(".D_menu");

  dropdownNames.forEach(function(dropdownName, index) {
    dropdownName.addEventListener("mouseover", function() {
      var w = document.documentElement.clientWidth;
      if (w < 1024) {
        return;
      }
      else{
        dropdownMenus[index].classList.add("show");

      dropdownName.addEventListener("mouseout", function() {
        dropdownMenus[index].classList.remove("show");
      });
    }
    });

    // Additional event listener to keep menu open when mouse is over it
    dropdownMenus[index].addEventListener("mouseover", function() {
      var w = document.documentElement.clientWidth;
      if (w < 1024) {
        return;
      }
      else{
        dropdownMenus[index].classList.add("show");

      dropdownMenus[index].addEventListener("mouseout", function() {
        dropdownMenus[index].classList.remove("show");
      });
      }
    });

    
  });

}

window.addEventListener("resize", displayWindowSize);
document.addEventListener("DOMContentLoaded", displayWindowSize);
displayWindowSize(); // Call the function for the first time
