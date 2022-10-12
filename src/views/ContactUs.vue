<template>
  <div id="contact-us">
    <header>
      <sec-nav />
      <div class="contact-us">
        <p>Get In Touch</p>
        <p class="h1">CONTACT US</p>
        <div>
          <router-link tag="a" to="/">Home</router-link>
          <i class="bx bx-right-arrow-alt bx-sm"></i>
          Contact Us
        </div>
      </div>
    </header>

    <main>
      <section class="addresses">
        <div class="contact-item" v-for="(item, i) in contactInfo" :key="i">
          <i :class="item.icon"></i>
          <h2>{{ item.title }}</h2>
          <p>{{ item.detail }}</p>
          <p>{{ item.detail2 }}</p>
        </div>
      </section>

      <div class="messaging-div">
        <div class="form-div">
          <h2>CONTACT US</h2>
          <p>
            You can contact us any way that is convenient for you. We are
            available 24/7 via fax or email. You can also use a quick contact
            form below or visit our office personally.
          </p>
          <form @submit.prevent="sendFeedback">
            <div class="align-row">
              <input
                v-model="fname"
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                style="margin-right: 2rem"
              />
              <input
                v-model="lname"
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
              />
            </div>
            <div class="align-row">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                style="margin-right: 2rem"
              />
              <input
                v-model="phone"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <label for="message">message</label>
            <textarea
              v-model="message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              style="margin-top: 1rem"
            ></textarea>

            <v-btn dark depressed right rounded type="submit"
              >send message</v-btn
            >
          </form>
        </div>

        <div class="map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.850471361465!2d36.796834114868346!3d-1.2620415359564503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176bc58b7517%3A0xa3cc2e9c1630138d!2sDunhill%20Towers!5e0!3m2!1sen!2ske!4v1665232335585!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
      contactInfo: [
        {
          icon: "bx bxs-map-pin bx-lg",
          title: "ADDRESS",
          detail: "Burundi: Patrice Lumumba Ave. Opp KCB Siege",
          detail2: "Nairobi: Westlands, Waiyaki Way. Dunhill Towers",
        },
        {
          icon: "bx bxs-phone bx-lg",
          title: "PHONES",
          detail: "+254768196690",
          detail2: "+25768196690",
        },
        {
          icon: "bx bxs-envelope bx-lg",
          title: "E-MAIL",
          detail: "uninexusintl@gmail.com",
          detail2: "",
        },
        {
          icon: "bx bxs-time bx-lg",
          title: "OPENING HOURS",
          detail: "Mon-Fri: 9:00 am - 6:00 pm",
          detail2: "Sat - Sun: 11:00am - 4:00 pm",
        },
      ],
    };
  },

  methods: {
    sendFeedback() {
      axios.post('/api/contactUs', "Hello world")
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/contact-background.webp");
  background-size: cover;
  height: 60vh;
  .contact-us {
    color: white;
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
        color: red;
      }
    }
  }
}

.addresses {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  .contact-item {
    margin: 0 4rem;
    text-align: center;
    h2 {
      margin-bottom: 10px;
    }
    p {
      color: grey;
    }
  }
}

.messaging-div {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 5rem auto;
  .form-div {
    padding: 2rem 2rem 0 2rem;
    width: 50%;
    h2 {
      margin-bottom: 3rem;
    }
    form input,
    form textarea {
      background: rgb(245, 245, 245);
      padding: 1.5rem;
      border-radius: 25px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    .align-row {
      display: flex;
      margin: 2rem 0;
    }

    form .v-btn {
      padding: 16px;
      background: green;
      margin: 10px 0;
    }
  }
  .map-div {
    width: 700px;
    height: 700px;
  }
}
</style>
