Vue.use(VueMaterial.default)
Vue.use(window.vuelidate.default)

var validationMixin = window.vuelidate.validationMixin

const { required, minLength, maxLength } = window.validators

const toLower = text => {
    return text.toString().toLowerCase()
}
var conteudos = localStorage.getItem("conteudos") ? JSON.parse(localStorage.getItem("conteudos")) : [];

new Vue({
    el: '#app',
    name: 'Temporary',
    mixins: [validationMixin],
    data: () => ({
        showNavigation: false,
        expandContents: false,
        expandCont: false,
        userSaved: false,
        sending: false,
        lastUser: null,
        type_content: "Pergunta",
        search: null,
        searched: [],
        form: {
            type_content: "Pergunta",
            title: null,
            description: null
        },
        contents: conteudos

    }),
    validations: {
        form: {
            description: {
                required
            },
            title: {
                required
            }
        }
    },
    methods: {
        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm() {
            this.$v.$reset()
            this.form.description = null
            this.form.title = null
        },
        saveContent() {

            this.sending = true
            var conteudo = {
                user: "carol",
                type_content: getCheckedValueRadio('type_content'),
                title: this.form.title,
                description: this.form.description
            };
            setConteudo(conteudo);
            location.reload();
            this.sending = false;

        },
        validateContent() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveContent()
            }
        },
        newUser() {
            window.alert('Noop')
        },
    },
    created() {
        this.searched = this.contents
    }
})

function verificarLogin() {
    if (getCookie('logado') != 'true' && localStorage.getItem('remember') != 'true') {
        window.location.href = 'login.html'
    }
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function setConteudo(conteudo) {
    var stored = JSON.parse(localStorage.getItem("conteudos"));
    var conteudo_local = [];

    if (stored) {
        stored.push(conteudo);
        conteudo_local = stored;
    } else {
        conteudo_local = [conteudo];
    }

    localStorage.setItem("conteudos", JSON.stringify(conteudo_local));
}

function getCheckedValueRadio(elementName) {
    var elements = document.getElementsByName(elementName);
    if (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].parentNode.parentNode.parentNode.classList.contains('md-checked')) {
                return elements[i].value;
            }
        }
    }
    return "";
}