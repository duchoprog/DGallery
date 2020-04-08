let botHome = document.getElementById("homeBot");
let botWork = document.getElementById("workBot");
let botArtist = document.getElementById("artistBot");
let botContact = document.getElementById("contactBot");
let botHamb = document.getElementById("hamb");
let modal = document.getElementById("myModal");
vergaleria()

function vergaleria() {

  firebase.database().ref("/obras").on('value', function (snapshot) {
    document.querySelector(".carousel-inner").innerHTML = ""
    document.querySelector(".carousel-indicators").innerHTML = ""
    var i = 0
    snapshot.forEach(function (child) {

      armarTarjetaDB(child.val().nombre, child.val().comentarios, child.val().obraURL, child.val().borrador, i)
      i++



    });
  })
}

function armarTarjetaDB(nombre, comentarios, url, borrador, counter) {

  var counter = counter
  console.log(counter + " " + url)
  var activator = ""
  if (counter == 0) { activator = "active" }
  var tarj = `<div class="item ${activator}" style="height:75vh;width:90vw; ">
  <img src=${url}  class="center "   /></div>`
  document.querySelector(".carousel-inner").innerHTML += tarj
  //var popo = document.createElement("div").innerHTML()

  //document.querySelector("body").appendChild(popo)
  var punto = `<li data-target="#myCarousel" data-slide-to="${counter}" class=" ${activator}"></li>`
  document.querySelector(".carousel-indicators").innerHTML += punto

}




botArtist.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("artist").scrollIntoView({ behavior: "smooth" });
});
botHome.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
botWork.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});
botContact.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
  document.getElementById("myNavbar").classList.remove("show");
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
botHamb.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
  document.getElementById("nav").classList.add("show");
});
window.onclick = function (event) {
  if (event.target == modal) {
    document.getElementById("myNavbar").classList.remove("show");
    modal.style.display = "none";
  }
};
