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
        usuario: null,
        senha: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        usuario: {
          required,
          minLength: minLength(3)
        },
        senha: {
          required,
          minLength: minLength(3)
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
        this.form.usuario = null
        this.form.senha = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.usuario} ${this.form.senha}`
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