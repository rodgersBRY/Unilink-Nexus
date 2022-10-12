<template>
  <div class="home">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="title-div">
        <typewriter
          :replace="replace"
          :type-interval="100"
          :replace-interval="1000"
        >
          <h2>Hundreds of Amazing Destinations</h2>
        </typewriter>

        <p>
          Unilink Nexus International(UNI) is an Education Consultancy company
          that offers support and advice to international students who desire to
          pursue higher education abroad. We work with the best interest of our
          students at heart. We are professional and reliable
        </p>
      </section>

      <section class="subheader">
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
        </v-card>
      </div>

      <section class="numbers-countries">
        <div class="watermark">
          <p class="watermark-text">Proud Partners</p>
          <div class="absolute-div">
            <h2>We are Proud</h2>
            <v-btn to="/apply-now">Apply Now</v-btn>
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
        <div class="testimony-card" v-for="(tst, i) in testimonials" :key="i">
          <v-avatar size="100" color="blue">
            <img :src="tst.imageUrl" alt="unilink students" />
          </v-avatar>
          <div>
            <i class="bx bxs-quote-left bx-md"></i>
            <p>
              {{ tst.comment }}
            </p>
            <h4>{{ tst.name }}</h4>
          </div>

          <a @click="plusSlides(-1)" class="prev">&#10094;</a>
          <a @click="plusSlides(1)" class="next">&#10095;</a>
        </div>

        <div class="dot-container">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Typewriter from "typewriter-vue";
import NavBar from "../components/home_nav.vue";

export default {
  name: "Home",

  components: {
    "nav-bar": NavBar,
    typewriter: Typewriter,
  },

  mounted() {
    this.showSlides();
  },

  data() {
    return {
      slideIndex: 1,
      replace: [
        { from: "Vue", to: "react" },
        { from: "Typewriter vue", to: "Typewriter React" },
      ],
      stats: [
        { icon: "bx bx-group bx-md", numbers: "55+", text: "Universities" },
        { icon: "bx bx-book-bookmark bx-md", numbers: "20+", text: "Courses" },
        {
          icon: "bx bx-universal-access bx-md",
          numbers: "100+",
          text: "Enrolled Students",
        },
      ],
      services: [
        { title: "Study in Kenya", img: require("../assets/study_kenya.webp") },
        { title: "Study Abroad", img: require("../assets/study-abroad.webp") },
        { title: "Visa Processing", img: require("../assets/visa.webp") },
        {
          title: "Scholarship Opportunity",
          img: require("../assets/scholarship.webp"),
        },
      ],
      testimonials: [
        {
          name: "Brian Mawira",
          imageUrl: require("../assets/testimony-1.webp"),
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
        {
          name: "Justin Mawira",
          imageUrl: require("../assets/testimony-2.webp"),
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
        {
          name: "Maureen Gacherii",
          imageUrl: require("../assets/testimony-1.webp"),
          comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere atque cum culpa doloremque nulla delectus fugiat ea libero minima facilis doloribus nemo animi, possimus recusandae.",
        },
      ],
    };
  },

  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let slides = document.getElementsByClassName("testimony-card");
      let dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (let slide of slides) {
        slide.style.display = "none";
      }
      for (let dot of dots) {
        dot.className = dot.className.replace("active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
};
</script>

<style lang="scss" scoped>
.title-div {
  background-image: url("../assets/home-background.webp");
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

.subheader {
  width: 50%;
  margin: 2rem auto;
  padding: 2rem;
  font-size: 20px;
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
    align-items: center;
    position: relative;
    .v-avatar {
      margin-right: 2rem;
    }
    div h4 {
      margin-top: 1rem;
    }
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -30px;
      padding: 1rem;
      color: #888;
      font-weight: bold;
      font-size: 20px;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    .next {
      position: absolute;
      right: 0;
      border-radius: 3px 0 0 3px;
    }
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
    }
  }
  .dot-container {
    text-align: center;
    padding: 20px;

    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 5px;
      background-color: #bbb;
      display: inline-block;
      border-radius: 50%;
      transition: background-color 0.6s ease;

      .active,
      &:hover {
        background-color: #717171;
      }
    }
  }
}
</style>
