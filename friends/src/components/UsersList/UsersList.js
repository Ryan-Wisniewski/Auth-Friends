import React, { Component } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import User from './User'

export default class UsersList extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.getData()
        console.log('REEE',this.state)
    }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => this.setState(
            {users: res.data.map(person => {
            console.log('person', person)
            return person
            }
        )}))
        .catch(err => console.log('ERROR: ',err.response))
    }

    // formatData = () => {
    //     console.log('lookHERE', this.state.users)
    //     this.state.users.map(person => {
    //         console.log('person2', person)
    //         return (
    //         <div>
    //             <p>{person.name}</p>
    //         </div>
    //         )
    //     })
    // }

    render() {
        const userList = this.state.users
        console.log('userList', userList)
        return (
            <div>
                <p>test</p>
                {userList.length !== 0 ? (
                userList.map(person => {
                    return (
                        <div>
                            <p>{person.name}</p>
                            <p>{person.age}</p>
                            <p>{person.email}</p>
                        </div>
                    )
                })) : (<p>isLoading</p>) 
                 }
            </div>
        )
    }
}
