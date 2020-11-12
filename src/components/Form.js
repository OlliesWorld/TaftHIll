import React from 'react'

import '../assets/sass/Form.css'

export default ({
    name = 'Contact',
    subject = '', // optional subject of the notification email
    action = '',
}) => (

        <form
            name="contact"
            method="post"
            data-netlify-recaptcha="true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="Form"
            action="/thanks"
        >
            <label htmlFor="nameInput" className="Form--Title">Send us a Message</label>
            <label className='Form--Label'>
                <input
                    className='Form--Input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    required
                />
            </label>
            <label className='Form--Label'>
                <input
                    className='Form--Input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                />
            </label>

            <label className='Form--Label'>
                <textarea
                    className='Form--Input Form--Textarea'
                    placeholder='Message'
                    name='message'
                    rows='10'
                    required
                />
            </label>
            <input type='text' name='_gotcha' style={{ display: 'none' }} />
            {!!subject && <input type='hidden' name='subject' value={subject} />}
            <input type='hidden' name='form-name' value={name} />
            <input
                className='Button Form--SubmitButton'
                type='submit'
                value='Contact'
            />
        </form>
    )