import React , {Component} from 'react'
import styled from 'styled-components'
import api from '../api'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import react table
//import ReactTable from "react-table";
//import 'react-table/react-table.css'
//import ReactTable from "react-table";
 
const Wrapper = styled.div`
    padding : 0 40px 40px 40px;
`

class MoviesList extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isloading: false,
            columnDefs: [{
                headerName: "Make", field: "make"
              }, {
                headerName: "Model", field: "model"
              }, {
                headerName: "Price", field: "price"
              }],
              rowData: [{
                make: "Toyota", model: "Celica", price: 35000
              }, {
                make: "Ford", model: "Mondeo", price: 32000
              }, {
                make: "Porsche", model: "Boxter", price: 72000
              }]
        }
    }
    componentDidMount = () =>{
        this.setState({isloading:true})
        api.getAllMovies().then(movies =>{
            this.setState({
                movies: movies.data.data,
                isloading:false
            })
        })
        
    } 


    render(){
        const {movies} = this.state
        console.log(movies);
        console.log('TCL : MoviesList -> render -> movies',movies);
        const columns = [
            {
                headerName: "ID",
                field: '_id',
                
            },
            {
                headerName:'Name',
                field: 'name',
            },
            {
                headerName:'Rating',
                field: 'rating',
                
            }
        ]
        
        return(
            <Wrapper>
                <div
                    className="ag-theme-balham"
                    style={{
                    height: '800px',
                    width: '100%' }}
                >
                    <AgGridReact
                    columnDefs={columns}
                    rowData={movies}>
                    </AgGridReact>
                </div>
            </Wrapper>
        )
    }
}
export default MoviesList;