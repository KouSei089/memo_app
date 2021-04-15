<template>
  <section id="about">
    <h1>{{ title }}</h1>
    <router-link to="/about/1">ユーザー1</router-link>
    <router-link to="/about/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/about/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-link :to="{ name: 'home-id-post', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }}">次のユーザーの投稿</router-link>
    <router-view></router-view>
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
