import React from "react";  
function Encuestas({encuestas}) {
    return (
        <div>
            <h2>Encuestas</h2>
            <ul>
                {encuestas.map((encuesta) => (
                    <li key={encuesta.id}>{encuesta.pregunta}</li>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;