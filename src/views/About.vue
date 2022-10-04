<template>
  <div class="about">
    <header>
      <sec-nav />
      <div class="about-us">
        <p>Who We Are</p>
        <p class="h1">ABOUT US</p>
        <div>
          <router-link tag="a" to="/">Home</router-link>
          <i class="bx bx-right-arrow-alt bx-sm"></i>
          About Us
        </div>
      </div>
    </header>

    <main>
      <section class="intro">
        <div>
          <h2>HI,WE ARE <span>UNILINK NEXUS</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            consequuntur perspiciatis veritatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet
            cum quod inventore consectetur excepturi soluta ipsum odit,
            voluptatem laborum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium asperiores corporis odio ad
            repellendus, aliquam, sed inventore ducimus perspiciatis eum eveniet
            necessitatibus pariatur ullam enim voluptatem sapiente odit sequi
            incidunt!
          </p>
        </div>
        <img
          width="40%"
          height="500px"
          src="../assets/testimony-2.jpg"
          alt="about unilink"
        />
      </section>
      <section class="values">
        <div class="value-item" v-for="(item, i) in values" :key="i">
          <h2>
            <span><i :class="item.icon"></i></span>
            {{ item.title }}
          </h2>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </section>

      <section class="contactus-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          vero eum odio, mollitia aspernatur perferendis. Fugiat ratione
          adipisci dicta a culpa corporis commodi expedita!
        </p>
        <div class="action-btns">
          <v-btn depressed to="/contact-us">CONTACT US</v-btn>
          <v-btn depressed>APPLY NOW</v-btn>
        </div>
      </section>

      <section class="destinations">
        <div class="image" v-for="(country, i) in destinations" :key="i">
          <img
            width="100%"
            height="500px"
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
      values: [
        {
          icon: "bx bx-cable-car bx-md",
          title: "VOYAGES & CRUISES",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero eum odio, mollitia aspernatur perferendis. Fugiat rationeadipisci dicta a culpa corporis commodi expedita!",
        },
        {
          icon: "bx bx-building-house bx-md",
          title: "HOTEL BOOKINGS",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero eum odio, mollitia aspernatur perferendis. Fugiat rationeadipisci dicta a culpa corporis commodi expedita!",
        },
        {
          icon: "bx bx-tone bx-md",
          title: "TAILOR SUMMER TOURS",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero eum odio, mollitia aspernatur perferendis. Fugiat rationeadipisci dicta a culpa corporis commodi expedita!",
        },
      ],
      destinations: [
        { img: require("../assets/about-background.jpg"), title: "Canada" },
        { img: require("../assets/study-abroad.jpg"), title: "Israel" },
        { img: require("../assets/home-background.jpg"), title: "Egypt" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/about-background.jpg");
  background-size: cover;
  color: white;
  height: 80vh;
  .about-us {
    text-align: center;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
      font-size: 30px;
    }
    .h1 {
      font-size: 70px;
    }
    div {
      margin-top: 2rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline;
        text-decoration: none;
        color: white;
      }
    }
  }
}
.intro {
  margin: 10rem auto 5rem auto;
  display: flex;
  justify-content: space-between;
  width: 70%;
  div {
    padding: 4rem 0;
    width: 40%;
    h2 {
      margin-bottom: 5rem;
      color: rgb(78, 255, 117);
      span {
        color: red;
      }
    }
  }
}

.values {
  background: rgb(176, 248, 251);
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;

  .value-item {
    color: grey;
    width: 350px;
    h2 {
      margin-bottom: 2rem;
    }
  }
}

.contactus-section {
  text-align: center;
  padding: 4rem;

  margin: 0 auto;
  .action-btns {
    margin-top: 2rem;
    .v-btn {
      margin-right: 1rem;
      &:hover,
      &.active {
        background: red;
        color: white;
      }
    }
  }
}

.destinations {
  padding: 10rem;
  background: rgb(245, 245, 245);
  display: flex;
  flex-flow: row wrap;
  .image {
    width: 600px;
    margin: 0 5rem 2rem auto;
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>
