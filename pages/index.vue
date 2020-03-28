<template lang="pug">
  section.container
    FifteenBoard
</template>

<script>
  import FifteenBoard from '~/components/FifteenBoard.vue'

  export default {
    components: {
      FifteenBoard
    }
  }
</script>

<style lang="scss">
  \:root {
    box-sizing: border-box
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  button::-moz-focus-inner {
    border: none;
  }

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #ccd0d4;
  }

</style>

