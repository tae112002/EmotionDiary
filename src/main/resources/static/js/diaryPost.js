var emotions = document.querySelectorAll(".img");
var emotioninput = document.getElementById("emotion");

function imgClick(event) {
  emotions.forEach((e) => {
    e.classList.remove("click");
    e.classList.add("nonClick");
  });
  event.target.classList.add("click");
  event.target.classList.remove("nonClick");
  emotioninput.value = event.target.id;
  console.log(event.target);
}

emotions.forEach((e) => {
  e.addEventListener("click", imgClick);
});

function readURL() {
  var input=document.getElementById("upload-file");
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview').src = e.target.result;
      document.getElementById('preview-box').classList.add("block");
      document.getElementById('preview-box').classList.remove("none");
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}

