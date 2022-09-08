import React from 'react';

export default props => {

    function acao() {
        props.quandoClicar('João', 53, true)
    }

    return (
        <div>
            <div>Filho</div>
            <button onClick={acao}>Fornecer Informações</button>
        </div>
    )
}
