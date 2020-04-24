<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col md="12" xl="3">
          <div class="row aside">
            <div class="aside-info--wrapper">
              <b-col offset-xl="1" xl="10">
                <a class="aside-link">
                  <span>&#60;</span> Alterar forma de pagamento
                </a>
                <p class="aside-text">
                  Adicione um novo <br>cartão de crédito
                </p>

                <card-component>
                </card-component>
              </b-col>
            </div>
          </div>
        </b-col>
      
        <b-col xl="9">
          <div class="content-body-wrapper">
            <b-row>
              <b-col offset-xl="2" xl="6">
                <bradcrumb class="d-none d-xl-block">
                </bradcrumb>
                
                <div class="form-container">
                  <ValidationObserver
                    v-slot="{ valid }"
                    ref="observer"
                    tag="form"
                    @submit.prevent="submit()"
                  >
                    <b-row>
                      <b-col md="12">
                        <div class="input-group mb-5 input-container">
                          <ValidationProvider
                            v-slot="{errors}"
                            :rules="'checkCard'"
                            name="cardNumber"
                          >
                            <input 
                              type="text"
                              id="cardNumber"
                              pattern=".+"
                              required                                                    
                              aria-label="cardNumber"
                              v-model="form.cardNumber"
                              @change="changeInput($event)"
                              :class="{ 'error-text' : errors[0] }"
                              v-mask="'#### #### #### ####'" />
                            <label :class="[{ 'error-text' : errors[0] }, 'label']" for="cardNumber">Número do cartão</label>
                            <span class="error">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                            
                        </div>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col md="12">
                        <div class="input-group mb-5">
                          <ValidationProvider
                            v-slot="{errors}"
                            :rules="'namePerson'"
                            name="cardName"
                          >
                            <input 
                              type="text"
                              id="cardName"
                              pattern=".+"
                              required
                              :class="{ 'error-text' : errors[0] }"
                              v-model="form.cardName"
                              @change="changeInput($event)"
                              aria-label="cardName" />
                            <label :class="[{ 'error-text' : errors[0] }, 'label']" for="cardName">Nome (Igual ao cartão)</label>
                            <span class="error">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="12" md="6">
                        <div class="input-group mb-5 input-container">
                          <ValidationProvider
                            v-slot="{errors}"
                            :rules="'required|minData'"
                            name="cardValidate"
                          >
                            <input 
                              type="text"
                              id="cardValidate"
                              pattern=".+"
                              required
                              v-model="form.cardValidate"
                              :class="{ 'error-text' : errors[0] }"
                              @change="changeInput($event)"
                              aria-label="cardValidate"
                              v-mask="'##/##'"  />
                            <label :class="[{ 'error-text' : errors[0] }, 'label']" for="cardValidate">Validade</label>
                            <span class="error">
                              {{ errors[0] }}
                            </span>
                          </ValidationProvider>
                        </div>
                      </b-col>

                      <b-col sm="12" md="6">
                        <div class="input-group mb-5 input-container">
                          <ValidationProvider
                            v-slot="{errors}"
                            :rules="'required|minCvv'"
                            name="cvv"
                          >
                            <input 
                              type="text"
                              id="cvv"
                              pattern=".+"
                              required
                              v-model="form.cardSecurity"
                              aria-label="cardSecurity"
                              :class="{ 'error-text' : errors[0] }"
                              @change="changeInput($event)"
                              v-mask="'###'"  />

                              <label :class="[{ 'error-text' : errors[0] }, 'label']" for="cvv">CVV</label>

                              <div :class="[{ 'error-icon' : errors[0] }, 'icon-wrapper']">
                                <div class="info-icon">
                                  <b-icon-info></b-icon-info>
                                </div>
                              </div>

                              <span class="error">
                                {{ errors[0] }}
                              </span>
                            </ValidationProvider>
                        </div>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col md="12">
                        <div>
                          <ValidationProvider
                            v-slot="{errors}"
                            :rules="'required'"
                            name="cvv"
                          >
                            <b-form-select
                              :class="[{ 'active' : select.selected }, 'select-default mb-5 reset']"
                              v-model="select.selected"
                              :options="select.options"
                            ></b-form-select>
                          </ValidationProvider>
                        </div>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col md="12">
                        <b-button class="btn-next" :disabled="!valid" @click="submit">Continuar</b-button>
                      </b-col>
                    </b-row>
                  </ValidationObserver>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import { mapGetters, mapActions } from 'vuex'
