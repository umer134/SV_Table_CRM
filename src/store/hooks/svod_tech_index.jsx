import { create } from "zustand";


const createRowStore = (index) => {
    return create((set) => ({

    }))
}



const rowStores = [];
for (let i = 0; i < 60; i++) {
  rowStores.push(createRowStore(i));
}

export default rowStores;

