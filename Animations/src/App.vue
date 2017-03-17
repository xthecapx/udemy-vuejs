<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <select v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select> 
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <hr>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">Dinamic animation</div>
                </transition>
                <hr>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">Thisi is some Info</div>
                </transition>

                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">Thisi is some Info</div>
                </transition>

                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">Thisi is some Info</div>
                </transition>

                <h1>Animate.css</h1>
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear
                    >
                    <div class="alert alert-info" v-if="show">Thisi is some Info</div>
                </transition>

                <h1>Two Elements Transition</h1>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Multiple 1</div>
                    <div class="alert alert-warning" v-else key="warning">Multiple 2</div>
                </transition>

                <hr>
                <h1>Javascript Animations</h1>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Elements</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                    appear>
                    <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <h1>Dinamic Component</h1>
                <select v-model="selectedComponent">
                    <option value="danger-alert">Danger</option>
                    <option value="success-alert">Success</option>
                </select>
                <br><br>
                <transition name="fade" mode="out-in">    
                    <component :is="selectedComponent"></component>
                </transition>
                <h1>Group Transition</h1>
                <button @click="addItem">Added Item</button>
                <br><br>
                <ul class="list-group">
                <transition-group name="slide">
                    <li 
                        class="list-group-item" 
                        v-for="(number, index) in numbers" 
                        @click="removeItem(index)"
                        style="cursor: pointer"
                        :key="number"
                        >{{ number }}</li>
                </transition-group>
                 </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Alert from './DargerAlert.vue'
    import Success from './SuccessAlert.vue'

    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'success-alert',
                numbers: [1, 2, 3, 4, 5, 6]
            }
        },
        components: {
            "danger-alert": Alert,
            "success-alert": Success
        },
        methods: {
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length)

                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            },
            beforeEnter(el) {
                console.log("beforeEnter: ")
                this.elementWidth = parseInt(el.style.width)
            },
            enter(el, done) {
                console.log("enter")
                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px'
                    round++

                    if ( round > 20 ) {
                        clearInterval(interval)
                        this.elementWidth = parseInt(el.style.width)
                        done()
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log("afterEnter")
            },
            enterCancelled(el) {
                console.log("enterCancelled")
            },
            beforeLeave(el) {
                console.log("beforeLeave", el.style.width)
            },
            leave(el, done) {
                console.log("leave")
                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px'
                    round++

                    if ( round > 20 ) {
                        clearInterval(interval)
                        this.elementWidth = parseInt(el.style.width)
                        done()
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log("afterLeave")
            },
            leaveCancelled(el) {
                console.log("leaveCancelled")
            }
        }
    }
</script>
 
<style scoped>

    .js-animated {
        
    }
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
        -webkit-transition: opacity 1s;
        -moz-transition: opacity 1s;
        -o-transition: opacity 1s;
        transition: opacity 1s;
        /*opacity: 1;*/
    }

    .fade-leave {
        /*opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px)*/
        transition: opacity 0.5s;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    /* Animate groups */
    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
