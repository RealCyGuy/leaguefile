<template>
  <div class="profileheading">
    <ProfileHeadingIcon :stats="stats" :username="$route.params.username" />
    <ProfileHeadingText />
  </div>
</template>

<script>
import ProfileHeadingIcon from "@/components/ProfileHeadingIcon.vue";
import ProfileHeadingText from "@/components/ProfileHeadingText.vue";

export default {
  components: {
    ProfileHeadingIcon,
    ProfileHeadingText,
  },
  props: {
    stats: Object,
  },
};
</script>

<style scoped>
.profileheading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>