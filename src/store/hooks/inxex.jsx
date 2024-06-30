import { create } from 'zustand';

// Создаем фабрику сторов

const createRowStore = (index) => {
  return create((set) => ({

    //колво однотипных машин, обозначение и колво однотипных частей на машину

    quantCars: '',
    totalCarsParts: '',
    mParty1: '',
    mParty2: '',
    mParty3: '',
    mParty4: '',
    mParty5: '',
    mParty6: '',
    mParty7: '',
    mParty8: '',
    onMach: 0,

    setQuantCars: (value) => set(() => ({ quantCars: value })),
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
      const { quantCars, mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8 } = store.getState();
      const arr = [mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8];
      const nums = arr.reduce((acc, num) => acc += Number(num.replace(/[^\d]/g, '')), 0);
      store.setState({ onMach: nums });
      store.setState({ totalCarsParts: quantCars * nums})
    },

    //===========

    //колво пог.м в каждой части машины

    pogMParty1: '',
    pogMParty2: '',
    pogMParty3: '',
    pogMParty4: '',
    pogMParty5: '',
    pogMParty6: '',
    pogMParty7: '',
    pogMParty8: '',
    onCarPogM: 0,
    totalCarPogM: "",

    setPogMParty1: (value) => set(() => ({ pogMParty1: value })),
    setPogMParty2: (value) => set(() => ({ pogMParty2: value })),
    setPogMParty3: (value) => set(() => ({ pogMParty3: value })),
    setPogMParty4: (value) => set(() => ({ pogMParty4: value })),
    setPogMParty5: (value) => set(() => ({ pogMParty5: value })),
    setPogMParty6: (value) => set(() => ({ pogMParty6: value })),
    setPogMParty7: (value) => set(() => ({ pogMParty7: value })),
    setPogMParty8: (value) => set(() => ({ pogMParty8: value })),

    calcPogM: (index) => {
      const store = rowStores[index];
      //нужно переменные mParty очистить от нечисловых элементов и распарсить в числовой тип
      const { pogMParty1, pogMParty2, pogMParty3, pogMParty4, pogMParty5, pogMParty6, pogMParty7, pogMParty8,
            mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8, quantCars } = store.getState();

          const mParty11 = Number(mParty1.replace(/[^\d]/g, ''));
          const mParty22 = Number(mParty2.replace(/[^\d]/g, ''));
          const mParty33 = Number(mParty3.replace(/[^\d]/g, ''));
          const mParty44 = Number(mParty4.replace(/[^\d]/g, ''));
          const mParty55 = Number(mParty5.replace(/[^\d]/g, ''));
          const mParty66 = Number(mParty6.replace(/[^\d]/g, ''));
          const mParty77 = Number(mParty7.replace(/[^\d]/g, ''));
          const mParty88 = Number(mParty8.replace(/[^\d]/g, ''));

          const OnCarRes = (pogMParty1 * mParty11 + pogMParty2 * mParty22 + pogMParty3 * mParty33 + 
          pogMParty4 * mParty44 + pogMParty5 * mParty55 + pogMParty6 * mParty66 + pogMParty7 * mParty77 + pogMParty8 * mParty88);

      store.setState({onCarPogM: OnCarRes });
      store.setState({ totalCarPogM: OnCarRes * quantCars})
    },
     //===========

    //рулоны и остальное

    rollsOnCar: '',
    totalRolls: '',
    

    calcRolls: (index) => {
      const store = rowStores[index];
      const {totalCarPogM} = store.getState();
      store.setState({ totalRolls: totalCarPogM })
    }

  }));
};


  

const rowStores = [];
for (let i = 0; i < 20; i++) {
  rowStores.push(createRowStore(i));
}

export default rowStores;
