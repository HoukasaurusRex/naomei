<template>
  <section>
    <div class="voiceinator">
      <select v-model="selected" name="voice" id="voices">
        <option value="">Select A Voice</option>
        <option
          :key="index"
          v-for="(voice, index) in voices"
          :value="voice.name"
          >{{ voice.name }} ({{ voice.lang }})</option
        >
      </select>

      <!-- <label for="rate">Rate:</label>
      <input name="rate" type="range" min="0" max="3" value="1" step="0.1" />

      <label for="pitch">Pitch:</label>
      <input name="pitch" type="range" min="0" max="2" step="0.1" /> -->

      <textarea v-model="msg" name="text"></textarea>

      <div class="bottom-buttons">
        <button @click="stop">Stop</button>
        <button @click="speak">Speak</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "song",
  props: {
    msg: String
  },
  data() {
    return {
      selected: "",
      speech: new SpeechSynthesisUtterance(),
      text: this.msg,
      rate: "",
      pitch: ""
    };
  },
  computed: {
    voices() {
      return this.$store.getters.getVoices;
    }
    // rate() {
    //   return;
    // },
    // pitch() {}
  },
  methods: {
    speak() {
      const message = this.speech;
      message.voice = this.$store.state.voices.find(
        voice => voice.name === this.selected
      );
      message.text = this.msg;
      speechSynthesis.cancel();
      speechSynthesis.speak(message);
    },
    stop() {
      speechSynthesis.cancel();
    }
    // rate() {},
    // pitch() {}
  },
  beforeCreate() {
    this.$store.dispatch({
      type: "getVoices"
    });
  }
};
</script>

<style lang="scss" scoped>
.voiceinator {
  padding: 2rem;
  // width: 100%;
  margin: 2rem auto;
  border-radius: 1rem;
  position: relative;
  background: white;
  overflow: hidden;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
}
.texttospeech h1 {
  // width: calc(100% + 4rem);
  margin: -2rem 0 2rem -2rem;
  padding: 0.5rem;
  background: #ffc600;
  border-bottom: 5px solid #f3c010;
  text-align: center;
  font-size: 5rem;
  font-weight: 100;
  text-shadow: 3px 3px 0 #f3c010;
}
.voiceinator input,
.voiceinator button,
.voiceinator select,
.voiceinator textarea {
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 10px;
  border: 0;
  font-size: 2rem;
  font-weight: 300;
  background: #f7f7f7;
  outline: 0;
}
.texttospeech textarea {
  height: 20rem;
}
.texttospeech input[type="select"] {
}
.bottom-buttons {
  display: flex;
}
.voiceinator button {
  flex: 1;
  background: #ffc600;
  border: 0;
  width: 49%;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 5px solid #f3c010;
  cursor: pointer;
  position: relative;
}
.voiceinator button:active {
  top: 2px;
}
.voiceinator button:nth-of-type(1) {
  margin-right: 2%;
}
</style>
