<template>

  <section>

    <section class="scroll" style="background-color: #ff9999">
      <TheHeader />
    </section>
    <section class="scroll">
      <Canvas />
    </section>
    <section class="scroll" style="background-color: #ccff99">
      <h1>Three</h1>
    </section>
    <section class="scroll" style="background-color: #e0e0e0">
      <h1>Footer</h1>
    </section>
  </section>
</template>
<script>
const $ = require("jquery");
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
html {
  font-family: sans-serif;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}
.scroll {
  border-bottom: 1px solid white;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
  height: 100vh;
}

</style>
