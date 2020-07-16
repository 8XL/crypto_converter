import React from 'react';

function Stage5({ toggler }) {
    return(
        <div>
            <p>Последнее: поисковик. Сюда ты можешь
            ввести нужные монетки, и тогда не придется
            скроллить их все.<br />
            Удачи!</p>
            <button onClick={()=>toggler({type:'STAGE5_0'})}>Хипстер придумал Гугл?</button>
        </div>

    )
}

export default Stage5