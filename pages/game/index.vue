<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="text-center" v-for="(value, idx) in numbers">
        <!-- <v-card :color="sides[idx] === 0 ? '#777777' : '#007f89'" @click="cardClicked(idx)">
          <v-responsive :aspect-ratio="3/4">
            <p v-if="!sides[idx] == 0">
              number: {{ numbers[idx] }}
            </p>
          </v-responsive>
        </v-card> -->
        <Transition mode="out-in">
          <v-card color="#777777" @click='cardClicked(idx)' v-if="sides[idx] == 0">
            <v-responsive :aspect-ratio="3/4">
            </v-responsive>
          </v-card>
          <v-card color='#007f89' @click='cardClicked(idx)' v-if="!sides[idx] == 0">
            <v-responsive :aspect-ratio="3/4">
              <v-img :src='pictures[value]' cover height="100%">
              </v-img>
            </v-responsive>
          </v-card>
        </Transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
    return {

    }
  },
  computed: {
    numbers() {
      return this.$store.getters['game/numbers']
    },
    sides() {
      return this.$store.getters['game/sides']
    },
    pictures() {
      return this.$store.getters['game/pictures']
    },
    newPictures() {
      return this.$store.getters['game/newPictures']
    }
  },
  methods: {
    cardClicked(cardIndex){
      this.$store.dispatch('game/cardSelect', { cardIndex })
    }
  },
  async created(){
    for(let i = 0; i < 4; i++){
      const response = await this.$axios.get('https://randombig.cat/roar.json')
      // this.pictures.push(response.data.url)
      this.$store.dispatch('game/picturePush', { url: response.data.url })
    }
    this.$store.dispatch('game/pictureInsert', { newPictures: this.newPictures })
    console.log(this.pictures)
  }
}
</script>
<style scoped>

</style>
