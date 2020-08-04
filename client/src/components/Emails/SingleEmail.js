import React from 'react'

const SingleEmail = ({email}) => {
    return (
        <div className='card col-md-6'>
            <div className='card-header'>
                <h6>{email.status}</h6>
            </div>
            <div className='card-body'>
                <p className='card-text'>{email.name}</p>
                <p className='card-text'>{email.email}</p>
                <p className='card-text'>{email.message}</p>
                <p className='card-text'>{email.date}</p> 
            </div>
        </div>
    )
}

export default SingleEmail
