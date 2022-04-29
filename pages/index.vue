<template>
  <h1>{{ $t("messages.welcome") }}</h1>
</template>

<script lang="ts">
export default {
  mounted(): any {
    const a: any = this;
    a.$i18n.locale === "fa" && document.body.classList.add("rtl");
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
};
</script>
