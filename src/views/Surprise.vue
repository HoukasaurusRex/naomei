<template>
  <main class="surprise">
    <img
      alt="Naomei, May, and JT leaping to the heavens"
      width="500"
      src="../assets/bday3.png"
    />
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
