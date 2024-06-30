import { create } from 'zustand';

// Создаем фабрику сторов

const createRowStore = (index) => {
  return create((set) => ({
    mParty1: '',
    mParty2: '',
    mParty3: '',
    mParty4: '',
    mParty5: '',
    mParty6: '',
    mParty7: '',
    mParty8: '',
    onMach: 0,

    setMParty1: (value) => set(() => ({ mParty1: value })),
    setMParty2: (value) => set(() => ({ mParty2: value })),
    setMParty3: (value) => set(() => ({ mParty3: value })),
    setMParty4: (value) => set(() => ({ mParty4: value })),
    setMParty5: (value) => set(() => ({ mParty5: value })),
    setMParty6: (value) => set(() => ({ mParty6: value })),
    setMParty7: (value) => set(() => ({ mParty7: value })),
    setMParty8: (value) => set(() => ({ mParty8: value })),

    calcOnMach: (index) => {
      const store = rowStores[index];
      const { mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8 } = store.getState();
      const arr = [mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8];
      const nums = arr.reduce((acc, num) => acc += Number(num.replace(/[^\d]/g, '')), 0);
      store.setState({ onMach: nums });
    },
  }));
};

const rowStores = [];
for (let i = 0; i < 20; i++) {
  rowStores.push(createRowStore(i));
}

export default rowStores;
