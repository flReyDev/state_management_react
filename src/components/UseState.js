import React, { useEffect, useState } from "react"

const SECURITY_CODE = 'paradigma';


function UseState(props){

    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false
    })




    useEffect(()=>{
        if(!!state.loading){
            setTimeout(()=>{
                console.log("Ejecutando el efecto...");
                console.log(state.value);
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        loading: false,
                        error: false
                    })
                    // setError(true);
                }else{
                    setState({
                        ...state,
                        loading: false,
                        error: true,
                    })
                }
                // setLoading(false);
                
            }, 3000)
        }
    }, 
    [state.loading])
    return (
        <div>
            <h2>Eliminar {props.name}</h2>
            <p>Ingresa el código de seguridad.</p>

            {(state.error && !state.loading) && (
                <p>
                    Código incorrecto.
                </p>
            )}
            
            {state.loading && (
                <p>
                    Cargando....
                </p>
            )}

            <input 
                placeholder="Digita el codigo de segurida" 
                value={state.value} 
                onChange={(event)=>{ 
                    setState({
                        ...state,
                        value: event.target.value
                    })
                }}
                />
            <button onClick={()=>{
                setState({
                    ...state,
                    loading: true
                })
            }}>Comprobar</button>
        </div>
    )
}

export {UseState}