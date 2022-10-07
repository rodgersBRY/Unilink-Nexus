<template>
  <div class="header-nav">
    <div class="logo-div">
      <img
        width="100px"
<<<<<<< HEAD
        :src="require('@/assets/logo.png')"
=======
        src="../assets/logo.png"
>>>>>>> f9cf2e5b292255489d7705d4bca65a237a12460b
        alt="unilink nexus, study abroad, study in kenya"
      />
      <p>Unilink <span>Nexus International</span></p>
    </div>
    <nav>
      <ul>
        <router-link tag="li" to="/" exact-active-class="active"
          >Home</router-link
        >
        <router-link tag="li" to="/about" active-class="active"
          >About Us</router-link
        >
<<<<<<< HEAD
        <router-link tag="li" to="#" active-class="active">Courses</router-link>
        <router-link tag="li" to="#" active-class="active"
          >Services</router-link
        >
        <router-link tag="li" to="#" active-class="active"
          >Destinations</router-link
        >
        <router-link tag="li" to="#" active-class="active"
=======
        <router-link tag="li" to="#" active-class="active"
          >Study Abroad</router-link
        >
        <router-link tag="li" to="/contact-us" active-class="active"
>>>>>>> f9cf2e5b292255489d7705d4bca65a237a12460b
          >Contact Us</router-link
        >
      </ul>
    </nav>
    <v-btn dark rounded>Apply Now</v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  .logo-div {
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      font-size: 15px;
      text-align: center;
      font-family: "Great Vibes", cursive;
<<<<<<< HEAD
      color: rgb(55, 231, 55);
=======
      color: rgb(78, 255, 117);
>>>>>>> f9cf2e5b292255489d7705d4bca65a237a12460b
      span {
        color: black;
        display: block;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
  .v-btn {
    background-color: red;
    font-size: 18px;
  }
}

nav li {
  list-style: none;
  display: inline-block;
  margin: 0 1rem;
  padding: 2rem 5px;
  font-family: "Oswald", Arial, Helvetica, sans-serif sans-serif;

  &:hover,
  &.active {
<<<<<<< HEAD
    color: rgb(55, 231, 55);
    border-top: 3px solid rgb(55, 231, 55);
=======
    color: rgb(78, 255, 117);
    border-top: 3px solid rgb(78, 255, 117);
>>>>>>> f9cf2e5b292255489d7705d4bca65a237a12460b
    cursor: pointer;
  }
}
</style>
