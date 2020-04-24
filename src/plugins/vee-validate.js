import Vue from 'vue'
import { localize, ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import en from 'vee-validate/dist/locale/pt_BR.json'
import { required } from 'vee-validate/dist/rules'

extend('required', required)

extend('namePerson', {
  validate: function ($event) {
    const regex = /^[A-z\-'ÀÁÂÃÇÈÉÊÌÍàáâãçèéêìíÒÓÔÕÙÚòóôõùú]{2,50}(?: [A-z\-'ÀÁÂÃÇÈÉÊÌÍàáâãçèéêìíÒÓÔÕÙÚòóôõùú]{1,50})+ ?$/

    return regex.test($event)
  },
  message: 'Insira o nome completo'
})

extend('minCvv', {
  validate: function ($event) {
    if($event.length < 3) return false
    else return true
  },
  message: 'Código inválido'
})

extend('minData', {
  validate: function ($event) {
    if($event.length < 5) return false
    else return true
  },
  message: 'Código inválido'
})

extend('checkCard', {
  validate: function ($event) {
    var c = $event.replace(/[ ]/g, '')
    // console.log(c)
    var cl = parseInt(c.substr(c.length - 1))
    c = c.slice(0, -1)
    c = c.split('').reverse().join('')
    c = c.split('')
    var a = 2
    var cm = []
    for (var i = 0; i < c.length; i++) {
      if (a % 2 == 0) {
        var t = c[i] * 2
        if (t > 9) { t = (t - 9) }
        cm.push(t)
      } else { cm.push(parseInt(c[i])) }
      a++
    }
    var f = 0
    for (i = 0; i < cm.length; i++) { f += cm[i] }
    f = f + cl
    if (f % 10 == 0) { return true } else { return false }
  },
  message: 'Número do cartão inválido'
})

localize({
  en: {
    messages: {
      required: 'O campo é obrigatório'
    }
  }
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)