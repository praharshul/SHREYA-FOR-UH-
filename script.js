function hideAll() {
  document.getElementById("photos").classList.add("hidden");
  document.getElementById("video").classList.add("hidden");
  document.getElementById("letter").classList.add("hidden");
}

function showPhotos() {
  hideAll();
  document.getElementById("photos").classList.remove("hidden");
}

function showVideo() {
  hideAll();
  document.getElementById("video").classList.remove("hidden");
}

function showLetter() {
  hideAll();
  document.getElementById("letter").classList.remove("hidden");
}
