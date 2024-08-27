import React from "react"


const SECURITY_CODE = 'paradigma';

class ClasState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: false,
            loading: false,
            value: ''
        }
    }

    

    componentDidUpdate(){
        if(!!this.state.loading){
            setTimeout(()=>{
                console.log("Ejecutando el efecto en la clase...");
                if(this.state.value.toLowerCase() === SECURITY_CODE.toLowerCase()){
                    this.setState({error: false, loading: false})
                }else{
                    this.setState({error: true, loading: false})
                }
                this.setState({loading: false})
            }, 3000)
        }
    }
    


    render(){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Ingresa el código de seguridad.</p>
                {(this.state.error && !this.state.loading)&& (
                    <p>
                        Código incorrecto.
                    </p>
                )}
                {this.state.loading && (
                    <p>
                        Validando...
                    </p>
                )}
                <input 
                    placeholder="Digita el código de seguridad" 
                    value={this.state.value}
                    onChange={(event)=>{
                        this.setState({value: event.target.value})
                    }}
                />
                <button onClick={()=> this.setState({loading: true})}>Comprobar</button>
            </div>
        )
    }
}


export {ClasState}