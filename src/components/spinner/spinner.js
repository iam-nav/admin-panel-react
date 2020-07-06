import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './spinner.css'

export default class spinner extends Component {

    componentDidMount(){

    }
    
    render() {
        return (
            <>
            <div className="spinner">
                <Spinner  animation="grow" size="sm" />
                <Spinner animation="grow" />
                <h5>Loading</h5>
            </div>
</>
        )
    }
}
