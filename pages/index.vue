<template>
  <section>
    <section class="scroll" style="background-color: #ff9999">
      <TheHeader />
    </section>
    <section class="scroll">
      <Canvas />
    </section>
    <section class="scroll three">
      <h1>سه تا از محبوبیت ها</h1>
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                  >Home</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                  >Profile</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                  >Messages</a
                >
                <a
                  class="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                  >Settings</a
                >
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="scroll" style="background-color: #e0e0e0">
      <h1>۳ تا خفن</h1>
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
.three {
  background-image: url("~/assets/images/t33.jpg");
  background-size: cover;
}
</style>