import PagarService from '@/services/pagar'
import CardComponent from '@/components/CardComponent'
import Bradcrumb from '@/components/Bradcrumb'

export default {
  name: 'Home',

  components: {
    CardComponent,
    Bradcrumb
  },
  
  directives: {mask},

  data () {
    return {
      form: {
        cardNumber: null,
        cardName: null,
        cardValidate: null,
        cardSecurity: null,
      },
      select: {
        options: [
          { value: null, text: 'Número de parcelas'},
          { value: 1, text: '1'},
          { value: 2, text: '2'},
          { value: 3, text: '3'},
          { value: 4, text: '4'},
          { value: 5, text: '5'},
          { value: 6, text: '6'},
          { value: 7, text: '7'},
          { value: 8, text: '8'},
          { value: 9, text: '9'},
          { value: 10, text: '10'},
          { value: 11, text: '11'},
          { value: 12, text: '12'},
        ],
        selected: null,
      },
      PagarService: null,
    }
  },

  computed: {
    ...mapGetters({
      cardNumber: 'cardNumber',
      cardName: 'cardName',
      cardValidate: 'cardValidate',
      cardSecurity: 'cardSecurity',
    }),
  },

  created() {
    this.PagarService = new PagarService()
  },

  methods: {
    ...mapActions({
      updateForm: 'updateForm',
      clearForm: 'clearForm'
    }),

    async submit() {
      const isValid = await this.$refs.observer.validate()
      const obj = {
        cardNumber: this.cardNumber.replace(/\s/g, ''),
        cardName: this.cardName,
        cardValidate: this.cardValidate,
        cardSecurity: this.cardSecurity,
        parcel: this.select.selected
      }
      if (isValid) {
        alert('Dados enviados ao back-end!')
        this.PagarService.pagar(obj).then((response) => {
        }).catch((error) => {
          console.log(error)
        })
        this.clearForm()
        this.form = {
          cardNumber: null,
          cardName: null,
          cardValidate: null,
          cardSecurity: null,
        }
        this.select.selected = null
      }
    },

    changeInput($event) {
      let obj = { key: $event.currentTarget.ariaLabel, value: $event.currentTarget.value}
      this.updateForm(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .aside {
    background-color: #DE4B4B;
    min-height: 100vh;
    padding-top: 50px;

    .aside-link {
      color: #ffffff;
      font-size: 13px;
      cursor: pointer;
    }

    .aside-text {
      color: #ffffff;
      font-size: 20px;
      margin-top:60px;
      margin-bottom:30px;
      padding: 15px;
      display: flex;
      line-height: 21px;

      &:before {
        content:url('../assets/img/card-icon.png');
        right: 15px;
        position: relative;
        top:-5px;
      }
    }
  }

  .content-body-wrapper {
    margin: 50px;

    .form-container {
      position: relative;
      margin-top: 50px;
      .icon-wrapper {
        position: absolute;
        right: 0;
        bottom: 10px;

        &.error-icon {
          bottom: 32px;
        }

        .info-icon  {
          background-color: #C9C9C9;
          width: 15px;
          height: 15px;
          border-radius: 50px;

          svg {
            vertical-align: top;
          }
        }
      }
    }
  }
}

@media(max-width:1024px) {
  .home {
    .aside { 
      min-width: auto;
      min-height: auto;
      
      .aside-info--wrapper {
          text-align: center;
          margin: 0 auto;

          .aside-text {
            padding: 0 60px;
            margin-bottom: 0;
            margin-top: 40px;
          }
      }
    }
  }
}
</style>
