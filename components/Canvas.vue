<template>
  <section>
    <!-- particles.js container -->
    <div id="particles-js">
      <h1 class="text-step-two">{{ $t("messages.stepTwo") }}</h1>
    </div>

    <!-- stats - count particles -->
    <div class="count-particles">
      <carousel :responsive="{ 1000: { items: 3 }, 200: { items: 3 } }">
        <img src="~/assets/images/bit1.png" />

        <img src="~/assets/images/pro1.png" />
        <img src="~/assets/images/fun1.png" />
        <img src="~/assets/images/book1.png" />

        <img src="~/assets/images/en1.png" />
        <img src="~/assets/images/film1.png" />
      </carousel>
    </div>
  </section>
</template>

<script>
import "assets/js/particles.min.js";
import carousel from "vue-owl-carousel";

const $ = require("jquery");
export default {
  mounted() {
    function test() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });

      /* ---- stats.js config ---- */

      var count_particles, stats, update;
      stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector(".js-count-particles");
      update = function () {
        stats.begin();
        stats.end();
        if (
          window.pJSDom[0].pJS.particles &&
          window.pJSDom[0].pJS.particles.array
        ) {
          count_particles.innerText =
            window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
    window.setTimeout(() => {
      test();
    }, 2000);
  },
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
  components: { carousel },
};
</script>
<style>
/* ---- reset ---- */

/* ---- reset ---- */

body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  background-color: #137908;
  position: relative;
  height: 100vh;
  width: 100%;
}
#particles-js::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  background: #98e08d27;
}

/* ---- stats.js ---- */

.count-particles {
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  color: #13e8e9;
  font-size: 0.8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.owl-stage {
  margin-top: 65px;
}

.js-count-particles {
  font-size: 1.1em;
}
h1.text-step-two {
  color: #255e0b;
  /* background-color: #B8F1B0; */
  background: linear-gradient(
    45deg,
    #c95353,
    orange,
    yellow,
    #eaffea,
    #df5a46,
    #edfa2f,
    violet,
    red
  );
  border-radius: 0px 0px 50px 50px;
}
.owl-carousel .owl-item img {
  display: block;
  width: 69%;
  margin-left: 69px;
  border-radius: 30px;
}
@media only screen and (max-width: 600px) {
  .owl-carousel .owl-item img {
    display: block;
    width: 94%;
    margin-left: 6px;
    border-radius: 30px;
  }
}
</style>
