import { create } from 'zustand';

const useCalculateData = create((set) => ({
    mParty1 : 0,
    mParty2 : 0,
    mParty3 : 0,
    mParty4 : 0,
    mParty5 : 0,
    mParty6 : 0,
    mParty7 : 0,
    mParty8 : 0,
    onMach: 0,

    setMParty1: (value) => set(() => ({ mParty1: value })),
    setMParty2: (value) => set(() => ({ mParty2: value })),
    setMParty3: (value) => set(() => ({ mParty3: value })),
    setMParty4: (value) => set(() => ({ mParty4: value })),
    setMParty5: (value) => set(() => ({ mParty5: value })),
    setMParty6: (value) => set(() => ({ mParty6: value })),
    setMParty7: (value) => set(() => ({ mParty7: value })),
    setMParty8: (value) => set(() => ({ mParty8: value })),

    calcOnMach : () => {
        const str = `${useCalculateData.getState().mParty1}${useCalculateData.getState().mParty2}
        ${useCalculateData.getState().mParty3}${useCalculateData.getState().mParty4}
        ${useCalculateData.getState().mParty5}${useCalculateData.getState().mParty6}
        ${useCalculateData.getState().mParty7}${useCalculateData.getState().mParty8}`;
        const arr = str.split('');
        const nums = arr.filter((char) => /^\d+$/.test(char)).map((char) => parseInt(char)).reduce((acc, num) => acc + num, 0);
        set({ onMach: nums });
    }
}))

export default useCalculateData;

