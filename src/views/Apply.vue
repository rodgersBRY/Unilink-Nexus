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
          <div class="personal_info">
            <h3>Personal Information</h3>
            <div class="grid-items">
              <div>
                <label for="name">Full Name<span class="required">*</span> </label>

                <input
                  v-model="formData.name"
                  type="text"
                  name="Full Name"
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
                  name="Email"
                  class="input"
                />
              </div>              
            </div>
            
            <div class="grid-items">
              <div>
                <label for="phone">Phone Number<span class="required">*</span></label>

                <input
                v-model="formData.phone"
                type="tel"
                name="Phone Number"
                id="phone"
                class="input"
                />
              </div>

              <div>
                <label for="nationality">Nationality<span class="required">*</span></label>

                <input
                  v-model="formData.nationality"
                  type="text"
                  name="Nationality"
                  id="nationality"
                  class="input"
                />
              </div> 
            </div>
            
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
          </div>
          
          <div class="academic_info">
            <label for="academicLevel"
            >Highest Academic Level<span class="required">*</span></label>
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
            <textarea name="Additional Information" id="additional-info" cols="4" class="input"></textarea>
          </div>
          

          <v-btn block dark type="submit">Apply</v-btn>
        </form>
      </section>
    </main>
  </div>
</template>

<script>

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
  .grid-items {
    display: flex;
    background-color: red;
  }
  .input,
  select {
    padding: 1rem;
    background: var(--input-background);
    margin: 5px 0 16px 0;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
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
