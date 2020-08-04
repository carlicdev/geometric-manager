import React, { useContext } from 'react'
import SingleEmail from './SingleEmail'
import { EmailContext } from '../../email.context'

const EmailsList = () => {
    const { emails } = useContext(EmailContext);
    return (
        <div className='container'>
            <div className='row'>
                {
                    emails.map(email => {
                        return <SingleEmail key={email._id} email={email} />
                    })
                }
            </div>
        </div>
    )
}

export default EmailsList
