import React, { createContext, useState, useEffect } from 'react';

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
    const [ emails, setEmails ] = useState([]);


    useEffect(() => {
        console.log(emails);
        if(emails.length === 0 ) {
            getEmails();
        }
    });

    const getEmails = async () =>{
        await fetch('/emails')
            .then(result => result.json())
            .then((result) => {
                setEmails(result);
            }).catch(err => console.log(err));
    }

    return (
        <EmailContext.Provider value={{emails}}>
            {props.children}
        </EmailContext.Provider>
    );
};

export default EmailContextProvider;