import { useState } from "react";
import "./formInputs.css"
import useCalculateData from "../../store/hooks/inxex";

const FormInputs = () => {

    const {mParty1, mParty2, mParty3, mParty4, mParty5, mParty6, mParty7, mParty8, onMach, 
        setMParty1, setMParty2, setMParty3, setMParty4, setMParty5, setMParty6,
        setMParty7, setMParty8} = useCalculateData()

    const [quantTypes, setQuantTypes] = useState('');
    // const [mParty1, setMParty1] = useState('');
    // const [mParty2, setMParty2] = useState('');
    // const [mParty3, setMParty3] = useState('');
    // const [mParty4, setMParty4] = useState('');
    // const [mParty5, setMParty5] = useState('');
    // const [mParty6, setMParty6] = useState('');
    // const [mParty7, setMParty7] = useState('');
    // const [mParty8, setMParty8] = useState('');
    // const [onMach, setOnMach] = useState('');
    const [evetything, setEverything] = useState('');
    const [mPogParty1, setMPogParty1] = useState('');
    const [mPogParty2, setMPogParty2] = useState('');
    const [mPogParty3, setMPogParty3] = useState('');
    const [mPogParty4, setMPogParty4] = useState('');
    const [mPogParty5, setMPogParty5] = useState('');
    const [mPogParty6, setMPogParty6] = useState('');
    const [mPogParty7, setMPogParty7] = useState('');
    const [mPogParty8, setMPogParty8] = useState('');
    const [onCarRes, setOnCarRes] = useState('');
    const [everyRes, setEveryres] = useState('');
    const [paryOnCarRes, setParyOnCarRes] = useState('');
    const [quantAllres, setQuantAllRess] = useState('');
    const [timePrintRes, setTimePrintRes] = useState('');
    const [relaysRes, setRelaysRes] = useState('');
    const [timePrintRollRes, setTimePrintRollRes] = useState('');
    

    return ( 
        <div className="FormInputs">
            <div className="container">
                <div className="form-inputs">
                    <input type="text" className="name-input"/>
                    <input type="text" className="city-input"/>
                    <input type="text" className="mach_type-input"/>
                    <input type="text" value={quantTypes} onChange={(e) => setQuantTypes(e.target.value)} className="quant-mach_type-input"/>
                    <input type="text" value={mParty1} onChange={(e) => setMParty1(e.target.value)} name="mach_pary-input_1" className="mach_party-input"/>
                    <input type="text" value={mParty2} onChange={(e) => setMParty2(e.target.value)} name="mach_pary-input_2" className="mach_party-input"/>
                    <input type="text" value={mParty3} onChange={(e) => setMParty3(e.target.value)} name="mach_pary-input_3" className="mach_party-input"/>
                    <input type="text" value={mParty4} onChange={(e) => setMParty4(e.target.value)} name="mach_pary-input_4" className="mach_party-input"/>
                    <input type="text" value={mParty5} onChange={(e) => setMParty5(e.target.value)} name="mach_pary-input_5" className="mach_party-input"/>
                    <input type="text" value={mParty6} onChange={(e) => setMParty6(e.target.value)} name="mach_pary-input_6" className="mach_party-input"/>
                    <input type="text" value={mParty7} onChange={(e) => setMParty7(e.target.value)} name="mach_pary-input_7" className="mach_party-input"/>
                    <input type="text" value={mParty8} onChange={(e) => setMParty8(e.target.value)} name="mach_pary-input_8" className="mach_party-input"/>
                    <div className="on-machine-input">{onMach}</div>
                    <div className="everything-input">{evetything}</div>
                    <input type="text" value={mPogParty1} onChange={(e) => setMPogParty1(e.target.value)} name="machPogm_pary-input_1" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty2} onChange={(e) => setMPogParty2(e.target.value)} name="machPogm_pary-input_2" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty3} onChange={(e) => setMPogParty3(e.target.value)} name="machPogm_pary-input_3" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty4} onChange={(e) => setMPogParty4(e.target.value)} name="machPogm_pary-input_4" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty5} onChange={(e) => setMPogParty5(e.target.value)} name="machPogm_pary-input_5" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty6} onChange={(e) => setMPogParty6(e.target.value)} name="machPogm_pary-input_6" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty7} onChange={(e) => setMPogParty7(e.target.value)} name="machPogm_pary-input_7" className="machPogm_party-input"/>
                    <input type="text" value={mPogParty8} onChange={(e) => setMPogParty8(e.target.value)} name="machPogm_pary-input_8" className="machPogm_party-input"/>
                </div>
                <div className="form-formul-values">
                    <div name="formul-result" className="on-car-result">{onCarRes}</div>
                    <div name="formul-result" className="everything-result">{everyRes}</div>
                    <div name="formul-result" className="pary-on-car-result">{paryOnCarRes}</div>
                    <div name="formul-result" className="quant-all-result">{quantAllres}</div>
                    <div name="formul-result" className="time-printing-result">{timePrintRes}</div>
                    <div name="formul-result" className="relays-result">{relaysRes}</div>
                    <div name="formul-result" className="time-printing-roll-result">{timePrintRollRes}</div>
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
                    <select name="formul-result" className="profile-result">
                        <option value="">4_540х720_Shubnikov</option>
                        <option value="">6_540х720_Shubnikov</option>
                        <option value="">8_540х720_Shubnikov</option>
                        <option value="">6_720х1080_Shubnikov</option>
                        <option value="">8_720х1080_Shubnikov</option>
                        <option value="">8_1440х1440_Shubnikov</option>
                        <option value="">10_1440х1440_Shubnikov</option>
                        <option value="">4_540х720_F106366</option>
                        <option value="">6_540х720_F106366</option>
                        <option value="">8_540х720_F106366</option>
                        <option value="">6_720х1080_F106366</option>
                        <option value="">8_720х1080_F106366</option>
                        <option value="">6_720х1080_F108415</option>
                        <option value="">8_720х1080_F108415</option>
                        <option value="">4_540х720_MaraJet</option>
                        <option value="">6_540х720_MaraJet</option>
                        <option value="">8_540х720_MaraJet</option>
                        <option value="">6_720х1080_MaraJet</option>
                        <option value="">8_720х1080_MaraJet</option>
                        <option value="">8_1440х1440_MaraJet</option>
                        <option value="">10_1440х1440_MaraJet</option>
                        <option value="">4_540х720_Yadrentsev</option>
                        <option value="">6_540х720_Yadrentsev</option>
                        <option value="">8_540х720_Yadrentsev</option>
                        <option value="">6_720х1080_Yadrentsev</option>
                        <option value="">8_720х1080_Yadrentsev</option>
                        <option value="">8_1440х1440_Yadrentsev</option>
                        <option value="">10_1440х1440_Yadrentsev</option>
                        <option value="">4_540х720_Marabu</option>
                        <option value="">6_540х720_Marabu</option>
                        <option value="">8_540х720_Marabu</option>
                        <option value="">6_720х1080_Marabu</option>
                        <option value="">8_720х1080_Marabu</option>
                        <option value="">8_1440х1440_Marabu</option>
                        <option value="">10_1440х1440_Marabu</option>
                        <option value="">4_540х720_F106366</option>
                        <option value="">6_540х720_F106366</option>
                        <option value="">8_540х720_F106366</option>
                        <option value="">6_720х1080_F106366</option>
                        <option value="">8_720х1080_F106366</option>
                        <option value="">4_540х720_Marabu</option>
                        <option value="">6_540х720_Marabu</option>
                        <option value="">8_540х720_Marabu</option>
                        <option value="">6_720х1080_Marabu</option>
                        <option value="">8_720х1080_Marabu</option>
                        <option value="">8_1440х1440_Marabu</option>
                        <option value="">10_1440х1440_Marabu</option>
                        <option value="">6_720х1080_F106366</option>
                        <option value="">8_720х1080_F106366</option>
                        <option value="">4_540х720_Marabu</option>
                        <option value="">6_540х720_Marabu</option>
                        <option value="">8_540х720_Marabu</option>
                        <option value="">6_720х1080_Marabu</option>
                        <option value="">8_720х1080_Marabu</option>
                        <option value="">8_1440х1440_Marabu</option>
                        <option value="">10_1440х1440_Marabu</option>
                        <option value="">4_540х720_F106366</option>
                        <option value="">6_540х720_F106366</option>
                        <option value="">8_540х720_F106366</option>
                        <option value="">6_720х1080_F106366</option>
                        <option value="">8_720х1080_F106366</option>
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