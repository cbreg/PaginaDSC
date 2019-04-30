Vue.use(VueMaterial.default)
Vue.use(window.vuelidate.default)

var validationMixin = window.vuelidate.validationMixin

const { required, minLength, maxLength} = window.validators

new Vue({
  el: '#app',
  name: 'PersistentFull',
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
})

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}