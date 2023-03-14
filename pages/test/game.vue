<template>
  <v-container>
    <v-row>
      <v-col lg="2" md="4" cols="6" class="text-center" v-for="(value, idx) in numbers">
        <v-card>
          <v-card-title>
            {{ value }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in [1,2,3]">
        <v-btn @click="incrementNumbers(n)">
          + {{ n }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  },
  methods: {
    incrementNumbers(i) {
      this.numbers.splice(0, 1, this.numbers[0] + i)
    }
  }
}
</script>
<style scoped></style>
  