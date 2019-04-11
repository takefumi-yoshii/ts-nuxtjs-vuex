import { StoreContext } from 'vuex'

export const state = () => ({
  count: 1
})

export const actions = {
  nuxtServerInit(ctx: StoreContext) {
    console.log(ctx.state.counter.count)
  }
}
