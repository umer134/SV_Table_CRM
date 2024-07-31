import { useEffect } from "react";
import "./formInputs.css"
import rowStores from "../../store/hooks/inxex";

const FormInputs = ({index, start, setStart}) => {

    const useCalculateData = rowStores[index];
    const { mParty1, mParty2,
    mParty3, mParty4,mParty5, mParty6, mParty7, mParty8, onMach,
    setMParty1, setMParty2, setMParty3, setMParty4, setMParty5, 
    setMParty6, setMParty7, setMParty8, pogMParty1, pogMParty2,
    pogMParty3, pogMParty4, pogMParty5, pogMParty6, pogMParty7,
    pogMParty8, setPogMParty1, setPogMParty2, setPogMParty3,
    setPogMParty4, setPogMParty5, setPogMParty6, setPogMParty7,
    setPogMParty8, onCarPogM, totalCarPogM, rollsOnCar, totalRolls,
    rollPrintingTime, selectOption, setSelectOption, timePrintResult,
    relaysResult, quantCars, setQuantCars, totalCarsParts, 
    _4_540x720_Shubnikov, _6_540x720_Shubnikov, _8_540x720_Shubnikov, _6_720x1080_Shubnikov,
    _8_720x1080_Shubnikov, _8_1440x1440_Shubnikov, _10_1440x1440_Shubnikov, _4_540x720_F106366, _6_540x720_F106366,      
    _8_540x720_F106366, _6_720x1080_F106366, _8_720x1080_F106366, _6_720x1080_F108415,
    _8_720x1080_F108415, _4_540x720_MaraJet,   _6_540x720_MaraJet,   _8_540x720_MaraJet, 
    _6_720x1080_MaraJet, _8_720x1080_MaraJet,  _8_1440x1440_MaraJet, _10_1440x1440_MaraJet,   
    _4_540x720_Yadrentsev, _6_540x720_Yadrentsev, _8_540x720_Yadrentsev, _6_720x1080_Yadrentsev,  
    _8_720x1080_Yadrentsev, _8_1440x1440_Yadrentsev, _10_1440x1440_Yadrentsev,
    _4_540x720_Marabu, _6_540x720_Marabu, _8_540x720_Marabu, _6_720x1080_Marabu,  _8_720x1080_Marabu,
    _8_1440x1440_Marabu, _10_1440x1440_Marabu, A_4_540x720_F106366, A_6_540x720_F106366,
    A_8_540x720_F106366, A_6_720x1080_F106366, A_8_720x1080_F106366, A_4_540x720_Marabu,
    A_6_540x720_Marabu, A_8_540x720_Marabu, A_6_720x1080_Marabu, A_8_720x1080_Marabu, 
    A_8_1440x1440_Marabu, A_10_1440x1440_Marabu, B_6_720x1080_F106366, B_8_720x1080_F106366,
    B_4_540x720_Marabu, B_6_540x720_Marabu, B_8_540x720_Marabu, B_6_720x1080_Marabu, B_8_720x1080_Marabu, 
    B_8_1440x1440_Marabu, B_10_1440x1440_Marabu, B_4_540x720_F106366, B_6_540x720_F106366, B_8_540x720_F106366,      
    C_6_720x1080_F106366, C_8_720x1080_F106366} = useCalculateData();
    
    const calcAllOnMach = () => {
        rowStores.forEach((store) => {
          store.getState().calcOnMach(index);
        });
      };

      const calcPogMParts = () => {
        rowStores.forEach((store) => {
          store.getState().calcPogM(index);
        });
      };

      const calcRolls = () => {
        rowStores.forEach((store) => {
          store.getState().calcRolls(index);
        });
      };

      const calcRollPrintingTime = () => {
        rowStores.forEach((store) => {
          store.getState().calcTimeRollPrint(index);
        });
      };

      useEffect(() => {
        if (start === true) {
          calcAllOnMach();
          calcPogMParts();
          calcRolls();
          calcRollPrintingTime();
          setStart(start = false);
        }
      }, [start]);

    return ( 
        <div className="FormInputs">
            <div className="container">
                <div className="form-inputs">
                    <input type="text" className="name-input"/>
                    <input type="text" className="city-input"/>
                    <input type="text" className="mach_type-input"/>
                    <input type="text" value={quantCars} onChange={(e) => setQuantCars(e.target.value)} className="quant-mach_type-input"/>
                    <input type="text" value={mParty1} onChange={(e) => setMParty1(e.target.value)} name="mach_pary-input_1" className="mach_party-input"/>
                    <input type="text" value={mParty2} onChange={(e) => setMParty2(e.target.value)} name="mach_pary-input_2" className="mach_party-input"/>
                    <input type="text" value={mParty3} onChange={(e) => setMParty3(e.target.value)} name="mach_pary-input_3" className="mach_party-input"/>
                    <input type="text" value={mParty4} onChange={(e) => setMParty4(e.target.value)} name="mach_pary-input_4" className="mach_party-input"/>
                    <input type="text" value={mParty5} onChange={(e) => setMParty5(e.target.value)} name="mach_pary-input_5" className="mach_party-input"/>
                    <input type="text" value={mParty6} onChange={(e) => setMParty6(e.target.value)} name="mach_pary-input_6" className="mach_party-input"/>
                    <input type="text" value={mParty7} onChange={(e) => setMParty7(e.target.value)} name="mach_pary-input_7" className="mach_party-input"/>
                    <input type="text" value={mParty8} onChange={(e) => setMParty8(e.target.value)} name="mach_pary-input_8" className="mach_party-input"/>
                    <div className="on-machine-input">{onMach}</div>
                    <div className="everything-input">{totalCarsParts}</div>
                    <input type="number" value={pogMParty1} onChange={(e) => setPogMParty1(e.target.value)} name="machPogm_pary-input_1" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty2} onChange={(e) => setPogMParty2(e.target.value)} name="machPogm_pary-input_2" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty3} onChange={(e) => setPogMParty3(e.target.value)} name="machPogm_pary-input_3" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty4} onChange={(e) => setPogMParty4(e.target.value)} name="machPogm_pary-input_4" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty5} onChange={(e) => setPogMParty5(e.target.value)} name="machPogm_pary-input_5" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty6} onChange={(e) => setPogMParty6(e.target.value)} name="machPogm_pary-input_6" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty7} onChange={(e) => setPogMParty7(e.target.value)} name="machPogm_pary-input_7" className="machPogm_party-input"/>
                    <input type="number" value={pogMParty8} onChange={(e) => setPogMParty8(e.target.value)} name="machPogm_pary-input_8" className="machPogm_party-input"/>
                </div>
                <div className="form-formul-values">
                    <div name="formul-result" className="on-car-result">{onCarPogM}</div>
                    <div name="formul-result" className="everything-result">{totalCarPogM}</div>
                    <div name="formul-result" className="pary-on-car-result">{rollsOnCar}</div>
                    <div name="formul-result" className="quant-all-result">{totalRolls}</div>
                    <div name="formul-result" className="time-printing-result">{timePrintResult}</div>
                    <div name="formul-result" className="relays-result">{relaysResult}</div>
                    <div name="formul-result" className="time-printing-roll-result">{rollPrintingTime}</div>
                    <div name="formul-result" className="checking-result"></div>
                    <select name="formul-result" className="material-result">
                        <option value="">3640 M010 1.05</option>
                        <option value="">3640 G010 1.05</option>
                        <option value="">3640 M010 1.26</option>
                        <option value="">3640 G010 1.26</option>
                        <option value="">3640 М010 1.37</option>
                        <option value="">3640 G010 1.37</option>
                        <option value="">3551 G101 1.26</option>
                        <option value="">3551 G101 1.37</option>
                        <option value="">3551 GRA101 1.37</option>
                        <option value="">Ritrama Ri-Jet P75 1.372</option>
                        <option value="">Oracal 641 1.00</option>
                        <option value="">Oracal 641 1.26</option>
                        <option value="">Oracal 551 1.26</option>
                        <option value="">KPMF K50000 1.52</option>
                        <option value="">Oralite 5200 1.235</option>
                        <option value="">Oracal 751C 1.26</option>
                        <option value="">RexJet 80 010 1.06</option>
                        <option value="">RexJet 80 010 1.27</option>
                        <option value="">RexJet 80 010 1.37</option>
                        <option value="">RexJet 80 010 1.52</option>
                        <option value="">SAV ЭКО2 010 1.06</option>
                        <option value="">SAV ЭКО2 010 1.27</option>
                        <option value="">SAV ЭКО2 010 1.37</option>
                        <option value="">SAV ЭКО2 010 1.52</option>
                        <option value="">Saviar 100 010 1.07 ЧК</option>
                        <option value="">Saviar 100 010 1.27 ЧК</option>
                        <option value="">Saviar 100 010 1.37 ЧК</option>
                        <option value="">Saviar 100 010 1.52 ЧК</option>
                        <option value="">Бумага Vilaseca 150гр 1.27</option>
                        <option value="">Бэклит 260гр 1.07</option>
                        <option value="">Бэклит 260гр 1.27</option>
                        <option value="">Бэклит 260гр 1.37</option>
                        <option value="">Перфорированная 120 1.27</option>
                        <option value="">Перфорированная 120 1.37</option>
                        <option value="">Vikulux 3100 1.24</option>
                        <option value="">3620 М010 1.26</option>
                    </select>
                    <select name="formul-result" className="printer-result">
                        <option value="">Любой</option>
                        <option value="">PLUS 3</option>
                        <option value="">PLUS 2</option>
                        <option value="">PLUS 1</option>
                        <option value="">300</option>
                        <option value="">Плоттер</option>
                    </select>
                    <select name="formul-result" className="profile-result" value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
                        <option value={_4_540x720_Shubnikov}>{_4_540x720_Shubnikov}</option>
                        <option value={_6_540x720_Shubnikov}>{_6_540x720_Shubnikov}</option>
                        <option value={_8_540x720_Shubnikov}>{_8_540x720_Shubnikov}</option>
                        <option value={_6_720x1080_Shubnikov}>{_6_720x1080_Shubnikov}</option>
                        <option value={_8_720x1080_Shubnikov}>{_8_720x1080_Shubnikov}</option>
                        <option value={_8_1440x1440_Shubnikov}>{_8_1440x1440_Shubnikov}</option>
                        <option value={_10_1440x1440_Shubnikov}>{_10_1440x1440_Shubnikov}</option>
                        <option value={_4_540x720_F106366}>{_4_540x720_F106366}</option>
                        <option value={_6_540x720_F106366}>{_6_540x720_F106366}</option>
                        <option value={_8_540x720_F106366}>{_8_540x720_F106366}</option>
                        <option value={_6_720x1080_F106366}>{_6_720x1080_F106366}</option>
                        <option value={_8_720x1080_F106366}>{_8_720x1080_F106366}</option>
                        <option value={_6_720x1080_F108415}>{_6_720x1080_F108415}</option>
                        <option value={_8_720x1080_F108415}>{_8_720x1080_F108415}</option>
                        <option value={_4_540x720_MaraJet}>{_4_540x720_MaraJet}</option>
                        <option value={_6_540x720_MaraJet}>{_6_540x720_MaraJet}</option>
                        <option value={_8_540x720_MaraJet}>{_8_540x720_MaraJet}</option>
                        <option value={_6_720x1080_MaraJet}>{_6_720x1080_MaraJet}</option>
                        <option value={_8_720x1080_MaraJet}>{_8_720x1080_MaraJet}</option>
                        <option value={_8_1440x1440_MaraJet}>{_8_1440x1440_MaraJet}</option>
                        <option value={_10_1440x1440_MaraJet}>{_10_1440x1440_MaraJet}</option>
                        <option value={_4_540x720_Yadrentsev}>{_4_540x720_Yadrentsev}</option>
                        <option value={_6_540x720_Yadrentsev}>{_6_540x720_Yadrentsev}</option>
                        <option value={_8_540x720_Yadrentsev}>{_8_540x720_Yadrentsev}</option>
                        <option value={_6_720x1080_Yadrentsev}>{_6_720x1080_Yadrentsev}</option>
                        <option value={_8_720x1080_Yadrentsev}>{_8_720x1080_Yadrentsev}</option>
                        <option value={_8_1440x1440_Yadrentsev}>{_8_1440x1440_Yadrentsev}</option>
                        <option value={_10_1440x1440_Yadrentsev}>{_10_1440x1440_Yadrentsev}</option>
                        <option value={_4_540x720_Marabu}>{_4_540x720_Marabu}</option>
                        <option value={_6_540x720_Marabu}>{_6_540x720_Marabu}</option>
                        <option value={_8_540x720_Marabu}>{_8_540x720_Marabu}</option>
                        <option value={_6_720x1080_Marabu}>{_6_720x1080_Marabu}</option>
                        <option value={_8_720x1080_Marabu}>{_8_720x1080_Marabu}</option>
                        <option value={_8_1440x1440_Marabu}>{_8_1440x1440_Marabu}</option>
                        <option value={_10_1440x1440_Marabu}>{_10_1440x1440_Marabu}</option>
                        <option value={A_4_540x720_F106366}>{A_4_540x720_F106366}</option>
                        <option value={A_6_540x720_F106366}>{A_6_540x720_F106366}</option>
                        <option value={A_8_540x720_F106366}>{A_8_540x720_F106366}</option>
                        <option value={A_6_720x1080_F106366}>{A_6_720x1080_F106366}</option>
                        <option value={A_8_720x1080_F106366}>{A_8_720x1080_F106366}</option>
                        <option value={A_4_540x720_Marabu}>{A_4_540x720_Marabu}</option>
                        <option value={A_6_540x720_Marabu}>{A_6_540x720_Marabu}</option>
                        <option value={A_8_540x720_Marabu}>{A_8_540x720_Marabu}</option>
                        <option value={A_6_720x1080_Marabu}>{A_6_720x1080_Marabu}</option>
                        <option value={A_8_720x1080_Marabu}>{A_8_720x1080_Marabu}</option>
                        <option value={A_8_1440x1440_Marabu}>{A_8_1440x1440_Marabu}</option>
                        <option value={A_10_1440x1440_Marabu}>{A_10_1440x1440_Marabu}</option>
                        <option value={B_6_720x1080_F106366}>{B_6_720x1080_F106366}</option>
                        <option value={B_8_720x1080_F106366}>{B_8_720x1080_F106366}</option>
                        <option value={B_4_540x720_Marabu}>{B_4_540x720_Marabu}</option>
                        <option value={B_6_540x720_Marabu}>{B_6_540x720_Marabu}</option>
                        <option value={B_8_540x720_Marabu}>{B_8_540x720_Marabu}</option>
                        <option value={B_6_720x1080_Marabu}>{B_6_720x1080_Marabu}</option>
                        <option value={B_8_720x1080_Marabu}>{B_8_720x1080_Marabu}</option>
                        <option value={B_8_1440x1440_Marabu}>{B_8_1440x1440_Marabu}</option>
                        <option value={B_10_1440x1440_Marabu}>{B_10_1440x1440_Marabu}</option>
                        <option value={B_4_540x720_F106366}>{B_4_540x720_F106366}</option>
                        <option value={B_6_540x720_F106366}>{B_6_540x720_F106366}</option>
                        <option value={B_8_540x720_F106366}>{B_8_540x720_F106366}</option>
                        <option value={C_6_720x1080_F106366}>{C_6_720x1080_F106366}</option>
                        <option value={C_8_720x1080_F106366}>{C_8_720x1080_F106366}</option>
                    </select>
                    <div name="formul-result" className="color-settings-result"></div>
                    <div name="formul-result" className="montage-result"></div>
                    <div name="formul-result" className="demontage-result"></div>
                    <div name="formul-result" className="view-result"></div>
                </div>
            </div>
           
        </div>
     );
}
 
export default FormInputs;