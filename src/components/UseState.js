import React, { useEffect, useReducer, useState } from "react"
import { reducer, actionTypes } from "./UseReducer";

const SECURITY_CODE = 'paradigma';


function UseState(props){

    const initialValue ={
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false
    }


    const [state, dispatch] = useReducer(reducer, initialValue)


    useEffect(()=>{
        if(!!state.loading){
            setTimeout(()=>{
                console.log("Ejecutando el efecto...");
                console.log(state.value);
                if(state.value === SECURITY_CODE){
                    dispatch({type: actionTypes.Confirm})
                }else{
                    dispatch({type: actionTypes.Error})
                }
            }, 3000)
        }
    }, 
    [state.loading])

    if(!state.deleted && !state.confirmed){
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
                        dispatch({type: actionTypes.Write, payload: event.target.value })
                    }}
                    />
                <button onClick={()=>{
                    dispatch({type: actionTypes.Check})
                }}>Comprobar</button>
            </div>
        )
    }else if(!!state.confirmed && !state.deleted){
        return (
            <>
                <p>Confirmar acción</p>
                <p><strong>Esta seguro que quiere eliminar es State</strong></p>
                <button onClick={()=>{
                    dispatch({type: actionTypes.Deleted})
                }}>Si, eliminar</button>
                <button onClick={()=>{
                    dispatch({type: actionTypes.Reset})
                }}>Cancelar acción</button>
            </>
        )
    }else{
       return(
        <>
            <p>El Status <strong>{state.value}</strong> se elimino con exito!</p>
            <button onClick={()=>{
                    dispatch({type: actionTypes.Reset})
                }}>Resetear Acción</button>
        </>
       )
    }
   
}

export {UseState}