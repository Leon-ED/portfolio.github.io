let color = "white";



if (  window.matchMedia &&  window.matchMedia("(prefers-color-scheme: dark)").matches) {
  theme();
}

function affiche(id) {
  id = document.getElementById(id);
  parent = id.closest(".project-container");

  if (id.style.display == "none") {
    parent.classList.add("active");
    Array.from(document.getElementsByClassName("project-desc")).forEach(
      function (element) {
        if (element.id != id.id) {
          parent = element.closest(".project-container");
          element.style.display = "none";
          parent.classList.remove("active");
        }
      }
    );

    id.style.display = "block";
    id.scrollIntoView({ inline: "center" });
  } else {
    parent.classList.remove("active");
    document.getElementById("projects").scrollIntoView();
    id.style.display = "none";
  }
}

function theme() {
  console.log(document.getElementById("home").classList.toString());
  document.getElementById("home").classList.remove(color);
  document.getElementById("navi").classList.remove(color);

  color = (color == "white") ? "black" : "white";

  document.getElementById("home").classList.add(color);
  document.getElementById("navi").classList.remove(color);
}
