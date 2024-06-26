const FormBoxes = () => {
    return ( 
        <div className="form-boxes">
            <div className="container">
                <div className="proj-name">Наименование проекта</div>
                <div className="city">Город</div>
                <div className="type-machine">Вид машины</div>
                <div className="quantity-machines">Кол-во однотипных машин</div>
                <div className="quantity-machine-partyes">
                            <div>Обозначение и кол-во однотипных частей на машину</div>
                            <div className="list">
                            <div className="mach-party">1</div>
                            <div className="mach-party">2</div>
                            <div className="mach-party">3</div>
                            <div className="mach-party">4</div>
                            <div className="mach-party">5</div>
                            <div className="mach-party">6</div>
                            <div className="mach-party">7</div>
                            <div className="mach-party">8</div>
                            </div>
                    </div>
                <div className="on-machine">На маши <br/> ну</div>
                <div className="everything">Всего</div>
                <div className="quantity-pogM-mach-partyes">
                            <div>Кол-во пог.м каждой части машины</div>
                            <div className="list">
                            <div className="pog-mach-party">1</div>
                            <div className="pog-mach-party">2</div>
                            <div className="pog-mach-party">3</div>
                            <div className="pog-mach-party">4</div>
                            <div className="pog-mach-party">5</div>
                            <div className="pog-mach-party">6</div>
                            <div className="pog-mach-party">7</div>
                            <div className="pog-mach-party">8</div>
                            </div>
                    </div>
                    
                    <div className="quantity-pogM">
                        <div>Кол-во пог.м</div>
                        <div className="quant-pogM-box">
                        <div className="quant-pog-on-car">На <br/> машину</div>
                        <div className="quant-all">Всего</div>
                        </div>
                    </div>
                    <div className="rolls">
                        <div>Рулоны</div>
                        <div className="roll-boxes">
                        <div className="on-car">На машину</div>
                        <div className="quant-all">Всего</div>
                        </div>
                    </div>
                    <div className="time-printing">Время печати, час</div>
                    <div className="relays">Смены</div>
                    <div className="time-printing-roll">Время печати рулона, час</div>
                    <div className="checking">Проверка</div>
                    <div className="material">Материал</div>
                    <div className="printer">Принтер</div>
                    <div className="profile">Профиль</div>
                    <div className="color-settings">Настройка цвета</div>
                    <div className="montage">м2 монтаж</div>
                    <div className="demontage">м2 демонтаж</div>
                    <div className="view">Вид</div>
            </div>
        </div>
     );
}
 
export default FormBoxes;