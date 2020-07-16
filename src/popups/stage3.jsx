import React from 'react';

function Stage3({toggler}) {
    return(
        <div>
            <p>А тут уже тот самый конвертер. Вводи итересующее 
            количество монет и наблюдай результат в нижней строке 
            (TEHER/USD). Конвертация производится в фиат доллара, 
            так что цена соответсвует зеленой валюте.</p>
            <button onClick={()=>toggler({type:'STAGE3_4'})}>Как интересно...есть еще?</button>
        </div>

    )
}

export default Stage3