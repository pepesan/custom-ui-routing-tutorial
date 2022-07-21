import React from 'react';
import axios from "axios";
import "./CargaDatos.css";
class CargaDatos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {datos: []};
        //this.recarga();
    }
    recarga = () =>{ // Llamamos a Axios para hacer la petición web get a la dirección URL
        axios.get(`https://cursosdedesarrollo.com/pactometro/resultados.json`)
            .then(res => { // manejamos los datos de la petición
                this.setState({ datos: res.data }); // actualizamos el estado
            })
    }
    render() {
        return (
            <div>
                <h2>Listado de Partidos</h2>
                <button onClick={this.recarga}>
                    Carga
                </button>
                <div>
                    {this.state.datos.map((item) =>
                        <article key={item.nombre}>
                            <h3>{item.nombre}</h3>
                            <p>{item.dipu}</p>
                            <p><img className="logo-partido" alt="Logo partido" src={`https://cursosdedesarrollo.com/pactometro/img/${item.imagen}`}/></p>
                        </article>
                    )}
                </div>
            </div>
        );
    }
}

export default CargaDatos;