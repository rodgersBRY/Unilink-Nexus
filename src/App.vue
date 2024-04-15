<template>
  <div id="app">
    <router-view />
    <footer>
      <div class="logo">
        <img
          width="200px"
          :src="require('@/assets/unilink_logo.png')"
          alt="unilink nexus, study abroad"
        />
      </div>
      <p>
        &copy; {{ year }} All Rights Reserved <br />
        Developed by
        <span><a href="https://mawira.netlify.app" target="_blank">Mawira Corp.</a></span>
      </p>
      <div class="social-media">
        <v-btn
          icon
          href="https://facebook.com/profile.php?id=100076369803778"
          target="_blank"
          ><i class="bx bxl-facebook bx-sm"></i
        ></v-btn>
        <v-btn icon href="https://instagram.com/unilink_nexus_international?igshid=YmMyMTA2M2Y=" target="_blank"><i class="bx bxl-instagram bx-sm"></i></v-btn>
      </div>
    </footer>
    <div class="whatsapp-btn" @click="openWhatsapp">
      <img class="whatsapp-logo" :src="require('@/assets/whatsapp_logo.png')" alt="whatsapp chat">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },

  methods: {
    openWhatsapp() {
      window.open("https://wa.me/25766518377", "_blank")
    }
  }
};
</script>

<style lang="scss">
:root {
  --main-color: #ec6a2a;
  --secondary-color: rgb(7, 98, 165);
  --navigation-color: rgba(0, 7, 12, 0.9);
  --input-background: rgb(239, 243, 251);
  --fieldset-background: rgb(201, 223, 239);
}

.whatsapp-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  .whatsapp-logo {
    width: 80px;
    &:hover {
      cursor: pointer;
      
    }
  }
}

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
    text-align: center;
    a {
      text-decoration: none;
      color: var(--main-color);
    }
  }
  .social-media .v-btn {
    margin: 0 10px;
    background: rgba(138, 206, 255, 0.2);
    border-radius: 50%;
    padding: 7px;
  }
}

// mobile device
@media screen and (max-width: 600px) {
  footer {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    p {
      margin-top: 1rem;
    }
    .social-media {
      display: none;
    }
  }
}
</style>
