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
        <form @submit.prevent="submitForm">
          <h2>Application Details</h2>
          <div class="personal_info">
            <h3>Personal Information</h3>
            <br />
            <div class="grid-items">
              <div>
                <label for="name">Full Name<span class="required">*</span> </label>

                <input
                  v-model="formData.name"
                  type="text"
                  name="name"
                  id="name"
                  class="input"
                />
              </div>
              
              <div>
                <label for="email">Email Address<span class="required">*</span></label>

                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  name="email"
                  class="input"
                />
              </div>    
              
              <div>
                <label for="phone">Phone Number<span class="required">*</span></label>

                <input
                v-model="formData.phone"
                type="tel"
                name="phone"
                id="phone"
                class="input"
                />
              </div>

              <div>
                <label for="nationality">Nationality<span class="required">*</span></label>

                <input
                  v-model="formData.nationality"
                  type="text"
                  name="nationality"
                  id="nationality"
                  class="input"
                />
              </div> 
            </div>
            
            <label for="originCountry"
              >Country of Origin<span class="required">*</span></label
            >
            <input
              v-model="formData.country"
              type="text"
              name="country"
              id="country"
              class="input"
            />
          </div>
          
          <div class="academic_info">
            <h3>Academic Information</h3>
            <br />
            <div class="grid-items">
              <div>
                <label for="academicLevel">Highest Academic Level<span class="required">*</span></label>

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
              </div>
              
              <div>
                <label for="lastInstitution">Last Academic Institution Attended<span class="required">*</span></label>

                <input
                  v-model="formData.lastInstitution"
                  type="text"
                  name="Last Institution"
                  id="lastInstitution"
                  class="input"
                />
              </div>
            </div>

            <div>
              <label for="nextLevel">Next Level of Study<span class="required">*</span></label>

              <select name="nextLevel" id="next-level" v-model="formData.nextLevel">
                <option
                  v-for="level in nextStudyLevel"
                  :key="level.index"
                  :value="level.value"
                >
                  {{ level.title }}
                </option>
              </select>
            </div>

            <div class="grid-items">
              <div>
                <label for="destination">Preferred Course to Study<span class="required">*</span></label>

                <input
                  v-model="formData.course"
                  type="text"
                  name="course"
                  id="prefferedCourse"
                  class="input"
                />
              </div>

              <div>
                <label for="destination">Preferred Destination<span class="required">*</span></label>

                <select
                  name="destination"
                  id="destination"
                  v-model="formData.destination"
                >
                  <option
                    v-for="dest in preferredDest"
                    :key="dest.index"
                    :value="dest.value"
                  >
                    {{ dest.title }}
                  </option>
                </select>
              </div>
            </div>
            
            <label for="addtional-info">Additional Information</label>
            <textarea v-model="formData.moreInfo" name="moreInfo" id="more-info" rows="5" class="input"></textarea>
          </div>
          
          <v-btn dark type="submit">Apply</v-btn>

          <p v-if="showSuccess" class="success-message">Your Feedback has been submitted. Thank you</p>
            <p v-if="showError" class="error-message">{{error}}</p>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      showSuccess: false,
      error: "",
      showError: false,

      formData: {
        name: "",
        country: "",
        email: "",
        nationality: "",
        phone: "",
        destination: "",
        academicLevel: "",
        lastInstitution: "",
        course: "",
        moreInfo: "",
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
    async submitForm() {
      this.loading = true;

      const data = {
        service_id: process.env.VUE_APP_EMAIL_SERVICE_ID,
        template_id: process.env.VUE_APP_EMAIL_APPLY_TEMPLATE_ID,
        user_id: process.env.VUE_APP_EMAIL_PUBLIC_KEY,
        template_params: {
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone,
          nationality: this.formData.nationality,
          country: this.formData.country,
          academicLevel: this.formData.academicLevel,
          lastInstitution: this.formData.lastInstitution,
          nextLevel: this.formData.nextLevel,
          course: this.formData.course,
          destination: this.formData.destination,
          info: this.formData.moreInfo,
        }
      }

      try {
        const resp = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);

        if (resp.status == 200) {
          this.showSuccess = true;

          setTimeout(() => {
            this.showSuccess = false;

            this.formData.name = "",
            this.formData.email = "",
            this.formData.phone = "",
            this.formData.nationality = "",
            this.formData.country = "",
            this.formData.academicLevel = "",
            this.formData.lastInstitution = "",
            this.formData.nextLevel = "",
            this.formData.course = "",
            this.formData.destination = "",
            this.formData.moreInfo = ""
          }, 3000)
        }
      } catch (err) {
        this.showError = true,
        this.error = err;
      } finally {
        this.loading = false;
      }
    }
  }
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
  .personal_info, .academic_info {
    background: var(--fieldset-background);
    .input,textarea, select {
      width: 100%;
      padding: 8px 12px;
    }
    .grid-items {
      display: grid;
      div {
        width: 100%;
      }
    }
  }
  
  input,
  select,textarea {
    padding: 10px 5px;
    background: white;
    font-size: 14px;
    margin: 5px 0 16px 0;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  option {
    padding: 15px;
  }
  label {
    font-size: 13px;
    display: block;
    .required {
      color: red;
    }
  }

  .success-message {
    background-color: rgb(168, 255, 168);
    border-radius: 20px;
    padding: 5px 10px;
    color: rgb(0, 80, 0);
    font-weight: bold;
  }

  .error-message {
    background-color: rgb(255, 191, 191);
    border-radius: 20px;
    padding: 5px 10px;
    color: rgb(154, 0, 0);
    font-weight: bold;
  }
}

// desktop devices
@media screen and(min-width: 600px) {
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
    width: 70%;
    margin: 3rem auto;
    .personal_info, .academic_info {
      border-radius: 5px;
      padding: 2rem;
      margin-bottom: 2rem;
      .input,textarea, select {
        width: 100%;
        padding: 8px 12px;
      }
      .grid-items {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        div {
          width: 100%;
        }
      }
    }
    .v-btn {
      margin: 2rem auto;
      background-color: var(--main-color);
      width: 100%;
      display: flex;
    }
  }
}

// mobile and tablets
@media screen and(max-width: 600px) {
  header {
    height: 40vh;
    .header-title {
      font-size: 20px;
    }
  }

  .form {
    h2 {
      display: none;
    }
    margin: 0 auto 3rem auto;
    .personal_info, .academic_info {
      h3 {
        text-align: center;
      }
      padding: 1rem;
      .grid-items {
        grid-template-columns: repeat(1, 1fr);
        div {
          width: 100%;
        }
      }
    }
    .v-btn {
      margin: 2rem auto;
      background-color: var(--main-color);
      width: 80%;
      display: flex;
    }
  }
}
</style>
