
  const navbar = document.getElementById("mainNavbar");
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("fixed");
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      navbar.classList.remove("fixed");
      document.body.style.paddingTop = "0";
    }
  });

