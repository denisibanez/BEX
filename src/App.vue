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

  .input-group {
    span {
      width: 100%;
    }
  }

  .select-default {
    &.reset {
      border-left: 0;
      border-right: 0;
      border-top:0;
      border-radius: 0;
      transition: .2s ease-in-out;
      color: #c9c9c9;
      &::placeholder, &:-ms-input-placeholder, &::-ms-input-placeholder {
        color: #C9C9C9 !important;
      }
      
      &:active, &:focus, &:hover {
        outline: none !important;
        box-shadow: none;
      }

      &.active {
        border-bottom: 2px solid #26a69a;

      }
    }
  }

  .input-container {
    position: relative;
  }

  input {
    border: 0;
    border-bottom: 1px solid #C9C9C9;
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    width: 100%;
  }

  label {
    top: 0;
    left: 0; right: 0;
    color: #C9C9C9;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }

  input,
  label {
    width: 100%;
    font-size: 1rem;
  }

  input:valid,
  input:focus {
    border-bottom: 2px solid #26a69a; 
    &.error-text {
      border-bottom: 2px solid #EB5757;
      color: #EB5757;
    }
  }

  input:valid + label,
  input:focus + label {
    color: #26a69a;
    font-size: 13px;
    top: -30px;
    pointer-events: none;

    &.error-text {
      color: #EB5757;
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

  .error {
    color: #EB5757;
    font-size: 13px;
  }

  @media(max-width:1024px) {
    .btn-next {
      width: 100px;
    }
  }
}
</style>
