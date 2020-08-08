<template>
  <div>
    <img :src="stats.icon" :alt="username + '\'s League of Legends icon.'" />
    <span>{{ stats.level }}</span>
  </div>
</template>

<script>
export default {
  props: ["stats", "username"],
};
</script>

<style scoped>
div {
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
img {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  border: 3px solid rgb(6, 156, 156);
}
span {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 4px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 2px solid rgb(6, 156, 156);
  background: rgb(15, 88, 88);
  color: rgb(143, 207, 207);
  font-weight: 700;
}
</style>