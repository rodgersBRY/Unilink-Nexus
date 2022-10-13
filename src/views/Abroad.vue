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
          img: require("../assets/usa.webp"),
          title: "United States of America",
        },
        { img: require("../assets/uk.webp"), title: "United Kingdom" },
        { img: require("../assets/canada.webp"), title: "Canada" },
        { img: require("../assets/ireland.webp"), title: "Ireland" },
        { img: require("../assets/poland.webp"), title: "Poland" },
        { img: require("../assets/australia.webp"), title: "Australia" },
        {
          img: require("../assets/new-zealand.webp"),
          title: "New Zealand",
        },
        { img: require("../assets/cyprus.webp"), title: "Cyprus" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/abroad.jpg");
  background-size: cover;
  height: 60vh;
}
.destinations {
  padding: 5rem;
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
