import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            ratting: '',
            time: '',
        }
    }


    render(){
        const {name,ratting,time} = this.state;
        return(
            <Wrapper>
                <Title>Movie Upadte</Title>
                <Label>Name:</Label>
                <InputText/>
                <Label>Rating:</Label>
                <InputText/>
                <Label>Time:</Label>
                <InputText/>
                <Button>Update</Button>
                <CancelButton href='/movies/list'>Cancel</CancelButton>
            </Wrapper>

        )
    }
}

export default MoviesUpdate