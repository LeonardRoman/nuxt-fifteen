(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(t,e,n){var content=n(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("33111365",content,!0,{sourceMap:!1})},150:function(t,e,n){var content=n(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("2e107364",content,!0,{sourceMap:!1})},151:function(t,e,n){"use strict";var r=n(149);n.n(r).a},152:function(t,e,n){(e=n(73)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lato:700);"]),e.push([t.i,".wrapper[data-v-4f97cce3]{border-radius:1rem;font-family:Lato,sans-serif;padding:.5rem}.wrapper .overlay[data-v-4f97cce3]{position:absolute;top:0;left:0;height:100%;width:100%;font-size:18px;font-family:inherit;cursor:pointer;outline:none;background:#ccd0d4;border:none}.wrapper .overlay-hidden[data-v-4f97cce3]{opacity:0;visibility:hidden;transition:opacity .2s ease,visibility 0s linear .2s}.wrapper .menu[data-v-4f97cce3]{display:flex;justify-content:space-between;align-items:flex-start;padding:.8rem;font-size:1.5rem;width:100%;transition:color .3s ease-out;text-shadow:1px 1px 3px #ccd0d4,0 0 0 rgba(0,0,0,.8),1px 1px 4px #fff;color:rgba(0,0,0,.4);margin-bottom:1rem}.wrapper .menu .step[data-v-4f97cce3],.wrapper .menu .timer[data-v-4f97cce3]{width:30%;padding-right:4em}.wrapper .menu span[data-v-4f97cce3]{text-align:right}.wrapper .board[data-v-4f97cce3]{position:relative;width:95vmin;height:95vmin;max-width:500px;max-height:500px;border-radius:.5rem;list-style:none}.wrapper .board .grid[data-v-4f97cce3]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:4px;height:100%;width:100%;list-style:none;padding:.5rem}.wrapper .board .grid .item[data-v-4f97cce3]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wrapper .board .grid .hidden[data-v-4f97cce3]{visibility:hidden}.wrapper .board .grid .chip[data-v-4f97cce3]:hover{cursor:pointer}.wrapper .board .grid .chip[data-v-4f97cce3]{height:82.56px;width:82.56px;display:flex;align-items:center;justify-content:center;position:relative;-webkit-filter:blur(1px);filter:blur(1px);box-shadow:0 15px 25px -4px rgba(0,0,0,.5),inset 0 -3px 4px -1px rgba(0,0,0,.2),0 -10px 15px -1px hsla(0,0%,92.2%,.6),inset 0 3px 4px -1px hsla(0,0%,100%,.2),inset 0 0 5px 1px hsla(0,0%,72.9%,.8),inset 0 20px 30px 0 hsla(0,0%,100%,.2);border:none;border-radius:96.32px;background:#ccd0d4;outline:none}.wrapper .board .grid .chip label[data-v-4f97cce3]{transition:color .3s ease-out;text-shadow:1px 1px 3px #ccd0d4,0 0 0 rgba(0,0,0,.8),1px 1px 4px #fff;text-align:center;position:absolute;font-weight:700;font-size:1.5rem;display:block;opacity:.9;height:100%;width:100%;color:rgba(0,0,0,.4);line-height:80px}.list-move[data-v-4f97cce3]{transition:transform .4s ease}",""]),t.exports=e},153:function(t,e,n){"use strict";var r=n(150);n.n(r).a},154:function(t,e,n){(e=n(73)(!1)).push([t.i,"\\:root{box-sizing:border-box}*,:after,:before{box-sizing:inherit;margin:0;padding:0}button::-moz-focus-inner{border:none}.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;background:#ccd0d4}",""]),t.exports=e},155:function(t,e,n){"use strict";n.r(e);var r=n(70);var o=n(99);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l={name:"FifteenBoard",data:function(){return{fifteen:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,!1],state:null,steps:0,timer:null,intervalUpdateTimer:null}},beforeMount:function(){this.state=JSON.parse(JSON.stringify(this.fifteen)),this.shuffleState()},computed:{completed:function(){return JSON.stringify(this.fifteen)===JSON.stringify(this.state)}},methods:{empty:function(){return this.state.indexOf(!1)},nextStep:function(i){var t=c(this.state);t[this.empty()]=this.state[i],t[i]=!1,this.state=t},shuffleState:function(){this.state.sort((function(){return Math.random()-.5})),this.timer=null,clearInterval(this.intervalUpdateTimer)},inPlay:function(t,e,n){return t%n!=0&&t-1===e||t%n!=n-1&&t+1===e||t-n===e||t+n===e},getTime:function(){var time=new Date(Date.UTC(0,0,0,0,0,0));return time.setSeconds(time.getSeconds()+this.timer),new Intl.DateTimeFormat("ru-RU",{timeZone:"Greenwich",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date(time))},checkStep:function(i){var t=this;i!==this.empty()&&this.inPlay(this.empty(),i,4)&&(this.nextStep(i),++this.steps,this.timer||(this.timer=1,this.intervalUpdateTimer=setInterval((function(){t.timer++}),1e3)))}},beforeDestroy:function(){clearInterval(this.intervalUpdateTimer)}},d=(n(151),n(24)),f={components:{FifteenBoard:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("nav",{staticClass:"menu"},[n("div",{staticClass:"steps"},[t._v("Ход: "),n("span",{domProps:{textContent:t._s(t.steps)}})]),n("div",{staticClass:"timer"},[t._v("Время: "),n("span",{domProps:{textContent:t._s(t.getTime())}})])]),n("div",{staticClass:"board"},[t.completed?t._e():n("transition-group",{staticClass:"grid grid",attrs:{tag:"ul",name:"list"}},t._l(t.state,(function(e,i){return n("li",{key:e,class:{item:!0,hidden:!e}},[n("button",{staticClass:"chip button",style:{disabled:t.completed},on:{click:function(e){return t.checkStep(i)}}},[n("label",{domProps:{textContent:t._s(e)}})])])})),0),n("button",{class:{overlay:!0,"overlay-hidden":!t.completed},style:{disabled:!t.completed},on:{click:t.shuffleState}},[t._v("Сыграем еще?")])],1)])}),[],!1,null,"4f97cce3",null).exports}},h=(n(153),Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("FifteenBoard")],1)}),[],!1,null,null,null));e.default=h.exports}}]);