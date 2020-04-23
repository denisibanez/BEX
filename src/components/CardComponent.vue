<template>
  <div :class="[dynamicCardClass, 'aside-card--container']">
    <div class="aside-card-wrapper">
      <b-row class="no-wrap">
        <b-col  xl="3" v-for="(item, index) in numberCard" :key="index">
          <p class="card-number">{{ item }}</p>
        </b-col>
      </b-row>

      <b-row class="no-wrap card-info--wrapper">
        <b-col xl="8">
          <p>{{ nameCard }}</p>
        </b-col>

        <b-col xl="4">
          <p class="card-validate">
            <span
              v-for="(item, index) in validateCard" :key="index">
              {{ item }}
            </span>
          </p>
        </b-col>
      </b-row>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-component',

  data() {
    return {
      numberCard: ['****', '****', '****', '****'],
      nameCard: 'Nome do Titular',
      validateCard: ['00', '00'],
      dynamicCardClass: 'empty-card-front'
    }
  },

  created() {
    this.checkScreen()
  },

  methods: {
    checkScreen() {
      const width = screen.width
      if (width <= 1024) {
        this.dynamicCardClass = 'empty-card-front-reponsive'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-card--container {
  background-color: transparent;
  width: 100%;
  height: auto;

  &.empty-card-front {
    background-image: url('../assets/img/card-empty-front.png');
    min-width: 365px;
    min-height: 225px;
    padding: 30px 20px 0;
  }

  &.empty-card-front-reponsive {
    background-image: url('../assets/img/card-empty-front-mobile.png');
    max-width: 280px;
    max-height: 173px;
    padding: 30px 5px;
    margin:0 auto;
    position: relative;
    top: 30px;

    .card-number {
      letter-spacing: 1px;
    }
  }

  .aside-card-wrapper {
    margin-top: 80px;

    p {
      color:#ffffff;
      font-size:16px;
      text-transform: uppercase;
    }

    .card-number {
      letter-spacing: 6px;
    }

    .card-info--wrapper {
      margin-top: 15px;

      .card-validate {
        span {
          &:first-child {
            &:after {
              content: '/';
            }
          }
        }
      }
    }
  }
}

@media(max-width:1024px) {
  .aside-card--container { 
    min-width: auto;

    .aside-card-wrapper {
      padding: 5px;
      margin-top: 50px;
      .card-number {
        font-size:10px;
      }

      .card-info--wrapper {
        margin-top: 0;

        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>