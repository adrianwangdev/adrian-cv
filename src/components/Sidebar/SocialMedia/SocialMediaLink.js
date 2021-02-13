import React from 'react'

/* Svg Icons */
import { ReactComponent as GithubIcon } from '@images/socialMedia/github.svg'
import { ReactComponent as InstagramIcon } from '@images/socialMedia/instagram.svg'
import { ReactComponent as MediumIcon } from '@images/socialMedia/medium.svg'

const SocialMediaLink = () => (
  <>
    <a href="https://github.com/adrianwangdev/" target="_blank" rel="noreferrer noopener"><GithubIcon /></a>
    <a href="https://www.instagram.com/adrianwangdev/" target="_blank" rel="noreferrer noopener"><InstagramIcon /></a>
    <a href="https://adrianwangdev.medium.com/" target="_blank" rel="noreferrer noopener"><MediumIcon /></a>
  </>
)

export default SocialMediaLink
