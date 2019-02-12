import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super()
    this.state = {
      students: []
    }
    
  }

  componentDidMount(props){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
      // console.log(this.props)
    })
  }

  render() {
    const mappedStudents = this.state.students.map(student =>{
      return(
        <Link key={student.id} to={`/student/${student.id}`}><h3 >{student.first_name} {student.last_name}</h3></Link>
        
        )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
        <Link to="/"><button>Back</button></Link>
      </div>
    )
  }
}