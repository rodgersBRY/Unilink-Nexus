<template>
  <div id="app">
    <router-view />
    <footer>
      <div class="logo">
        <img
          width="100px"
          :src="require('@/assets/logo.png')"
          alt="unilink nexus, study abroad"
        />
      </div>
      <p>&copy; {{ year }} All Rights Reserved</p>
      <div class="social-media">
        <i class="bx bxl-facebook bx-sm"></i>
        <i class="bx bxl-instagram bx-sm"></i>
        <i class="bx bxl-twitter bx-sm"></i>
        <i class="bx bxl-linkedin bx-sm"></i>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
footer {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  p {
    font-size: 14px;
    color: grey;
  }
  .social-media i {
    margin: 0 10px;
    background: rgba(138, 251, 255, 0.2);
    border-radius: 50%;
    padding: 7px;
  }
}
</style>
