<template>
  <div class="header-nav">
    <img
      width="100px"
      :src="require('@/assets/logo.png')"
      alt="unilink nexus, study abroad, study in kenya"
    />
    <nav>
      <ul>
        <router-link tag="li" to="/" exact-active-class="active"
          >Home</router-link
        >
        <router-link tag="li" to="/about" active-class="active"
          >About Us</router-link
        >
        <router-link tag="li" to="#" active-class="active"
          >Courses</router-link
        >
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
    color: green;
    border-top: 3px solid green;
    cursor: pointer;
  }
}
</style>