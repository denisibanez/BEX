<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  .no-wrap {
    flex-wrap: nowrap;
  }

  .form-control, .select-default {
    &.reset {
      border-left: 0;
      border-right: 0;
      border-top:0;
      border-radius: 0;
      
      &::placeholder, &:-ms-input-placeholder, &::-ms-input-placeholder {
        color: #C9C9C9 !important;
      }
      
      &:active, &:focus, &:hover {
        outline: none !important;
        box-shadow: none;
      }
    }
  }

  .btn-next {
    background-color: #DE4B4B;
    text-transform: uppercase;
    border-radius: 10px;
    border: 0;
    min-width: 200px;
    min-height: 50px;
    float: right;

    &:focus, &:active, &:hover {
      outline: none !important;
      box-shadow: none;
    }
  }
}
</style>
