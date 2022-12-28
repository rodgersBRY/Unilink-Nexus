<template>
  <div id="apply-now">
    <header>
      <sec-nav />
      <div class="header-title">
        <h1>
          <span><a href="/">Home</a></span> / Apply Now
        </h1>
      </div>
    </header>

    <main>
      <section class="form">
        <form action="https://formspree.io/f/xpzeaeee" method="POST">
          <h2>Application Details</h2>
          <br />
          <br />
          <label for="name">Full Name<span class="required">*</span> </label>

          <input
            v-model="formData.name"
            type="text"
            name="Full Name"
            id="name"
            class="input"
          />
          <label for="email"
            >Email Address<span class="required">*</span></label
          >

          <input
            v-model="formData.email"
            type="email"
            id="email"
            name="Email"
            class="input"
          />
          <label for="phone">Phone Number<span class="required">*</span></label>

          <input
            v-model="formData.phone"
            type="tel"
            name="Phone Number"
            id="phone"
            class="input"
          />
          <label for="nationality"
            >Nationality<span class="required">*</span></label
          >

          <input
            v-model="formData.nationality"
            type="text"
            name="Nationality"
            id="nationality"
            class="input"
          />
          <label for="originCountry"
            >Country of Origin<span class="required">*</span></label
          >
          <input
            v-model="formData.originCountry"
            type="text"
            name="Origin Country"
            id="originCountry"
            class="input"
          />
          <label for="academicLevel"
            >Highest Academic Level<span class="required">*</span></label
          >
          <select
            v-model="formData.academicLevel"
            name="Academic Level"
            id="academicLevel"
          >
            <option
              v-for="qty in academicQuacks"
              :key="qty.index"
              :value="qty.value"
            >
              {{ qty.title }}
            </option>
          </select>

          <label for="lastInstitution"
            >Last Academic Institution Attended<span class="required"
              >*</span
            ></label
          >
          <input
            v-model="formData.lastInstitution"
            type="text"
            name="Last Institution"
            id="lastInstitution"
            class="input"
          />
          <label for="nextLevel"
            >Next Level of Study<span class="required">*</span></label
          >
          <select name="nextLevel" id="nextLevel" v-model="formData.nextLevel">
            <option
              v-for="level in nextStudyLevel"
              :key="level.index"
              :value="level.value"
            >
              {{ level.title }}
            </option>
          </select>
          <label for="destination"
            >Preferred Destination<span class="required">*</span></label
          >
          <select
            name="Destination"
            id="destination"
            v-model="formData.preferredDestination"
          >
            <option
              v-for="dest in preferredDest"
              :key="dest.index"
              :value="dest.value"
            >
              {{ dest.title }}
            </option>
          </select>
          <label for="destination"
            >Preferred Course to Study<span class="required">*</span></label
          >
          <input
            v-model="formData.preferredCourse"
            type="text"
            name="Preffered Course"
            id="prefferedCourse"
            class="input"
          />
          <label for="addtional-info">Additional Information</label>
          <input
            v-model="formData.additional_info"
            type="text"
            name="Additional Information"
            id="additional-info"
            class="input"
          />

          <v-btn block dark type="submit">Apply</v-btn>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        originCountry: "",
        email: "",
        nationality: "",
        phone: "",
        preferredDestination: "",
        academicLevel: "",
        lastInstitution: "",
        preferredCourse: "",
        additional_info: "",
        nextLevel: "",
      },

      preferredDest: [
        { title: "Ireland", value: "ireland" },
        { title: "Canada", value: "canada" },
        { title: "USA", value: "usa" },
        { title: "United Kingdom", value: "uk" },
        { title: "Poland", value: "poland" },
        { title: "New Zealand", value: "newzealand" },
        { title: "Australia", value: "australia" },
        { title: "Cyprus", value: "cyprus" },
      ],
      nextStudyLevel: [
        { title: "Pre Sessional English", value: "preSessionalEnglish" },
        { title: "Foundation", value: "foundation" },
        { title: "Undergraduate", value: "undergrad" },
        { title: "Pre Masters", value: "premasters" },
        { title: "Masters", value: "masters" },
        { title: "PhD", value: "phd" },
      ],
      academicQuacks: [
        { title: "Diploma", value: "diploma" },
        { title: "Undergraduate Degree", value: "undergrad" },
        { title: "Postgraduate Degree", value: "postgrad" },
        { title: "PhD", value: "phd" },
        { title: "others", value: "others" },
      ],
    };
  },

  // methods: {
  //   async submitApplication() {
  //     await axios.post("/.netlify/functions/apply", this.formData);
  //     await axios.post('/.netlify/functions/autoreply', this.formData)
  //     alert("Your application was submitted")
  //   },
  // },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/apply.webp");
  background-size: cover;
  background-attachment: fixed;
  color: white;
  .header-title {
    height: 90%;
    display: flex;
    align-items: flex-end;
    padding-left: 10px;
    a {
      font-size: 30px;
      text-decoration: none;
      color: var(--main-color);
    }
  }
}
.form {
  .input,
  select {
    padding: 1rem;
    background: var(--input-background);
    margin: 5px 0 16px 0;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  option {
    padding: 15px;
  }
  label {
    display: block;
    .required {
      color: red;
    }
  }

  .v-btn {
    margin-top: 2rem;
    background-color: var(--main-color);
  }
}

// desktop devices
@media screen and(min-width: 900px) {
  header {
    height: 70vh;
    .header-title {
      font-size: 30px;
      display: flex;
      a {
        font-size: 30px;
        text-decoration: none;
      }
    }
  }
  .form {
    width: 50%;
    margin: 5rem auto;
  }
}

// mobile device
@media screen and(max-width: 900px) {
  header {
    height: 40vh;
    .header-title {
      font-size: 20px;
    }
  }

  .form {
    width: 90%;
    margin: 5rem auto;
  }
}
</style>
