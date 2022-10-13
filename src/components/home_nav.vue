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
        <router-link tag="li" to="/abroad" active-class="active"
          >Study Abroad</router-link
        >
        <router-link tag="li" to="/contact-us" active-class="active"
          >Contact Us</router-link
        >
      </ul>
    </nav>
    <div class="mobile-nav">
      <i class="bx bx-x bx-md" role="button"></i>

      <div class="nav-links">
        <router-link tag="li" to="/" exact-active-class="active"
          >Home</router-link
        >
        <router-link tag="li" to="/about" active-class="active"
          >About Us</router-link
        >
        <router-link tag="li" to="/abroad" active-class="active"
          >Study Abroad</router-link
        >
        <router-link tag="li" to="/contact-us" active-class="active"
          >Contact Us</router-link
        >
      </div>
    </div>
    <div class="hamburger-menu">
      <i class="bx bx-menu bx-md" role="button"></i>
    </div>

    <v-btn dark rounded to="/apply-now">Apply Now</v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-div {
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      font-size: 15px;
      text-align: center;
      font-family: "Great Vibes", cursive;
      color: rgb(78, 255, 117);
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

  .mobile-nav {
    background-color: rgb(1, 46, 1);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    // display: none;
    height: 100%;
    overflow: hidden;
    padding: 2rem 0;
    color: white;
    transition: height 0.5s ease;
    i {
      text-align: end;
      width: 100%;
    }
    .nav-links {
      margin-top: 3rem;
      li {
        list-style: none;
        padding: 1.5rem 0;
        text-align: center;
        color: white;
        &.active,
        &:hover {
          background: rgb(23, 85, 23);
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .header-nav {
    padding: 0;
  }
  .logo-div p {
    display: none;
  }
  .v-btn {
    display: none;
  }

  nav {
    display: none;
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
    color: rgb(78, 255, 117);
    border-top: 3px solid rgb(78, 255, 117);
    cursor: pointer;
  }
}
</style>
