import { useState } from "react";
import "./formInputs.css"

const FormInputs = () => {

    const [rows, setRows] = useState([]);

    // if(rows) return <p className="rows-loading">Loading...</p>

    return ( 
        <div className="FormInputs">
            <div className="container">
                <div className="form-inputs">
                    <input type="text" className="name-input"/>
                    <input type="text" className="city-input"/>
                    <input type="text" className="mach_type-input"/>
                    <input type="text" className="quant-mach_type-input"/>
                    <input type="text" name="mach_pary-input_1" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_2" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_3" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_4" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_5" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_6" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_7" className="mach_party-input"/>
                    <input type="text" name="mach_pary-input_8" className="mach_party-input"/>
                    <input type="text" className="on-machine-input"/>
                    <input type="text" className="everything-input"/>
                    <input type="text" name="machPogm_pary-input_1" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_2" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_3" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_4" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_5" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_6" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_7" className="machPogm_party-input"/>
                    <input type="text" name="machPogm_pary-input_8" className="machPogm_party-input"/>
                </div>
                <div className="form-formul-values">
                    
                </div>
            </div>
        </div>
     );
}
 
export default FormInputs;