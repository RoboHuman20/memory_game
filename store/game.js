export const state = () => ({
  numbers: [0, 0, 1, 1, 2, 2, 3, 3],
  sides: [0, 0, 0, 0, 0, 0, 0, 0],
  pictures: ['', '', '', ''],
  newPictures: []
})

export const mutations = {
  sideOfCard(state, { cardIndex, newSide }) {
    state.sides.splice(cardIndex, 1, newSide)
  },
  cardCompleted(state, { cardIndex, formerCardIndex }) {
    state.sides.splice(cardIndex, 1, 2)
    state.sides.splice(formerCardIndex, 1, 2)
  },
  cardUncompleted(state, { cardIndex, formerCardIndex }) {
    state.sides.splice(cardIndex, 1, 0)
    state.sides.splice(formerCardIndex, 1, 0)
  },
  urlPush(state, { url }){
    state.newPictures.push(url)
  },
  pictureRefresh(state, { newPictures }) {
    state.pictures = newPictures
  }
}

export const getters = {
  numbers(state){
    return state.numbers
  },
  sides(state){
    return state.sides
  },
  pictures(state){
    return state.pictures
  },
  newPictures(state) {
    return state.newPictures
  }
}

export const actions = {
  cardSelect({ state, commit }, { cardIndex }) {
    const newSide = state.sides[cardIndex]=== 0 ? 1 : 0
    const formerCardIndex = state.sides.indexOf(1)
    if(!(state.sides[cardIndex] === 0)){
      return
    }
    if(formerCardIndex === -1){
      commit('sideOfCard', { cardIndex, newSide})
      return
    }else{
      if(state.numbers[cardIndex]===state.numbers[formerCardIndex]){
        commit('cardCompleted',{ cardIndex, formerCardIndex })
        return
      }else{
        commit('sideOfCard', { cardIndex, newSide })
        setTimeout(() => {
          commit('cardUncompleted',{ cardIndex, formerCardIndex })
        },
        2000
        )
      }
    }
  },
  picturePush({ state, commit }, { url }){
    commit('urlPush', { url })
  },
  pictureInsert({ state, commit }, { newPictures }) {
    commit('pictureRefresh', { newPictures })
  }
}