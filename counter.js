function counter(state, action) {
  return state;
}

expect(
  counter(0, {type: 'Increment'})
).toEqual(1);

expect(
  counter(1, {type: 'Increment'})
).toEqual(2)

expect(
  counter(2, {type: 'Decrement'})
).toEqual(1)x

expect(
  counter(1, {type: 'Decrement'})
).toEqual(0)

console.log('test passed')

// const { createStore } = Redux
// const store = createStore(counter)
// console.log(store)


// const createStore = (reducer) => {
//   let state
//   let listeners = []
//
//   const getState = () => state
//
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//   }
//
//   const suscribe = (listener) => {
//     listeners.push(listener)
//     return () => {
//       listeners = listeners.filter(l => l !== listener)
//     }
//   }
//
//   dispatch({})
//
//   return { getState, dispatch, suscribe }
// }
