<template>
  <div class="header-nav">
    <div class="logo-div">
      <img
        width="100px"
        src="../assets/logo.png"
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
        <router-link tag="li" to="#" active-class="active"
          >Study Abroad</router-link
        >
        <router-link tag="li" to="/contact-us" active-class="active"
          >Contact Us</router-link
        >
      </ul>
    </nav>
  </div>
</template>
  
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: white;
  .logo-div {
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      font-size: 15px;
      text-align: center;
      font-family: 'Great Vibes', cursive;
      color: rgb(78, 255, 117);
      span {
        color: white;
        display: block;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
}

nav li {
  list-style: none;
  display: inline-block;
  margin: 0 1rem;
  padding: 2rem 5px;
  &:hover,
  &.active {
    color: rgb(78, 255, 117);
    border-top: 3px solid rgb(78, 255, 117);
    cursor: pointer;
  }
}
</style>