import '/src/components/Socials/socials.css'
import Github from './Github'
import LinkedIn from './LinkedIn'
import Email from './Email'

import { useState, useEffect } from 'react'

export default function Socials() {
  const emailAddress = 'taylorjfinelli@gmail.com';
  const message = 'Email copied to clipboard';
  const [showMessage, setShowMessage] = useState(false);
  const copyEmail = () => {
    // attempt copy the message to the clipboard
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        console.log('Message copied to clipboard:', emailAddress);
        setShowMessage(true)
      })
      .catch((error) => {
        console.error('Unable to copy message to clipboard', error);
      });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [showMessage]);

  return (
    <>
      <div className='socials-block'>
        <div className="icon-block">
          <Github />
          <LinkedIn />
          <div className='email' onClick={copyEmail}>
            <Email />
          </div>
        </div>
        <p className={`message ${showMessage ? 'show' : ''}`}>{message}</p>
      </div>
    </>
  )
}