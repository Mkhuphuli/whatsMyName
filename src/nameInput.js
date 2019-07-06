import React, {Component} from 'react'

class NameInput extends Component{
    state={
        name: ""
    }

    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        document.getElementById("form-nameInput").reset()

    }


    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.handleSubmit} id="form-nameInput">
                    <label htmlFor="name">Your Name<br></br></label>
                    <input type="text" onChange={this.handleChange}/>
                    <div className="name-display">{this.state.name}</div>
                </form>
                

            </div>

        )
    }
}

export default NameInput