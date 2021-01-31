import React, { Component } from 'react';

import './input.css';


export default class Input extends Component{

    constructor(props){
        super(props);

        this.inputRef = React.createRef()
        this.inputRef2 = React.createRef()

        this.state = {
            name: '',
            icon: '-',
            regexp : /^[0-9\b]+$/
        }

    }


    handle = (event) => {
        let data = event.target.value;

        data = data.replace(/\D+/g, '');

        event.target.value = data;

        if(this.state.regexp.test(data)){

            if(data.length === 0 || data.length === 1){
                 this.setState(prevState => {
                     return {name: prevState.name = ''}
                 })
            }
            if(data.length === 2){
                this.setState(prevState => {
                    return {name: prevState.name = 'Unknown'}
                })
                this.inputRef2.current.focus()
            }
            if(Number(data) === 73 || Number(data) === 63 || Number(data) === 93){
                 this.setState(prevState => {
                     return {name: prevState.name = 'Lifecell'}
                 })
                 this.inputRef2.current.focus()
            }
            if(Number(data) === 50 || Number(data) === 66 || Number(data) === 95 || Number(data) === 99){
                 this.setState(prevState => {
                     return {name: prevState.name = 'Vodafone'}
                 })
                 this.inputRef2.current.focus()
            }
            if(Number(data) === 67 || Number(data) === 68 || Number(data) === 96 || Number(data) === 97 || Number(data) === 98){
                this.setState(prevState => {
                    return {name: prevState.name = 'Kyivstar'}
                })
                this.inputRef2.current.focus()
            }
            if(Number(data) === 91){
                this.setState(prevState => {
                    return {name: prevState.name = '3mob'}
                })
                this.inputRef2.current.focus()
            }
            if(Number(data) === 92){
                this.setState(prevState => {
                    return {name: prevState.name = 'People.net'}
                })
                this.inputRef2.current.focus()
            }
            if(Number(data) === 89 || Number(data) === 94){
                this.setState(prevState => {
                    return {name: prevState.name = 'intertelecom'}
                })
                this.inputRef2.current.focus()
            }
        
        }
        if(this.state.regexp.test(data) === false) {
            // event.target.value = '';
            
        }
    }

    handleSecond = (event) => {
        let data = event.target.value;

        data = data.replace(/\D+/g, '');

        event.target.value = data;

        if(this.state.regexp.test(data)){
            if(data.length === 7){
                this.setState(prevState => {
                    return {icon: prevState.icon = '✔️'}
                })
                // console.log('7')
            }
            if(data.length !== 7){
                this.setState(prevState => {
                    return {icon: prevState.icon = '-'}
                })
                // console.log('7')
            }
        }
        if(this.state.regexp.test(data) === false) {
            // event.target.value = data;
        }
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }


     render(){
        return <div>
            <span className="operator-name">{this.state.name}</span>
            <span>+38 0</span>
            <input 
                type="text" 
                className="operator-input"
                id='inp1'
                ref={this.inputRef}
                onChange={this.handle.bind(this)}
                />
            <span className="check-icon"> {this.state.icon} </span>
            <input type="text" 
                className="phone-input"
                ref={this.inputRef2}
                onChange={this.handleSecond.bind(this)}
                 />
        </div>;
    }
}