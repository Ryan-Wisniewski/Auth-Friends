import React from 'react'

const User = ({name}) => {
    console.log('props', name)
    return (
        <div>
            <p>{name}</p>
            <p></p>
            <p></p>
        </div>
    )
}
export default User