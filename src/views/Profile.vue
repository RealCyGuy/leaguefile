<template>
  <div>
    <div v-if="stats.notFound">
      <p>Player not found</p>
      <router-link to="/">Home</router-link>
    </div>
    <div v-else-if="stats.error">
      <p>An error occured.</p>
    </div>
    <div v-else>
      <ProfileHeading :stats="stats"></ProfileHeading>
    </div>
  </div>
</template>

<script>
import ProfileLoader from "@/assets/profileloader.gif";
import ProfileHeading from "@/components/ProfileHeading.vue";

export default {
  components: {
    ProfileHeading,
  },
  data() {
    return {
      stats: {
        icon: ProfileLoader,
        level: "?",
      },
      regions: {
        br: "br1",
        eune: "eun1",
        euw: "euw1",
        jp: "jp1",
        kr: "kr",
        lan: "la1",
        las: "la2",
        na: "na1",
        oce: "oc1",
        tr: "tr1",
        ru: "ru",
      },
    };
  },
  mounted() {
    fetch(
      "/.netlify/functions/lolstats?region=" +
        this.regions[this.$route.params.region.toLowerCase()] +
        "&username=" +
        this.$route.params.username
    )
      .then((response) => response.json())
      .then((json) => {
        this.stats = json;
      })
      .catch((error) => (this.stats.error = error));
  },
  metaInfo() {
    return {
      title: this.stats.done
        ? `${this.stats.username}'s LeagueFile - League of Legends profile`
        : "LeagueFile - League of Legends profile",
    };
  },
};
</script>

<style scoped>
</style>