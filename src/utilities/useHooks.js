import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'

/* Checks the page location (toggle sidebar detail) */
export const usePageLocation = () => {
  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  const checkLocation = () => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }

  useEffect(checkLocation, [location])
}

/* Auto hide sidebar when a nav link is cliked */
export const useMenu = () => {
  const location = useLocation()
  const { setIsMenuOpen } = useContext(CatStateContext)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(closeMenu, [location])
}
