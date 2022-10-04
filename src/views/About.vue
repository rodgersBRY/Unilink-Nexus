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
            Over the past year Unilink Nexus International has assisted students
            from Burundi to explore new education opportunities. Our vision has
            always been to create a one stop centre for students where they find
            the support they need. Our consultancy services have always been
            offered free of charge to our students, and we strive to ensure
            their progression within their course beyond their enrolment and
            towards the completion of their study
          </p>
        </div>
        <img
          width="40%"
          height="500px"
          src="../assets/hi-we-are.webp"
          alt="about unilink"
        />
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
      destinations: [
        { img: require("../assets/about-background.jpg"), title: "Canada" },
        // { img: require("../assets/contact-background.jpg"), title: "Israel" },
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
