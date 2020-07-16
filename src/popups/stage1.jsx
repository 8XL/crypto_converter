import React from 'react';

function Stage1({toggler}) {
    return(
        <div>
            <p>Привяо! Значит смотри: это карточка с монеткой.
            Тут у нас полное и краткое наименование монетки,
            а так жe её актуальная цена и процент изменения 
            от начала торгов.</p>
            <button onClick={()=>toggler({type:'STAGE1_2'})}>Да-да, го некст</button>
        </div>

    )
}

export default Stage1