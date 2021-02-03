import React from 'react'
import SocialMediaAccountBlock from '@components/styles/Sidebar/socialMediaAccount'

const SocialMediaAccount = () => {

  // Social media account
  const account = '@adrianwangdev'

  const copyAccount = () => {
    const input = document.getElementById('input')
    input.value = account
    input.select()
    document.execCommand('copy')
  }

  return (
    <>
      <SocialMediaAccountBlock>
        <h3>Adrian Wang</h3>
        <p onClick={copyAccount}>{account}</p>
        
        {/* This input just for copyAcoount function */}
        <input type='text' id='input' />
      </SocialMediaAccountBlock>
    </>
  )
}

export default SocialMediaAccount
