<template>
  <div id="header-nav">
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

    <div id="mobile-nav">
      <i
        id="close-mobile-nav"
        class="bx bx-x bx-md"
        role="button"
        @click.prevent="closeNav"
      ></i>

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
        <router-link tag="li" to="/apply-now" class="mobile-apply-btn"
          >Apply Now</router-link
        >
      </div>
    </div>

    <div class="hamburger-menu">
      <i class="bx bx-menu bx-md" role="button" @click.prevent="openNav"></i>
    </div>

    <v-btn dark rounded to="/apply-now">Apply Now</v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    var prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header-nav").style.top = "0";
      } else {
        document.getElementById("header-nav").style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    };
  },

  methods: {
    openNav() {
      document.getElementById("mobile-nav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("mobile-nav").style.width = "0%";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

#header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: white;
  top: 0;
  z-index: 1;
  width: 100%;
  transition: top 0.5s;
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
}

#mobile-nav {
  height: 100%;
  width: 0;
  background-color: rgba(3, 19, 3, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  overflow-x: hidden;
  z-index: 1;
  padding: 2rem 0;
  color: white;
  transition: width 0.5s ease;
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
    .mobile-apply-btn {
      margin: 5rem auto 0 auto;
      background: red;
      width: 60%;
    }
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

@media screen and (min-width: 900px) {
  #header-nav {
    font-size: 14px;
    .logo-div p > span {
      font-size: 14px;
    }
    .v-btn {
      font-size: 14px;
      margin-right: 10px;
    }

    .hamburger-menu {
      display: none;
    }
  }
}

@media screen and (max-width: 900px) {
  #header-nav {
    padding: 0 5px;
    .logo-div p,
    .v-btn,
    nav {
      display: none;
    }
  }
}
</style>
