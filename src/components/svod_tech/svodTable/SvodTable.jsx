import './svodTable.css'

const SvodTech_table = () => {
    return ( 
        <div className="SV_table__head">
        <div className="SV_name__project">Наименование <br/> проекта</div>
        <div className="SV_city">Город</div>
        <div className="SV_view__machine">Вид <br/> машины</div>
        <div className="SV_quantity__machine">Кол-во <br/> машин</div>
        <div className="SV_number__machine">Номер <br/> машины</div>
        <div className="SV_name">Обоз <br/> начение</div>
        <div className="SV_quantity__lists">Кол-во <br/> листов</div>
        <div className="SV_quantity__pogm">Кол-во пог.м в <br/> одном листе</div>
        <div className="SV_rolls">Рулоны</div>
        <div className="SV_printing__time">Время<br/>печати, час</div>
        <div className="SV_relays">Смены</div>
        <div className="SV_printing__time-relay">Время печати<br/>рулона, час</div>
        <div className="SV_printed__lists">Напечатано <br/> листов</div>
        <div className="SV_material">Материал</div>
        <div className="SV_profile">Профиль</div>
        <div className="SV_color__settings">Настрой<br/>ка цвета</div>
        <div className="SV_printer">Принтер</div>
        <div className="SV_brak">Брак</div>
        <div className="SV_status__print">
            <div>Статус печати</div>
            <div className="SV_SP__cells">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
            </div>
        </div>   
        <div className="SV_mounting">м2 <br/> монтаж</div>     
        <div className="SV_dismantling">м2 <br/> демонтаж</div>     
        <div className="SV_type">Тип</div>     
    </div>
     );
}
 
export default SvodTech_table;