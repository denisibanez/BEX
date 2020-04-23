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
              <b-col xl="12">
                <bradcrumb>
                </bradcrumb>
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
