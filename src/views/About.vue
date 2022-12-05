<template>
  <div class="about">
    <header>
      <sec-nav />
      <div class="about-us">
        <p>Who We Are</p>
        <p class="h1">ABOUT US</p>
        <div class="breadcrumbs">
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
            Over the past year Unilink Nexus International has assisted students
            from Burundi to explore new education opportunities. Our vision has
            always been to create a one stop centre for students where they find
            the support they need. Our consultancy services have always been
            offered free of charge to our students, and we strive to ensure
            their progression within their course beyond their enrolment and
            towards the completion of their study
          </p>
        </div>
        <img src="../assets/hi-we-are.webp" alt="about unilink" />
      </section>
      <section class="values">
        <div class="value-item" v-for="(item, i) in values" :key="i">
          <h2>
            <span><i :class="item.icon"></i></span>
            {{ item.title }}
          </h2>
          <p v-html="item.desc"></p>
        </div>
      </section>

      <section class="contactus-section">
        <p>
          Our consultancy services have always been offered free of charge to
          our students, and we strive to ensure their progression within their
          course beyond their enrolment and towards the completion of their
          study.
        </p>
        <div class="action-btns">
          <v-btn to="/contact-us">CONTACT US</v-btn>
          <v-btn  dark to="/apply-now">APPLY NOW</v-btn>
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
          icon: "bx bx-shape-circle bx-md",
          title: "OUR MISSION",
          desc: "Our mission is to successfully place bona fide education seekers in topflight education providers. We aim to take leadership in the education consultancy industry through the distinguished quality of our services to students and education partners. We provide all-rounded, professional support to our clients and our educational partners.",
        },
        {
          icon: "bx bx-globe-alt bx-md",
          title: "OUR VISION",
          desc: "Our vision is to position Unilink Nexus International (UNI) to become a globally recognized education consultancy company by striving to create a client-first environment where our staff are energetic, caring, inclusive and professional. We will work creatively and diligently with our education partners, sharing information of value to achieve cohesive, seamless and supportive systems for our clients from the the date of first contact to graduation and beyond.",
        },
        {
          icon: "bx bx-cabinet bx-md",
          title: "OUR VALUES",
          desc: "<strong>Professional </strong> <br /> We are a team of experts and skilled practitioners, adept communicators, analysts and strategic thinkers. <br /> <strong>Creative </strong>  <br /> We are innovative, inspiring and proactive. <br /><strong>Collaborative </strong>  <br /> We work in partnership with all involved stakeholders to form valuable networks and lasting bonds. <br /><strong>Constructive</strong>  <br /> We are helpful, supportive, reliable and trustworthy. <br /><strong>Adaptable </strong>  <br /> We are open to change and new ideas while continuously striving to improve.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/about-background.webp");
  background-size: cover;
  background-attachment: fixed;
  color: white;
  .about-us {
    text-align: center;
    display: flex;
    flex-direction: column;

    & > p {
      font-size: 30px;
    }
    .h1 {
      font-size: 70px;
    }
    .breadcrumbs {
      margin-top: 2rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline;
        text-decoration: none;
        color: rgb(255, 145, 72);
      }
      i {
        margin: 0 10px;
      }
    }
  }
}

.intro {
  display: flex;
  justify-content: space-between;
  div {
    h2 {
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

// laptop and desktop device
@media screen and (min-width: 900px) {
  header {
    height: 80vh;
    .about-us {
      height: 70%;
      justify-content: end;
    }
  }

  .intro {
    width: 60%;
    margin: 10rem auto 5rem auto;
    div {
      padding: 4rem 0;
      margin-right: 2rem;
      // width: 30%;
      h2 {
        margin-bottom: 5rem;
        color: rgb(78, 255, 117);
        span {
          color: red;
        }
      }
    }
    img {
      max-width: 500px;
      height: 500px;
    }
  }

  .contactus-section {
    padding: 4rem;
  }
}

// mobile and tab device
@media screen and(max-width: 900px) {
  header {
    height: 50vh;
    .about-us {
      height: 90%;
      justify-content: end;
      padding-left: 2rem;
      align-items: flex-start;
      p {
        font-size: 20px;
      }
      .h1 {
        font-size: 40px;
        margin-top: 1rem;
      }
    }
  }

  .intro {
    margin: 2rem auto;
    flex-direction: column;
    padding: 0 3rem;
    div {
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 2rem;
        color: rgb(78, 255, 117);
        span {
          color: red;
        }
      }
    }
    img {
      height: 400px;
    }
  }

  .values {
    .value-item:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  .contactus-section {
    padding: 4rem 1rem;
    .action-btns {
      display: flex;
      flex-direction: column;
      .v-btn:not(:first-child) {
        margin-top: 1rem;
        background: red;
      }
    }
  }
}

.contactus-section {
  text-align: center;
  
  margin: 0 auto;
  .action-btns {
    margin-top: 2rem;
    .v-btn {
      &:hover,
      &.active {
        background: black;
        color: white;
      }
    }
    .v-btn:not(:first-child) {
      background: red;
      margin-left: 1rem;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
}
</style>
