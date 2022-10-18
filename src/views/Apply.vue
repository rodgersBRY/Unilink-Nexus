<template>
  <div id="apply-now">
    <header>
      <sec-nav />
      <div class="header-title">
        <h1>Apply Now</h1>
      </div>
    </header>

    <main>
      <section class="form">
        <form @submit.prevent="submitApplication">
          <h2>Application Details</h2>
          <br />
          <br />
          <label for="name">Full Name<span class="required">*</span> </label>

          <input
            v-model="formData.name"
            type="text"
            name="name"
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
            name="email"
            class="input"
          />
          <label for="phone">Phone Number<span class="required">*</span></label>

          <input
            v-model="formData.phone"
            type="tel"
            name="phone"
            id="phone"
            class="input"
          />
          <label for="nationality"
            >Nationality<span class="required">*</span></label
          >

          <input
            v-model="formData.nationality"
            type="text"
            name="nationality"
            id="nationality"
            class="input"
          />
          <label for="originCountry"
            >Country of Origin<span class="required">*</span></label
          >
          <input
            v-model="formData.originCountry"
            type="text"
            name="originCountry"
            id="originCountry"
            class="input"
          />
          <label for="academicLevel"
            >Highest Academic Level<span class="required">*</span></label
          >
          <select
            v-model="formData.academicLevel"
            name="academicLevel"
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
            name="lastInstitution"
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
            name="destination"
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
          <label for="addtional-info">Additional Information</label>
          <input
            v-model="formData.additional_info"
            type="text"
            name="additional-info"
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
import axios from "axios";

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

  methods: {
    async submitApplication() {
      const resp = await axios.post("/.netlify/functions/apply", this.formData);
      console.log(resp.data)
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and(min-width: 900px) {
  header {
    height: 70vh;
    .header-title {
      font-size: 30px;
    }
  }
  .form {
    width: 50%;
    margin: 5rem auto;
  }
}
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

header {
  background-image: url("../assets/apply.webp");
  background-size: cover;
  color: white;
  .header-title {
    height: 90%;
    display: flex;
    align-items: flex-end;
    padding-left: 10px;
  }
}
.form {
  .input,
  select {
    padding: 1rem;
    background: rgb(241, 241, 241);
    margin: 5px 0 16px 0;
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
    background-color: green;
  }
}
</style>
