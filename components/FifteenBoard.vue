<template lang="pug">
  .wrapper
    nav.menu
      .steps Ход:&nbsp;
        span(v-text="steps")
      .timer Время:&nbsp;
        span(v-text="getTime()")
    .board
      transition-group.grid(
        v-if="!completed"
        tag="ul"
        class="grid"
        name="list" )
        li(v-for="(num,i ) of state"
          :key="num"
          :class="{'item': true, 'hidden': !num }")
          button.chip(
            :style="{ disabled: completed }"
            class="button"
            @click="checkStep(i)")
            label(
              v-text="num")
      button(
        :style="{ disabled: !completed }"
        :class="{ overlay: true, 'overlay-hidden': !completed }"
        @click="shuffleState")
        | Сыграем еще?
</template>

<script>
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
      getTime () {
        let time = new Date(Date.UTC(0, 0, 0, 0, 0, 0))
        time.setSeconds(time.getSeconds() + this.timer)
        return new Intl.DateTimeFormat('ru-RU', {
          timeZone: 'Greenwich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }).format(new Date(time))
      },
      checkStep (i) {
        if (i !== this.empty() && this.inPlay(this.empty(), i, 4)) {
          this.nextStep(i)
          ++this.steps
          if (!this.timer) {
            this.timer = 1
            this.intervalUpdateTimer = setInterval(() => {
              this.timer++
            }, 1000)
          }
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
  @import url(https://fonts.googleapis.com/css?family=Lato:700);

  /* Стили доски*/

  .wrapper {
    border-radius: 1rem;
    font-family: 'Lato', sans-serif;
    padding: .5rem;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      font-size: 18px;
      font-family: inherit;
      cursor: pointer;
      outline: none;
      background: #ccd0d4;
      border: none;

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
      transition: color 300ms ease-out;
      text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px #fff;
      color: rgba(0, 0, 0, 0.4);
      margin-bottom: 1rem;

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

      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 4px;
        height: 100%;
        width: 100%;
        list-style: none;
        padding: .5rem;

        .item {
          user-select: none;
          cursor: pointer;
        }

        .hidden {
          visibility: hidden;
        }

        .chip {
          $size: 120px;
          $radius: $size * 0.688;
          height: $radius;
          width: $radius;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          filter: blur(1px);
          box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(235, 235, 235, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(186, 186, 186, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 96.32px;
          background: #ccd0d4;
          outline: none;

          label {
            transition: color 300ms ease-out;
            text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px #fff;
            text-align: center;
            position: absolute;
            font-weight: 700;
            font-size: 1.5rem;
            display: block;
            opacity: 0.9;
            height: 100%;
            width: 100%;
            color: rgba(0, 0, 0, 0.4);
            line-height: $size / 1.5
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
