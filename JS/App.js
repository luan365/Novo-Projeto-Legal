import React, {component} from 'react';

import Card from './layout/Card.jsx'
import propriedades from './Componentes/Propriedades.jsx'
import OlaMundo from './Componentes/OlaMundo.jsx'

class App extends Component {
    render() {
        return(
            <div>
                <card titulo = "Título do Card" />
                
                <h1> Propriedades </h1>
                <Propriedades nome = "Luan" sobrenome = "Ferreira" idade = {16}/> 
                
                <h1> Olá mundo! </h1>
                <OlaMundo /> 
                </div>
        )
    }
}
export default App;