<template lang="pug">
  .wrapper
    nav.menu
      .steps Ход:
        span(v-text="steps")
      .timer Время:
        span(v-text="timer")
    .board
      transition-group.grid(
        v-if="!completed"
        tag="ul"
        class="grid"
        name="list" )
        li(v-for="(num,i ) of state"
          :key="num"
          :class="{'item': true, 'hidden': !num }")
          .chip-wrap
            button.chip(
              :style="{ disabled: completed }"
              class="button"
              @click="checkStep(i)"
              v-text="num")
      button(
        :style="{ disabled: !completed }"
        :class="{ overlay: true, 'overlay-hidden': !completed }"
        @click="shuffleState")
        | Сыграем еще?
</template>

<script>
  // const FIFTEEN = Array.from({ length: 15 }, (e, i) => i + 1)
  // FIFTEEN.push(false)

  export default {
    name: 'FifteenBoard',
    data () {
      return {
        fifteen: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          false
        ],
        state: null,
        steps: 0,
        timer: null,
        intervalUpdateTimer: null,
      }
    },
    beforeMount () {
      this.state = JSON.parse(JSON.stringify(this.fifteen))
      this.shuffleState()
    },
    computed: {
      completed () {
        return JSON.stringify(this.fifteen) === JSON.stringify(this.state)
      }
    },
    methods: {
      empty () {
        return this.state.indexOf(false)
      },
      nextStep (i) {
        let updated = [...this.state]
        updated[this.empty()] = this.state[i]
        updated[i] = false
        this.state = updated
      },
      shuffleState () {
        this.state.sort(() => Math.random() - 0.5)
      },
      inPlay (emptyIndex, tileIndex, width) {
        return (emptyIndex % width !== 0 && emptyIndex - 1 === tileIndex) ||
          (emptyIndex % width !== width - 1 && emptyIndex + 1 === tileIndex) ||
          emptyIndex - width === tileIndex ||
          emptyIndex + width === tileIndex
      },
      checkStep (i) {
        if (i !== this.empty() && this.inPlay(this.empty(), i, 4)) {
          this.nextStep(i)
          ++this.steps
          if (!this.timer) this.timer = 0
          this.intervalUpdateTimer = setInterval(() => {
            this.timer++
          }, 1000)
        }
      }
    },
    beforeDestroy () {
      clearInterval(this.intervalUpdateTimer)
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

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      border: 1px solid black;
      /*linear-gradient(90deg, rgba(3, 1, 22, 1) 0%, rgba(130, 130, 135, 1) 50%, rgba(3, 1, 22, 1) 100%);*/
      font-size: 18px;
      font-family: inherit;
      cursor: pointer;
      transition: opacity 0.2s ease, visibility 0s linear;
    }

    .overlay-hidden {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease, visibility 0s linear 0.2s;
    }

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: .8rem;
      font-size: 1.5rem;
      width: 100%;

      .timer, .step {
        width: 30%;
        padding-right: 4em;
      }

      span {
        text-align: right;
      }
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

        .item {
          user-select: none;
          cursor: pointer;
          z-index: 10;
        }

        .hidden {
          visibility: hidden;
        }

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
