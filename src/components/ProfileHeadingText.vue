<template>
  <h1>
    <span class="first">{{params.username.toUpperCase()[0]}}</span>
    <span>{{params.username.toUpperCase().slice(1)}}</span>
    <span class="region">#{{params.region.toLowerCase()}}</span>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      params: this.$route.params
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 700;
}
span.first {
  font-size: 35px;
}
span.region {
  color: rgb(218, 218, 218);
}
</style>