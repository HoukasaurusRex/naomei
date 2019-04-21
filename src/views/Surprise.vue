<template>
  <main class="surprise">
    <picture>
      <source
        media="(min-width: 600px)"
        srcset="../assets/bday-500.png"
        type="image/"
      />
      <source srcset="../assets/bday-100.png" type="image/" />
      <img
        alt="Naomei, May, and JT leaping to the heavens"
        width="50%"
        src="../assets/bday-500.png"
        style="max-width: 500px;"
      />
    </picture>
    <Song :msg="msg" />
  </main>
</template>

<script>
import Song from "@/components/Song.vue";

export default {
  name: "suprise",
  components: {
    Song
  },
  data() {
    return {
      msg:
        "Latvian happy birthday to youuuuu, Latvian happy birthday to youuuuu, Latvian happy birthday dear Naomei, Latvian happy birthday to youuuu"
    };
  }
};
</script>

<style lang="scss" scoped></style>
