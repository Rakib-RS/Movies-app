import React ,{Component} from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    position: absolute;
    right: 10px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
    bottom : 0px;
`
class About extends Component{
    render(){
        return(
           <Wrapper>
               Developed By : <br/>
               Name: Rakib <br/>
                <span> Bsc in Computer Science and Engineering (3rd Year) </span><br/>
                    <span>University Of Rajshahi</span><br/>
                Email: rakib.rscse@gmail.com
                <br/><a href="https://www.github.com/rakib-rs/" target="_blank">Visit My Github</a>

           </Wrapper>
        )
    }
}
export default About;