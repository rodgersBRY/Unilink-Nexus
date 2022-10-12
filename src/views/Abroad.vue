<template>
  <div id="abroad">
    <header>
      <sec-nav />
    </header>

    <main>
      <section class="destinations">
        <div class="image" v-for="(country, i) in destinations" :key="i">
          <img
            width="100%"
            height="300px"
            :src="country.img"
            :alt="[country.title, 'unilink destinations']"
          />
          <p>{{ country.title }}</p>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      destinations: [
        {
          img: require("../assets/usa.jpg"),
          title: "United States of America",
        },
        { img: require("../assets/uk.jpg"), title: "United Kingdom" },
        { img: require("../assets/canada.jpg"), title: "Canada" },
        { img: require("../assets/ireland.jpg"), title: "Ireland" },
        { img: require("../assets/poland.jpg"), title: "Poland" },
        { img: require("../assets/australia.jpg"), title: "Australia" },
        {
          img: require("../assets/new-zealand.jpg"),
          title: "New Zealand",
        },
        { img: require("../assets/cyprus.jpg"), title: "Cyprus" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url('../assets/abroad.jpg');
  background-size: cover;
  height: 60vh;
}
.destinations {
  padding: 5rem;
  background: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  .image {
    margin: 0 5rem 2rem auto;
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>
