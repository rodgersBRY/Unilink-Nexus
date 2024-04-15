<template>
  <div id="abroad">
    <header>
      <sec-nav />

      <div class="study-abroad">
        <p>Travel and Expand Knowledge</p>
        <p class="h1">STUDY ABROAD</p>
        <div class="breadcrumbs">
          <router-link tag="a" to="/">Home</router-link>
          <i class="bx bx-right-arrow-alt bx-sm"></i>
          Study Abroad
        </div>
      </div>
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
        { img: require("../assets/germany.webp"), title: "Germany" },
        { img: require("../assets/spain.jpg"), title: "Spain" },
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
  background-image: url("../assets/abroad.webp");
  background-size: cover;
  background-attachment: fixed;
  color: white;

  .breadcrumbs {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--main-color);
    }
  }
}
.destinations {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  .image {
    margin-bottom: 2rem;
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
// laptop and desktop
@media screen and (min-width: 900px) {
  header {
    height: 60vh;
    .study-abroad {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      p {
        font-size: 20px;
      }
      .h1 {
        font-size: 60px;
        margin: 1rem 0;
      }
    }
  }
  .destinations {
    padding: 5rem;
  }
}

@media screen and (max-width: 900px) {
  header {
    height: 50vh;
    .study-abroad {
      padding: 1rem;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      p {
        font-size: 20px;
      }
      .h1 {
        font-size: 40px;
        margin: 1rem 0;
      }
    }
  }

  .destinations {
    padding: 2rem;
  }
}
</style>
