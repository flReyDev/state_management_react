import React, { useEffect, useState } from "react"

const SECURITY_CODE = 'paradigma';


function UseState(props){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')

    useEffect(()=>{
        if(!!loading){
            setTimeout(()=>{
                console.log("Ejecutando el efecto...");

                if(value.toLowerCase() !== SECURITY_CODE.toLocaleLowerCase()){
                    setError(true);
                }
                setLoading(false);
            }, 3000)
        }
    }, 
    [loading])
    return (
        <div>
            <h2>Eliminar {props.name}</h2>
            <p>Ingresa el código de seguridad.</p>

            {(error && !loading) && (
                <p>
                    Código incorrecto.
                </p>
            )}
            
            {loading && (
                <p>
                    Cargando....
                </p>
            )}

            <input 
                placeholder="Digita el codigo de segurida" 
                value={value} 
                onChange={(event)=>{
                    setValue(event.target.value ?? '')
                    // if(error) setError(false);
                }}
                />
            <button onClick={()=>{
                setLoading(!loading)
            }}>Comprobar</button>
        </div>
    )
}

export {UseState}