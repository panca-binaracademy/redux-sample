import todoStore from './store/todo.js'

//console.log('todoStore:', todoStore)
console.log('state awal:', todoStore.getState())

todoStore.subscribe(() => {
    console.log('transaksi selesai')
})

todoStore.dispatch({
    type: 'addTodo',
    payload: {
        description: 'Mengerjakan tugas'
    }
})
todoStore.dispatch({
    type: 'addTodo',
    payload: {
        description: 'Beli gula'
    }
})

console.log('state akhir:', todoStore.getState())