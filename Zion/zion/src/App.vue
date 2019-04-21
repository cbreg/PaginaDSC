<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <img src="./assets/img/logo_preto.png">
      </div>
      <div class="form">
        <md-field>
          <label class="md-accent">Usuário</label>
          <md-input v-model="login.user" autofocus></md-input>
        </md-field>
        <md-field md-has-password>
          <label>Senha</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      <md-checkbox v-model="array" value="1">Lembrar senha</md-checkbox>
      </div>
      <label>Essa é uma plataforma de apoio a células 
                          em faculdades e escolas.
                          Aqui você pode compartilhar e 
                          consultar conteúdos excluisivos
                          para ajudar em sua célula. 
                          Crie uma conta e aproveite!
        </label>
      <div class="actions md-layout md-alignment-center-space-between">
        <a href="/resetpassword">CRIAR CONTA</a>
        <md-button class="md-raised md-accent" @click="auth">ENTRAR</md-button>
      </div>
      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>
    </md-content>
    <div class="background" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(black, A200), 
  accent: md-get-palette-color(deeporange, 500) 
));

@import "~vue-material/dist/theme/all";
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    background-color: black; 
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
