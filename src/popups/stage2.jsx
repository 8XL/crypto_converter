import React from 'react';

function Stage2({toggler}) {
    return(
        <div>
            <p>Кликнув на эту карточку, ты произведешь выбор 
            той монетки, которую хочешь конвертировать. Она 
            сразу отразиться в конвертере валют.</p>
            <button onClick={()=>toggler({type:'STAGE2_3'})}>Угу, ога...чо ищё?</button>
        </div>

    )
}

export default Stage2