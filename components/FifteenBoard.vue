<template lang="pug">
  .wrapper
    nav.menu
      .steps Ход: {{steps}}
      .timer Время: {{timer}}
    .board
      transition-group.grid(tag="ul" name="list" class="grid")
        li(v-for="num of state" :key="num")
          .chip-wrap
            button.chip(v-text="num")
</template>

<script>
  const FIFTEEN = Array.from({ length: 15 }, (e, i) => i + 1)
  FIFTEEN.push(false)
  export default {
    name: 'FifteenBoard',
    data () {
      return {
        state: null,
        steps: 0,
        timer: null,
        intervalUpdateTimer: null,
      }
    },
    beforeMount () {
      this.state = JSON.parse(JSON.stringify(FIFTEEN))
      this.intervalUpdateTimer = setInterval(() => {
        this.timer++
      }, 1000)
    },
  }
</script>

<style scoped
       lang="scss">
  /* Головные стили*/
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

  /* Стили доски*/

  .wrapper {
    padding: .5rem;

    .menu {
      display: flex;
      justify-content: space-around;
      padding: .8rem;
      font-size: 1.5rem;
    }

    .board {
      position: relative;
      width: 95vmin;
      height: 95vmin;
      max-width: 500px;
      max-height: 500px;
      border-radius: .5rem;
      list-style: none;
      overflow: hidden;

      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 4px;
        height: 100%;
        width: 100%;
        list-style: none;

        .chip-wrap {
          height: 100px;
          width: 100px;
          padding: 4px;
          border-radius: 50%;
          background: linear-gradient(90deg, rgba(3, 1, 22, 1) 0%, rgba(130, 130, 135, 1) 50%, rgba(3, 1, 22, 1) 100%);

          .chip {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            border: 4px solid #2b2b2b;
            font-size: 24px;
            font-family: inherit;
            background: black;
            cursor: pointer;
            position: relative;
            color: white;
            font-weight: bold;
            overflow: hidden;
            outline: none;
          }
        }
      }
    }
  }

  /*Анимация*/

  .list-move {
    transition: transform 0.4s ease;
  }
</style>
