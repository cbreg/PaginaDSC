Vue.use(VueMaterial.default)
Vue.use(window.vuelidate.default)

var validationMixin = window.vuelidate.validationMixin

const { required, minLength, maxLength} = window.validators

new Vue({
  el: '#app',
  name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        user: null,
        password: null,
        remember: false
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        user: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.user = null
        this.form.password = null
      },
      saveUser () {
        this.sending = true
        window.location.href = 'main.html'
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.user} ${this.form.password}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
})

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}