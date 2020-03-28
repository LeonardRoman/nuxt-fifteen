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
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>

