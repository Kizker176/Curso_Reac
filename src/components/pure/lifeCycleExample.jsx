/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * metodos de ciclo de vida
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONTRUCTOR: Cuando se instacia el componente');
    }
    componentWillMount() {
        console.log('WillMount: antes del montaje del componete');
    }

    componentDidMount() {
        console.log('DidMount: justo del montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
     /**
      * Controlar si el componente debe o no actilizarse  
      */
     // return true / false   
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: justo antes de actulizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: justo despues de actulizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: justo antes de desaparecer');
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample
