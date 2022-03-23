var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var myDropdown = this.nextElementSibling;
    if (myDropdown.style.display === "block") {
        myDropdown.style.display = "none";
    } else {
      myDropdown.style.display = "block";
    }
  });
}