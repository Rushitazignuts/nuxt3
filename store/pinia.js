import {defineStore} from 'pinia'

export const useProductStore = defineStore('lists', () => {

const dynamicFields = ref([
    {
        id: 1,
        title: "macBook",
        price: 90000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Dell laptop",
        price: 60000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 3,
        title: "One plus mobile",
        price: 20000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 4,
        title: "airDopes",
        price: 2000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 5,
        title: "Bluetooth",
        price: 1300,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 6,
        title: "headPhone",
        price: 5000,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
   
  ])

 

  const deleteProduct = (id) => {
    const index = dynamicFields.value.findIndex(item => item.id === id);
    dynamicFields.value.splice(index, 1);
}

  return {
    dynamicFields,
    deleteProduct,
    
  }
})

