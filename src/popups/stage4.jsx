import React from 'react';

function Stage4({toggler}) {
    return(
        <div>
            <p>Вторая строка отражает вторую карточку 
            которую ты выберешь(если выберешь). Так удобнее 
            сравнить валютную пару при аналогичной стоимости.</p>
            <button onClick={()=>toggler({type:'STAGE4_5'})}>Душишь уже, как остановить?</button>
        </div>

    )
}

export default Stage4