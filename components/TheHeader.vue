<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div id="world"></div>
    <h1 class="rainbow-text">{{ $t('messages.welcome') }}</h1>
  </section>
</template>

<script>
import "assets/js/three";
// import "assets/js/three.min.js";
export default {
  mounted() { },
  methods: {
    // changeClass: async (language:any) => {
    //   if (language === "en") {
    //     document.body.classList.remove("rtl");
    //     document.body.classList.add("ltr");
    //   } else {
    //     document.body.classList.remove("ltr");
    //     document.body.classList.add("rtl");
    //   }
    // },
  },
};
</script>

<style>
@import "assets/style/three.css";

:root {
  --time: 0.2s;
}






/* Style the rainbow text element. */
.rainbow-text {
  margin: 18% 39%;
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #CA4246;
  background-color: #CA4246;
  position: absolute;
  background: conic-gradient(#CA4246 16.666%,
      #E16541 16.666%,
      #E16541 33.333%,
      #F18F43 33.333%,
      #F18F43 50%,
      #8B9862 50%,
      #8B9862 66.666%,
      #476098 66.666%,
      #476098 83.333%,
      #A7489B 83.333%);

  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animate the text when loading the element. */
  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 0.5s ease forwards;

  cursor: pointer;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}
</style>
