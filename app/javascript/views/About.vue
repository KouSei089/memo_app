<template>
  <section id="about">
    <h1>{{ title }}</h1>
    <hr>
    <h1>User No. {{ id }}</h1>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "Aboutです"
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
