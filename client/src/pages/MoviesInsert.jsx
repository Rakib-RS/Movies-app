import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`
const Label = styled.label`
    margin: 5px;
`
const InputText = styled.input.attrs({
    className: 'form-control'
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: 'btn btn-primary'
})`
margin: 15px 15px 15px 5px;
`
const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
margin: 15px 15px 15px 5px;
`
class MoviesInsert extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            ratting : '',
            time: ''
        }
    }
    handleChangeInputName = async event =>{
        const name = event.target.value
        this.setState({name})
    }
    handleChangeInputRating = async (event) =>{
        const ratting = event.target.validity.valid
        ? event.target.value : this.state.ratting
        this.setState({ratting})
    }
    handleChangeInputTime = async (event) => {
        const time = event.target.value
        this.setState({time})
    }
    handleIncludeMovie = async ()=>{
        const {name,ratting,time} = this.state;
        const arrayTime = time.split('/');
        const payload = {name,ratting,time: arrayTime};
        await api.insertMovie(payload).then( (res) =>{
            window.alert('Movie Created Succesfully');
            this.setState({
                name:'',
                ratting:'',
                time:''
            })
        })
    }
    
    render(){
        const {name,ratting,time} = this.state;
        return(
            <Wrapper>
              <Title>Create Movie</Title>
              <Label>Name:</Label>
              <InputText
                type="text"
                value={name}
                onChange = {this.handleChangeInputName}
              
              />
             <Label>Rating:</Label>
             <InputText
                type = "number"
                step= "0.1"
                lang= "en-us"
                min="0"
                max="10"
                pattern="[0-9]+([,\.][0-9]+)?"
                value = {ratting}
                onChange = {this.handleChangeInputRating}
             />
             <Label>Time:</Label>
             <InputText
                type="text"
                value={time}
                onChange = {this.handleChangeInputTime}
             />
              <Button onClick={this.handleIncludeMovie}>ADD Movie</Button>
              <CancelButton href='/movies/list'>Cancel</CancelButton>
              
            </Wrapper>
        )
    }
}

export default MoviesInsert