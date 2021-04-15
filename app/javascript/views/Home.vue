<template>
  <section id="home">
    <h1>{{ title }}</h1>
    <button @click="toUsers">UserPage</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Homeページです"
    };
  },
  methods: {
    toUsers() {
      this.$router.push("about");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
