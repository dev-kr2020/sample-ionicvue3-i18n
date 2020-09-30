import { createStore } from 'vuex'

// Load all modules.
function loadModules () {
  const context = require.context('./modules', false, /([a-z_]+)\.ts$/i)
  const modules = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.ts$/i)![1] }))
    .reduce(
      (modules, { key, name }) => ({
        ...modules,
        [name]: context(key).default
      }),
      {}
    )
  return { context, modules }
}
const { context, modules } = loadModules()

const store = createStore({
  modules: modules,    
  strict: process.env.NODE_ENV !== 'production'
})
export default store
if (module.hot) {
  // Hot reload whenever any module changes.
  module.hot.accept(context.id, () => {
    const { modules } = loadModules()
    store.hotUpdate({
      modules
    })
  })
}