import React from 'react'
import './Loginform.css'
import Navigationbar from './Navigationbar'


class Applicationform extends React.Component {

  constructor(props) {
    super(props)
    this.state={

      fields:["Name:","Enrollment id:","Department:","Email id:","CGPA:","Statement Of Purpose:"]
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {

      event.preventDefault();
    }

    render() {


      return (
        <div>
        <Navigationbar />
        <div class="form-container">
          <div class="form-header">
            <h4>Enter Your Details</h4>
          </div>
            <form onSubmit={this.handleSubmit}>
            {this.state.fields.map(field =>(
              <div>
              {field}
              <input type="text" name={field} value={this.state.value} onChange={this.handleChange} />
              </div>
            ))}

            <br/>

            <button class="btn btn-primary" type="submit">Submit</button>

            </form>
        </div>
        </div>

            )


      }

}


export default Applicationform
