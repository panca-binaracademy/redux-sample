import store from './store/store.js'

console.log(store.getState())

//console.log('todoStore:', todoStore)
// todoStore.subscribe(() => {
//     console.log('transaksi selesai')
// })

// console.log('state awal:', todoStore.getState())

// todoStore.dispatch( addTodoActionCreator('Mengerjakan tugas') )
// todoStore.dispatch( addTodoActionCreator('Beli gula') )

// console.log('state setelah add:', todoStore.getState())

// todoStore.dispatch( toggleTodoActionCreator(2) )

// console.log('state setelah toggle:', todoStore.getState())

// todoStore.dispatch( removeTodoActionCreator(1) )

// console.log('state setelah remove:', todoStore.getState())
