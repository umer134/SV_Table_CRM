import rowStores from "../../../store/hooks/inxex";

const FormTable = ({index, start, setStart, cleanForm, setCleanForm}) => {

    const useCalculateData = rowStores[index];
    const {totalCarPogM, totalRolls, totalCarsParts, timePrintResult, relaysResult} = useCalculateData();

    return ( 
        <div className="FormTable">
            <div className="container">
                <div className="volume">
                    <h3>Объемы</h3>
                    <div className="volume-block">
                    <h4>всего пог.м <p>{totalCarPogM | 0}</p></h4>
                    <h4>кол-во рулонов <p>{totalRolls | 0}</p></h4>
                    <h4>кол-во частей <p>{totalCarsParts | 0}</p></h4>
                    </div>
                </div>
                <div className="time">
                    <h3>Время</h3>
                    <div className="volume-block">
                    <h4>время печати заказа, час <p>{ timePrintResult | 0}</p></h4>
                    <h4>кол-во смен <p>{relaysResult | 0}</p></h4>
                    </div>
                </div>
                <div className="btns-block">
                    <button className="inp-formuls" onClick={() => setStart(!start)}>вставить формулы</button>
                    <button className="inp-formuls">внести данные</button>
                    <button className="inp-formuls" onClick={() => setCleanForm(!start)}>очистить форму</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default FormTable;