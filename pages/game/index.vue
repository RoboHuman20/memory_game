<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="text-center" v-for="(value, idx) in numbers">
        <v-card color="#5f5f5f" @click="cardClicked(idx)" v-bind:class="{rotate:!(sides[idx]==0)}">
          <v-responsive :aspect-ratio="3/4">
            <v-text>
              {{ sides[idx] }}
              <div v-show="!(sides[idx] == 0)">
                {{ numbers[idx] }}
              </div>
            </v-text>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      numbers: [1, 1, 2, 2, 3, 3, 4, 4],
      sides: [0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  methods: {
    cardFlip(i){
      this.sides.splice(i, 1, this.sides[i]=== 0 ? 1 : 0)
    },
    cardCompleted(i,f){
      this.sides.splice(i, 1, 2)
      this.sides.splice(f, 1, 2)
    },
    cardUncompleted(i,f){
      this.cardFlip(i)
      this.cardFlip(f)
    },
    cardClicked(i){
      const formerCardIndex = this.sides.indexOf(1)
      if(!(this.sides[i] === 0)){
        return
      }
      if(formerCardIndex === -1){
        this.cardFlip(i)
        return
      }else{
        if(this.numbers[i]===this.numbers[formerCardIndex]){
          this.cardCompleted(i, formerCardIndex)
          return
        }else{
          this.cardFlip(i)
          setTimeout(() => this.cardUncompleted(i, formerCardIndex), 3000)
        }
      }
    }
  }
}
</script>
<style scoped>

.rotate {
  transition: transform 300ms;
  transform: rotateY(180deg)
}
</style>
