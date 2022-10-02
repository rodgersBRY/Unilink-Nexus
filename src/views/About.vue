<template>
  <div class="about">
    <header>
      <sec-nav />
      <div class="about-us">
        <p>Who We Are</p>
        <p class="h1">ABOUT US</p>
        <div>
          <router-link tag="a" to="/">Home</router-link>
          <i class="bx bx-right-arrow-alt bx-sm"></i>
          About Us
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  background-image: url("../assets/about-background.jpg");
  background-size: cover;
  color: white;
  height: 80vh;
  .about-us {
    text-align: center;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
      font-size: 30px;
    }
    .h1 {
      font-size: 70px;
    }
    div {
      margin-top: 2rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline;
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
