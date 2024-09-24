import { useState } from "react";
import "./footer.css"

const Footer = ({index, setTableWindow}) => {
    const [form] = useState('form');
    const [print] = useState('print');
    const [summary] = useState('summary');
    const changeTableWindow = (value) => {
        setTableWindow(value)
    }

    return ( 
        <div className="Footer">
            <div className="container">
                <div className="form-btn">
                    <button onClick={() => changeTableWindow(form)}>форма</button>
                </div>
                <div className="print-btn">
                    <button onClick={() => changeTableWindow(print)}>печать</button>
                </div>
                <div className="summary-btn">
                    <button onClick={() => changeTableWindow(summary)}>свод</button>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;