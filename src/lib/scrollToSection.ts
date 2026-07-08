import { useNavigate, useLocation } from 'react-router-dom'

/**
 * HashRouter owns the whole URL fragment for routing, so plain `href="#id"`
 * anchors would be read as route paths. This scrolls directly when already
 * on the home page, or navigates home with the target section in state.
 */
export function useScrollToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  return (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }
}
