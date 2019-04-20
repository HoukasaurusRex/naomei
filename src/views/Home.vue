<template>
  <div class="home">
    <img
      alt="Naomei, May, and JT leaping to the heavens"
      width="500"
      src="../assets/bday.png"
    />
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
