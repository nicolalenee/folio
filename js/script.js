// get the modal
var modal = document.getElementById("modal");
// get the button to open the modal
var btn = document.getElementById("modal-button");
// get the element that closes the modal
var span = document.getElementsByClassName("close")[0];
// when the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display="block";
};

// display the modal details

// when the user clicks on the x, close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// when the user clicks outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
