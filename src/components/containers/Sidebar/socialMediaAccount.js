import React, { useState, useRef } from 'react'
import SocialMediaAccountBlock from '@components/styles/Sidebar/socialMediaAccount'

const SocialMediaAccount = () => {

  // Social media account
  const account = '@adrianwangdev'

  const copyTips = useRef()

  const copyAccount = () => {
    const input = document.getElementById('input')
    input.value = account
    input.select()
    document.execCommand('copy')
    copyTips.current.children[0].innerText = 'Copied !'
  }

  const showTips = () => {
    copyTips.current.children[0].innerText = 'Click to copy'
    copyTips.current.style.display = 'block'
  }

  const closeTips = () => {
    copyTips.current.style.display = 'none'
  }

  return (
    <>
      <SocialMediaAccountBlock>
        <h3>Adrian Wang</h3>
        <p
          onMouseEnter={showTips}
          onMouseOut={closeTips}
          onClick={copyAccount}
        >{account}</p>

        <div ref={copyTips}>
          <span>Click to copy</span>
        </div>
        
        {/* This input just for copyAcoount function */}
        <input type='text' id='input' />
      </SocialMediaAccountBlock>
    </>
  )
}

export default SocialMediaAccount
