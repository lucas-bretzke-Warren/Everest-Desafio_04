import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createServer, Model } from 'miragejs'

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faXmark, faAngleDown, faArrowLeft, faLock, faEye, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope, faWhatsapp, faXmark, faAngleDown, faArrowLeft, faLock, faEye ,faAnglesLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)


createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "935.252.940-50", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Augusto De Lima", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Felipe de souza", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Deliana de Quadros", cpf: "935.252.940-50", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Gabriel Peixoto", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Sabrina Bretzke", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Rodrigo Willian", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Soeli Coelho", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Fabiana fogueiro", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustinho carrara", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Vitor alves", cpf: "935.252.940-50", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Maria aparecida", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Adileine zimerman", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Claudinei borges", cpf: "935.252.940-50", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Maria Cicilia", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Geni fonseca", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "935.252.940-50", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Augusto De Lima", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Felipe de souza", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Willian Silveira", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Mariana Windzk", cpf: "567.170.340-92", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
  },
  routes() {
    this.namespace = 'api'

    this.get('/users', (schema, /*request*/) => {
      return schema.users.all()
    }, { timing: 2000 })

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)

      return schema.users.create(user)
    })

    this.get('/users/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let user = schema.users.find(id)

      return user.update(data)
    }, { timing: 2000 })
  }
})


// Vue.config.productionTip = false
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')