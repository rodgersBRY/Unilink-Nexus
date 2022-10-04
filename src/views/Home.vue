<template>
  <div class="home">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="title-div">
        <h2>Hundreds of Amazing Destinations</h2>
        <p>
          Unilink Nexus International(UNI) is an Education Consultancy company
          that offers support and advice to international students who desire to
          pursue higher education abroad. We work with the best interest of our
          students at heart. We are professional and reliable
        </p>
        <p>
          Education is a fundamental right and everyone should have access to
          quality higher education. It is with this view in mind, that we strive
          to create opportunities for those who have genuine aspiration and
          honest intention seeking A1, higher education institutions overseas.
        </p>
      </section>

      <div class="services-cards">
        <v-card width="300px" v-for="(service, i) in services" :key="i" flat>
          <v-card-image>
            <img
              width="100%"
              height="200px"
              :src="service.img"
              alt="study in kenya, unilink nexus international"
            />
          </v-card-image>
          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-text>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </v-card-text>
        </v-card>
      </div>

      <section class="numbers-countries">
        <div class="watermark">
          <p class="watermark-text">Proud Partners</p>
          <div class="absolute-div">
            <h2>We are Proud</h2>
            <v-btn>Apply Now</v-btn>
          </div>
        </div>
        <div class="numbers-div">
          <div class="numbers" v-for="(stat, i) in stats" :key="i">
            <i :class="stat.icon"></i>
            <h3>{{ stat.numbers }}</h3>
            <p>{{ stat.text }}</p>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h2 style="text-align: center">Testimonials</h2>
        <div class="testimony-card">
          <v-avatar size="100" color="blue">
            <img
              :src="require('../assets/testimony-1.jpg')"
              alt="unilink students"
            />
          </v-avatar>
          <div>
            <i class="bx bxs-quote-left bx-md"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tenetur saepe aliquam itaque repellat blanditiis
              officiis modi eaque ipsa perspiciatis ab, dolores, enim vel labore
              consequatur ipsam nemo!
            </p>
            <h4>Brian Mawira</h4>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/home_nav.vue";

export default {
  name: "Home",
  components: {
    "nav-bar": NavBar,
  },
  data() {
    return {
      stats: [
        { icon: "bx bx-group bx-md", numbers: "55", text: "Universities" },
        { icon: "bx bx-book-bookmark bx-md", numbers: "20", text: "Courses" },
        {
          icon: "bx bx-universal-access bx-md",
          numbers: "324",
          text: "Enrolled Students",
        },
      ],
      services: [
        { title: "Study in Kenya", img: require("../assets/study_kenya.jpg") },
        { title: "Study Abroad", img: require("../assets/study-abroad.jpg") },
        { title: "Visa Processing", img: require("../assets/visa.jpg") },
        {
          title: "Scholarship Opportunity",
          img: require("../assets/scholarship.jpg"),
        },
      ],
      testimonials: [
        {
          name: "Brian Mawira",
          imageUrl: "",
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
        {
          name: "Justin Mawira",
          imageUrl: "",
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
        {
          name: "Maureen Gacherii",
          imageUrl: "",
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title-div {
  background-image: url("../assets/home-background.jpg");
  background-size: cover;
  background-position: fixed;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 3rem;
  h2 {
    font-size: 30px;
  }
  p {
    width: 50%;
    font-size: 20px;
    margin-top: 3rem;
  }
}

.services-cards {
  margin: 4rem;
  display: flex;
  justify-content: center;
  .v-card {
    margin: 0 16px;
  }
}

.watermark {
  position: relative;
  padding: 0 2rem;
  .watermark-text {
    font-size: 100px;
    letter-spacing: 5px;
    font-weight: bold;
    color: rgb(233, 233, 233);
  }
  .absolute-div {
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    width: 100%;
    position: absolute;
    top: 40%;
  }
}
.numbers-div {
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  width: 60%;
  margin: auto;
  .numbers {
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
.testimonials {
  background: rgb(245, 245, 245);
  margin-top: 5rem;
  padding: 5rem 0;
  .testimony-card {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .v-avatar {
      margin-right: 2rem;
    }
    div h4 {
      margin-top: 1rem;
    }
  }
}
</style>
