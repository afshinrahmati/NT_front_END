<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div id="world"></div>
    <div class="wrapper">
      <div class="circular-slider">
        <div class="card">
          <div class="content">
            👋<br />
            Hello World !
          </div>
        </div>
        <div class="card">
          <div class="content">
            😇 <br />
            Be Nice !
          </div>
        </div>
        <div class="card">
          <div class="content">
            🥗<br />
            Eat well !
          </div>
        </div>
        <div class="card">
          <div class="content">
            🌱<br />
            Stay Healthy !
          </div>
        </div>
        <div class="card">
          <div class="content">
            🌟<br />
            Shine Bright !
          </div>
        </div>
        <div class="card">
          <div class="content">
            😄<br />
            Be Happy !
          </div>
        </div>
      </div>
      <div class="info">
        <div class="smile">: )</div>
        <div class="name"></div>
        <div class="msg">Swipe left or right</div>
      </div>
    </div>
  </section>
</template>

<script>
import "assets/js/three";
import "assets/js/card-automatic.js";
import "assets/js/three.min.js";
export default {
  mounted() {},
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

.wrapper {
  height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
  perspective: 800px;

  background: linear-gradient(
    135deg,
    #0000f100 0%,
    rgb(255 255 255 / 27%) 100%
  );
}

.circular-slider {
  position: relative;
  display: block;
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform-style: preserve-3d;
}

.card {
  position: absolute;
  width: 20rem;
  height: 16rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15);

  backface-visibility: hidden;

  transform-style: preserve-3d;
  perspective: 800px;
}

.card .content {
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #666;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  transform-style: preserve-3d;

  transform: translateZ(2rem) rotateY(0deg);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  color: #fff;
}

.info {
  position: absolute;
  bottom: 2rem;
  color: #454545;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);
  text-align: center;
  line-height: 1.3;
  font-size: 0.8rem;
  pointer-events: none;
  z-index: 1;
}

.info .smile {
  font-size: 1.2rem;
}

.info .name {
  font-weight: 300;
  font-size: 1.2rem;
}

.card:nth-child(1) {
  background: linear-gradient(135deg, #ce9ffc 0%, #7367f0 100%);
}

.card:nth-child(6) {
  background: linear-gradient(135deg, #c3ec52aa 0%, #0ba29daa 100%);
}

.card:nth-child(3) {
  background: linear-gradient(135deg, #0ff0b388 0%, #036ed988 100%);
}

.card:nth-child(4) {
  background: linear-gradient(135deg, #fcdf8a 0%, #f38381 100%);
}

.card:nth-child(5) {
  background: linear-gradient(135deg, #fad961aa 0%, #f76b1caa 100%);
}

.card:nth-child(2) {
  background: linear-gradient(135deg, #f02fc2cc 0%, #6094eacc 100%);
}
</style>
