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
                  Adicione um novo cartão de crédito
                </p>

                <card-component>
                </card-component>
              </b-col>
            </div>
          </div>
        </b-col>
      
        <b-col xl="9">
          <div class="content-body-wrapper">
            <b-row class="d-none d-xl-block">
              <b-col offset-xl="2" xl="6">
                <bradcrumb>
                </bradcrumb>
                
                <div class="form-container">
                  <b-row>
                    <b-col md="12">
                      <div class="input-group mb-5">
                        <input 
                          type="text"
                          class="form-control reset"
                          placeholder="Número do cartão" 
                          aria-label="cardNumber" />
                      </div>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <div class="input-group mb-5">
                        <input 
                          type="text"
                          class="form-control reset"
                          placeholder="Nome (Igual ao do cartão)" 
                          aria-label="cardName" />
                      </div>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="12" md="6">
                      <div class="input-group mb-5">
                        <input 
                          type="text"
                          class="form-control reset"
                          placeholder="Validade" 
                          aria-label="cardValidate" />
                      </div>
                    </b-col>

                    <b-col sm="12" md="6">
                      <div class="input-group mb-5">
                        <input 
                          type="text"
                          class="form-control reset"
                          placeholder="CVV" 
                          aria-label="cardSecurity" />
                           <div class="icon-wrapper">
                              <div class="info-icon">
                                <b-icon-info></b-icon-info>
                              </div>
                          </div>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <div>
                        <b-form-select
                          class="select-default mb-5 reset"
                          v-model="form.selected"
                          :options="select.options"
                        ></b-form-select>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-button class="btn-next">Continuar</b-button>
                    </b-col>
                  </b-row>
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
import CardComponent from '@/components/CardComponent'
import Bradcrumb from '@/components/Bradcrumb'

export default {
  name: 'Home',

  components: {
    CardComponent,
    Bradcrumb
  },

  data () {
    return {
      form: {
        selected: null
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
        ]
      }
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
      .icon-wrapper {
        position: absolute;
        right: 0;
        .info-icon  {
          background-color: #C9C9C9;
          width: 15px;
          height: 15px;
          border-radius: 50px;
          position: relative;
          top: 10px;
          right: 15px;

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
