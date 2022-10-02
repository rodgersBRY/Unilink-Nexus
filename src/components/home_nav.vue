<template>
  <div class="header-nav">
    <div class="logo-div">
      <img
        width="100px"
        :src="require('@/assets/logo.png')"
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
        <router-link tag="li" to="#" active-class="active">Courses</router-link>
        <router-link tag="li" to="#" active-class="active"
          >Services</router-link
        >
        <router-link tag="li" to="#" active-class="active"
          >Destinations</router-link
        >
        <router-link tag="li" to="#" active-class="active"
          >Contact Us</router-link
        >
      </ul>
    </nav>
    <v-btn dark rounded>Apply Now</v-btn>
  </div>
</template>

<style lang="scss" scoped>
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
      color: rgb(55, 231, 55);
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
    color: rgb(55, 231, 55);
    border-top: 3px solid rgb(55, 231, 55);
    cursor: pointer;
  }
}
</style>