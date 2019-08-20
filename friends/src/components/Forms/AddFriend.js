import React, { Component } from 'react'
import {Form, Field, Formik} from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

class AddFriend extends Component {
    state = {
        newUser: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
        // console.log('onchange',this.state)
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.newUser)
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', this.state.newUser)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err.message)})
    }

    render() {
        return (
            <>
            <Formik>
                <Form onSubmit={this.onSubmit}>
                    <Field type="text" name="name" value={this.state.name} onChange={this.handleChange}/>              
                    <Field type="text" name="age" value={this.state.age} onChange={this.handleChange}/>
                    <Field type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}
export default AddFriend