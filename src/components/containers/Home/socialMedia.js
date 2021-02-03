import React from 'react'
import { SocialMediaBlock } from '@components/styles/Home/socialMedia'

/* Svg Icons */
import { ReactComponent as GithubIcon } from '@images/socialMedia/github.svg'
import { ReactComponent as InstagramIcon } from '@images/socialMedia/instagram.svg'
import { ReactComponent as MediumIcon } from '@images/socialMedia/medium.svg'

const SocialMedia = () => (
  <SocialMediaBlock>
    <a href="https://github.com/adrianwangdev/" target="_blank" rel="noreferrer noopener"><GithubIcon /></a>
    <a href="https://www.instagram.com/adrianwangdev/" target="_blank" rel="noreferrer noopener"><InstagramIcon /></a>
    <a href="https://adrianwangdev.medium.com/" target="_blank" rel="noreferrer noopener"><MediumIcon /></a>
  </SocialMediaBlock>
)

export default SocialMedia
