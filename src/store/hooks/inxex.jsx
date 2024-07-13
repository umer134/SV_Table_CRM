import { create } from 'zustand';

// Создаем фабрику сторов

const createRowStore = (index) => {
  return create((set) => ({

    //колво однотипныx машин, обозначение и колво однотипныx частей на машину

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
      //нужно переменные mParty очистить от нечисловыx элементов и распарсить в числовой тип
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
      const {quantCars, onCarPogM, onMach} = store.getState();
      const rollsCarRes = (onCarPogM / (50 - 0.4 - (0.04 * (onMach - 1)) - 0.1)).toFixed(2);
      console.log(rollsCarRes)
      if(!onMach == 0) store.setState({ rollsOnCar: rollsCarRes })
        store.setState({totalRolls: (rollsCarRes * quantCars)})
    },

    //=============

    //время печати заказа 
    timePrintResult: '',
    relaysResult: '',
    rollPrintingTime: '',
    selectOption: '',
    setSelectOption: (value) => set(() => ({ selectOption : value })),
  
   _4_540x720_Shubnikov:    '4_540x720_Shubnikov',
   _6_540x720_Shubnikov:    '6_540x720_Shubnikov',
   _8_540x720_Shubnikov:    '8_540x720_Shubnikov',
   _6_720x1080_Shubnikov:   '6_720x1080_Shubnikov',
   _8_720x1080_Shubnikov:   '8_720x1080_Shubnikov',
   _8_1440x1440_Shubnikov:    '8_1440x1440_Shubnikov',
   _10_1440x1440_Shubnikov:  '10_1440x1440_Shubnikov',
   _4_540x720_F106366:       '4_540x720_F106366',
   _6_540x720_F106366:       '6_540x720_F106366',
   _8_540x720_F106366:       '8_540x720_F106366',
   _6_720x1080_F106366:      '6_720x1080_F106366',
   _8_720x1080_F106366:      '8_720x1080_F106366',
   _6_720x1080_F108415:      '6_720x1080_F108415',
   _8_720x1080_F108415:      '8_720x1080_F108415',
   _4_540x720_MaraJet:       '4_540x720_MaraJet',
   _6_540x720_MaraJet:       '6_540x720_MaraJet',
   _8_540x720_MaraJet:       '8_540x720_MaraJet',
   _6_720x1080_MaraJet:      '6_720x1080_MaraJet',
   _8_720x1080_MaraJet:      '8_720x1080_MaraJet',
   _8_1440x1440_MaraJet:     '8_1440x1440_MaraJet',
   _10_1440x1440_MaraJet:    '10_1440x1440_MaraJet',
   _4_540x720_Yadrentsev:     '4_540x720_Yadrentsev',
   _6_540x720_Yadrentsev:     '6_540x720_Yadrentsev',
   _8_540x720_Yadrentsev:     '8_540x720_Yadrentsev',
   _6_720x1080_Yadrentsev:    '6_720x1080_Yadrentsev',
   _8_720x1080_Yadrentsev:    '8_720x1080_Yadrentsev',
   _8_1440x1440_Yadrentsev:   '8_1440x1440_Yadrentsev',
   _10_1440x1440_Yadrentsev:  '10_1440x1440_Yadrentsev',
   _4_540x720_Marabu:         '4_540x720_Marabu',
   _6_540x720_Marabu:         '6_540x720_Marabu',
   _8_540x720_Marabu:         '8_540x720_Marabu',
   _6_720x1080_Marabu:        '6_720x1080_Marabu',
   _8_720x1080_Marabu:        '8_720x1080_Marabu',
   _8_1440x1440_Marabu:       '8_1440x1440_Marabu',
   _10_1440x1440_Marabu:      '10_1440x1440_Marabu',
   A_4_540x720_F106366:          '4_540x720_F106366',
   A_6_540x720_F106366:        '6_540x720_F106366',
   A_8_540x720_F106366:        '8_540x720_F106366',
   A_6_720x1080_F106366:       '6_720x1080_F106366',
   A_8_720x1080_F106366:       '8_720x1080_F106366',
   A_4_540x720_Marabu:         '4_540x720_Marabu',
   A_6_540x720_Marabu:         '6_540x720_Marabu',
   A_8_540x720_Marabu:         '8_540x720_Marabu',
   A_6_720x1080_Marabu:        '6_720x1080_Marabu',
   A_8_720x1080_Marabu:        '8_720x1080_Marabu',
   A_8_1440x1440_Marabu:       '8_1440x1440_Marabu',
   A_10_1440x1440_Marabu:      '10_1440x1440_Marabu',
   B_6_720x1080_F106366:       '6_720x1080_F106366',
   B_8_720x1080_F106366:         '8_720x1080_F106366',
   B_4_540x720_Marabu:       '4_540x720_Marabu',
   B_6_540x720_Marabu:       '6_540x720_Marabu',
   B_8_540x720_Marabu:       '8_540x720_Marabu',
   B_6_720x1080_Marabu:      '6_720x1080_Marabu',
   B_8_720x1080_Marabu:        '8_720x1080_Marabu',
   B_8_1440x1440_Marabu:       '8_1440x1440_Marabu',
   B_10_1440x1440_Marabu:      '10_1440x1440_Marabu',
   B_4_540x720_F106366:        '4_540x720_F106366',
   B_6_540x720_F106366:      '6_540x720_F106366',
   B_8_540x720_F106366:      '8_540x720_F106366',
   C_6_720x1080_F106366:     '6_720x1080_F106366',
   C_8_720x1080_F106366:     '8_720x1080_F106366',


    calcTimeRollPrint: (index) => {
    const store = rowStores[index];

    const {rollPrintingTime,
      timePrintResult,
      totalRolls,
      selectOption,
       _4_540x720_Shubnikov, 
      _6_540x720_Shubnikov,   
      _8_540x720_Shubnikov,   
      _6_720x1080_Shubnikov,  
      _8_720x1080_Shubnikov,  
      _8_1440x1440_Shubnikov, 
      _10_1440x1440_Shubnikov,
      _4_540x720_F106366,     
      _6_540x720_F106366,     
      _8_540x720_F106366,     
      _6_720x1080_F106366,    
      _8_720x1080_F106366,    
      _6_720x1080_F108415,    
      _8_720x1080_F108415,    
      _4_540x720_MaraJet,     
      _6_540x720_MaraJet,     
      _8_540x720_MaraJet,     
      _6_720x1080_MaraJet,    
      _8_720x1080_MaraJet,    
      _8_1440x1440_MaraJet,   
      _10_1440x1440_MaraJet,  
      _4_540x720_Yadrentsev,  
      _6_540x720_Yadrentsev,  
      _8_540x720_Yadrentsev,  
      _6_720x1080_Yadrentsev, 
      _8_720x1080_Yadrentsev, 
      _8_1440x1440_Yadrentsev,
      _10_1440x1440_Yadrentsev,
      _4_540x720_Marabu,      
      _6_540x720_Marabu,      
      _8_540x720_Marabu,      
      _6_720x1080_Marabu,     
      _8_720x1080_Marabu,     
      _8_1440x1440_Marabu,    
      _10_1440x1440_Marabu,   
      A_4_540x720_F106366,    
      A_6_540x720_F106366,    
      A_8_540x720_F106366,    
      A_6_720x1080_F106366,   
      A_8_720x1080_F106366,   
      A_4_540x720_Marabu,     
      A_6_540x720_Marabu,     
      A_8_540x720_Marabu,     
      A_6_720x1080_Marabu,    
      A_8_720x1080_Marabu,    
      A_8_1440x1440_Marabu,   
      A_10_1440x1440_Marabu,  
      B_6_720x1080_F106366,   
      B_8_720x1080_F106366,   
      B_4_540x720_Marabu,     
      B_6_540x720_Marabu,     
      B_8_540x720_Marabu,     
      B_6_720x1080_Marabu,    
      B_8_720x1080_Marabu,    
      B_8_1440x1440_Marabu,   
      B_10_1440x1440_Marabu,  
      B_4_540x720_F106366,    
      B_6_540x720_F106366,    
      B_8_540x720_F106366,    
      C_6_720x1080_F106366,   
      C_8_720x1080_F106366,   } = store.getState();

      switch (selectOption) {
        case _4_540x720_Shubnikov :
        store.setState({rollPrintingTime: 3})
        break;
        case _6_540x720_Shubnikov :
        store.setState({rollPrintingTime: 4.1})
        break;
        case _8_540x720_Shubnikov :
        store.setState({rollPrintingTime: 5.1})
        break;
        case _6_720x1080_Shubnikov :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_Shubnikov :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _8_1440x1440_Shubnikov :
        store.setState({rollPrintingTime: 10})
        break;
        case _10_1440x1440_Shubnikov :
        store.setState({rollPrintingTime: 12})
        break;
        case _4_540x720_F106366 :
        store.setState({rollPrintingTime: 3})
        break;
        case _6_540x720_F106366 :
        store.setState({rollPrintingTime: 4.1})
        break;
        case _8_540x720_F106366 :
        store.setState({rollPrintingTime: 5.1})
        break;
        case _6_720x1080_F106366 :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_F106366 :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _6_720x1080_F108415 :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_F108415 :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _4_540x720_MaraJet :
        store.setState({rollPrintingTime: 3})
        break;
        case _6_540x720_MaraJet :
        store.setState({rollPrintingTime: 4.1})
        break;
        case _8_540x720_MaraJet :
        store.setState({rollPrintingTime: 5.1})
        break;
        case _6_720x1080_MaraJet :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_MaraJet :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _8_1440x1440_MaraJet :
        store.setState({rollPrintingTime: 10})
        break;
        case _10_1440x1440_MaraJet :
        store.setState({rollPrintingTime: 12})
        break;
        case _4_540x720_Yadrentsev :
        store.setState({rollPrintingTime: 3})
        break;
        case _6_540x720_Yadrentsev :
        store.setState({rollPrintingTime: 4.1})
        break;
        case _8_540x720_Yadrentsev :
        store.setState({rollPrintingTime: 5.1})
        break;
        case _6_720x1080_Yadrentsev :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_Yadrentsev :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _8_1440x1440_Yadrentsev :
        store.setState({rollPrintingTime: 10})
        break;
        case _10_1440x1440_Yadrentsev :
        store.setState({rollPrintingTime: 12})
        break;
        case _4_540x720_Marabu :
        store.setState({rollPrintingTime: 3})
        break;
        case _6_540x720_Marabu :
        store.setState({rollPrintingTime: 4.1})
        break;
        case _8_540x720_Marabu :
        store.setState({rollPrintingTime: 5.1})
        break;
        case _6_720x1080_Marabu :
        store.setState({rollPrintingTime: 4.6})
        break;
        case _8_720x1080_Marabu :
        store.setState({rollPrintingTime: 6.1})
        break;
        case _8_1440x1440_Marabu :
        store.setState({rollPrintingTime: 10})
        break;
        case _10_1440x1440_Marabu :
        store.setState({rollPrintingTime: 12})
        break;
        case A_4_540x720_F106366 :
        store.setState({rollPrintingTime: 3})
        break;
        case A_6_540x720_F106366 :
        store.setState({rollPrintingTime: 4.1})
        break;
        case A_8_540x720_F106366 :
        store.setState({rollPrintingTime: 5.1})
        break;
        case A_6_720x1080_F106366 :
        store.setState({rollPrintingTime: 4.6})
        break;
        case A_8_720x1080_F106366 :
        store.setState({rollPrintingTime: 6.1})
        break;
        case A_4_540x720_Marabu :
        store.setState({rollPrintingTime: 3})
        break;
        case A_6_540x720_Marabu :
        store.setState({rollPrintingTime: 4.1})
        break;
        case A_8_540x720_Marabu :
        store.setState({rollPrintingTime: 5.1})
        break;
        case A_6_720x1080_Marabu :
        store.setState({rollPrintingTime: 4.6})
        break;
        case A_8_720x1080_Marabu :
        store.setState({rollPrintingTime: 6.1})
        break;
        case A_8_1440x1440_Marabu :
        store.setState({rollPrintingTime: 10})
        break;
        case A_10_1440x1440_Marabu :
        store.setState({rollPrintingTime: 12})
        break;
        case B_6_720x1080_F106366 :
        store.setState({rollPrintingTime: 4.6})
        break;
        case B_8_720x1080_F106366 :
        store.setState({rollPrintingTime: 6.1})
        break;
        case B_4_540x720_Marabu :
        store.setState({rollPrintingTime: 3})
        break;
        case B_6_540x720_Marabu :
        store.setState({rollPrintingTime: 4.1})
        break;
        case B_8_540x720_Marabu :
        store.setState({rollPrintingTime: 5.1})
        break;
        case B_6_720x1080_Marabu :
        store.setState({rollPrintingTime: 4.6})
        break;
        case B_8_720x1080_Marabu :
        store.setState({rollPrintingTime: 6.1})
        break;
        case B_8_1440x1440_Marabu :
        store.setState({rollPrintingTime: 10})
        break;
        case B_10_1440x1440_Marabu :
        store.setState({rollPrintingTime: 12})
        break;
        case B_4_540x720_F106366 :
        store.setState({rollPrintingTime: 3})
        break;
        case B_6_540x720_F106366 :
        store.setState({rollPrintingTime: 4.1})
        break;
        case B_8_540x720_F106366 :
        store.setState({rollPrintingTime: 5.1})
        break;
        case C_6_720x1080_F106366 :
        store.setState({rollPrintingTime: 4.6})
        break;
        case C_8_720x1080_F106366 :
        store.setState({rollPrintingTime: 6.1})
        break;

        default: 
        store.setState({rollPrintingTime: 3})
      }

      store.setState({timePrintResult: (rollPrintingTime * totalRolls).toFixed(2) });
      store.setState( {relaysResult: (timePrintResult / 10).toFixed(2)} )
  }



  }));
};


  

const rowStores = [];
for (let i = 0; i < 20; i++) {
  rowStores.push(createRowStore(i));
}

export default rowStores;
