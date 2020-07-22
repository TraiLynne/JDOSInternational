import React from 'react';

export const Form = () => {
    return (
        <div>
            <h1>Get in Touch</h1>
            <form>
                <input type='text' name='FirstName' placeholder='First Name' required/>
                <input type='text' name='LastName' placeholder='Last Name' required/>
                <input type='email' name='email' placeholder='E-Mail' required/>
                <input type='tel' name='Phone' placeholder='Phone Number' required/>
                <input type='text' name='message' placeholder='Message' required/>

                <input type='submit'/>
            </form>
        </div>
    )
}