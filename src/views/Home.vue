<template>
  <div class="home">
    <header>
      <nav-bar />
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
    </header>

    <main>
      <section class="subheader">
        <p>
          Education is a fundamental right and everyone should have access to
          quality higher education. It is with this view in mind, that we strive
          to create opportunities for those who have genuine aspiration and
          honest intention seeking A1, higher education institutions overseas.
        </p>
      </section>

      <div class="services-cards">
        <v-card v-for="(service, i) in services" :key="i" flat>
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
            <v-btn dark to="/apply-now">Apply Now</v-btn>
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
          <!-- <v-avatar size="100" color="blue">
            <img :src="tst.imageUrl" alt="unilink students" />
          </v-avatar> -->
          <h2>{{ tst.name }}</h2>
          <div>
            <i class="bx bxs-quote-left bx-md"></i>
            <p>
              {{ tst.comment }}
            </p>
            <h4>{{ tst.country }}</h4>
          </div>

          <a @click="plusSlides(-1)" class="prev">&#10094;</a>
          <a @click="plusSlides(1)" class="next">&#10095;</a>
        </div>

        <div class="dot-container">
          <span
            class="dot"
            v-for="(tst, i) in testimonials"
            :key="i"
            @click="currentSlide(i + 1)"
          ></span>
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
        { title: "Study Abroad", img: require("../assets/study-abroad.webp") },
        { title: "Study in Kenya", img: require("../assets/study_kenya.webp") },
        { title: "Visa Processing", img: require("../assets/visa.webp") },
        {
          title: "Scholarship Opportunity",
          img: require("../assets/scholarship.webp"),
        },
      ],
      testimonials: [
        {
          name: "Elsa Keren Mugenzi",
          country: "Canada",
          comment:
            "I would like to thank Unilink Nexus Int. for sticking around throughout the whole process. I am having my visa today through your sincere effort effort and with God's help. Receive all the blessings",
        },
        {
          name: "Loxel Olly",
          country: "Poland",
          comment:
            "Unilink Nexus helped me apply for a university degree in Poland and they really helped with the processing and relocating to Poland after my application was successful. Totally appreciate them for their helping hand",
        },
        {
          name: "Amanda Christ Arikungoma",
          country: "Canada",
          comment:
            "Thank you Unilink for your help in applying to study in Canada. You were really helpful in the application process and helped me with moving",
        },
        {
          name: "Stone Kate Iracane",
          country: "Canada",
          comment:
            "Reaching out to Unilink Nexus was the best decision I ever made. Their program opened windows and opportunities that I never even knew existed. They are reliable and very efficient and transparent with all their processing. I am very grateful for their help in landing me an opportunity abroad.",
        },
      ],
    };
  },

  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.SlideIndex = n));
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
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
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
  p {
    width: 50%;
    font-size: 20px;
    margin-top: 3rem;
  }
}

.subheader {
  margin: 2rem auto;
  padding: 2rem;
}

.services-cards {
  display: flex;
  justify-content: center;
  .v-card {
    margin: 0 16px;
  }
}

.watermark {
  position: relative;
  .watermark-text {
    letter-spacing: 5px;
    font-weight: bold;
    color: rgb(233, 233, 233);
  }
  .absolute-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    left: 0;
    .v-btn {
      background: red;
    }
  }
}

.numbers-div {
  display: flex;
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
    align-items: center;
    position: relative;
    .v-avatar {
      margin-right: 2rem;
    }
    div h4 {
      margin-top: 1rem;
      text-align: end;
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

@media screen and (min-width: 900px) {
  .title-div {
    padding: 1rem;
    height: 90vh;
    h2 {
      font-size: 50px;
    }
    p {
      width: 50%;
    }
  }
  .subheader {
    width: 40%;
    font-size: 20px;
  }
  .services-cards {
    margin: 4rem 0;
    .v-card {
      width: 300px;
      margin: 0 1rem;
    }
  }
  .numbers-div {
    justify-content: center;
  }
  .testimonials {
    .testimony-card {
      width: 50%;
      margin: 2rem auto 1rem auto;
    }
  }

  .watermark {
    padding: 0 3rem;
    .watermark-text {
      font-size: 100px;
      letter-spacing: 3px;
    }
    .absolute-div {
      justify-content: space-around;
      align-items: center;
      top: 40%;
    }
  }
}

// mobile device
@media screen and (max-width: 900px) {
  .title-div {
    margin-top: 2rem;
    padding: 1rem;
    height: 70vh;
    h2 {
      font-size: 25px;
      margin-top: 1rem;
    }
    p {
      width: 100%;
      font-size: 16px;
    }
  }
  .subheader {
    width: 100%;
    font-size: 16px;
  }
  .services-cards {
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    .v-card {
      width: 80%;
    }
  }
  .numbers-div {
    flex-direction: column;
    align-items: center;
  }
  .testimonials {
    padding: 2rem 0;

    .testimony-card {
      width: 90%;
      margin: 2rem auto 1rem auto;
    }
  }

  .watermark {
    padding: 0 1rem;
    .watermark-text {
      font-size: 60px;
      letter-spacing: 3px;
    }
    .absolute-div {
      flex-direction: column;
      align-items: center;
      top: 20%;
      .v-btn {
        width: 50%;
        margin-top: 10px;
      }
    }
  }
}
</style>
