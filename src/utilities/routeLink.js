/* Svg Icons */
import { ReactComponent as HomeIcon } from '@images/nav/home.svg'
import { ReactComponent as AboutIcon } from '@images/nav/about.svg'
import { ReactComponent as WorkIcon } from '@images/nav/work.svg'
import { ReactComponent as ProjectIcon } from '@images/nav/project.svg'
import { ReactComponent as ContactIcon } from '@images/nav/contact.svg'

const routeLink = [
  { text: 'Home', icon: HomeIcon, link: '/', exact: true },
  { text: 'About', icon: AboutIcon, link: '/about', exact: false },
  { text: 'Experience', icon: WorkIcon, link: '/experience', exact: false },
  { text: 'Project', icon: ProjectIcon, link: '/project', exact: false },
  { text: 'Contact', icon: ContactIcon, link: '/contact', exact: false },
]

export {
  routeLink
}
