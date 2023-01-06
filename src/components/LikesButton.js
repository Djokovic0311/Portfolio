import { render } from "@testing-library/react";
import React from "react";
import {
    AiOutlineLike,
  
  } from "react-icons/ai";
import data from "./data.js";
class LikesButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes : data[0].likes
        }
        // this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes() {
        this.setState({
            likes : ++ this.state.likes
        })
        
    }
    render() {
        return(
            <div className="likes-button-component">
                <button type="button" className="btn btn-outline-primary btn-lg" 
                    // onClick={this.increaseLikes}
                    onClick={() => { this.increaseLikes() }}
                >
                    <AiOutlineLike/>
                     {this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton
