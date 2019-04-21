<template>
  <div class="home">
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
    <Message msg="Naomei" />
  </div>
</template>

<script>
// @ is an alias to /src
import Message from "@/components/Message.vue";

export default {
  name: "home",
  components: {
    Message
  }
};
</script>
