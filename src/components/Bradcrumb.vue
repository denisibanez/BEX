<template>
  <div>
    <ul class="bradcrumb">
      <li v-for="(item, index) in bradcrumb" :key="index">
        <strong>
          <span v-if="!item.active">
            {{ index + 1 }}
          </span>
          <span v-else class="bradcrumb-active">
            <b-icon-check></b-icon-check>
          </span>
        </strong>
        <p>
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'bradcrumb',

  data() {
    return {
      bradcrumb: [
        { id: 0, name: 'Carrinho', active: true },
        { id: 1, name: 'Pagamento', active: false },
        { id: 2, name: 'Confirmação', active: false },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bradcrumb {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  
  li {
    padding: 0 15px;
    display: flex;
    
    &:first-child {
      padding-left: 0;
    }

    span {
      border: 1px solid #DE4B4B;
      width: 16px;
      display: block;
      height: 16px;
      border-radius: 50%;
      position: relative;
      top: 3px;
      right: 5px;
      font-size: 10px;
      padding: 0 4px;
      color: #de4b4b;
      
      &.bradcrumb-active {
        padding: 0 2px;
        font-weight: bold;
      }
    }

    p {
      color:#DE4B4B;
      font-size: 13px;
      
      &:after {
        content: '>';
        position: relative;
        left:10px;
      }
    }

    &:last-child {
      p {
        &:after {
          content: '';
        }
      }
    }
  }
}
</style>