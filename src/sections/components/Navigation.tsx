import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Navbar, Nav} from "react-bootstrap";

const NavigationHome = ( { hidden }: { hidden?: boolean } ) => {
  return (
    <Navbar expand="sm" fixed='top' className={`centered-navbar border-bottom border-2 border-dark ${hidden ? 'hidden-nav' : 'visible-nav'}`}>
      <Navbar.Brand href="#home" className="px-4">Kyle Chiem</Navbar.Brand>
      <Navbar.Toggle aria-controls="centered-navbar" />
      <Navbar.Collapse id="centered-navbar">
        <Nav className="mx-auto px-4">
          <Nav.Link href="#about" className="mx-2">About</Nav.Link>
          <Nav.Link href="#experience" className="mx-2">Experience</Nav.Link>
          <Nav.Link href="#project" className="mx-2">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}

const NavigationRest = ( { hidden } : { hidden?: boolean} ) => {
  return (
    <Navbar expand="sm" fixed='top' className={`${hidden ? 'hidden-nav' : 'visited-nav'}`}>
      <Navbar.Brand href='#home' className='px-4'>Kyle Chiem</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='mx-4'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='navbar-rest ms-auto mx-3'>
          <Nav.Link href="#about" className="mx-2">About</Nav.Link>
          <Nav.Link href="#experience" className="mx-2">Experience</Nav.Link>
          <Nav.Link href="#project" className="mx-2">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// Real navigation
const Navigation = () => {
  const [showHomeNav, setShowHomeNav] = useState(true);
  const [showRestNav, setShowRestNav] = useState(false);

  useEffect(() => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');

    const handleScroll = () => {
      if (!home || !about) return;

      const scrollY = window.scrollY;
      const hiddenPoint = home.offsetHeight / 8;
      const aboutTop = about.offsetTop;

      if (scrollY >= hiddenPoint) {
        setShowHomeNav(false);
      } else {
        setShowHomeNav(true);
      }

      if (scrollY >= aboutTop) {
        setShowRestNav(true);
      } else {
        setShowRestNav(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll)};
  }, []);

  return (
    <>
      <NavigationHome hidden={!showHomeNav} />
      <NavigationRest hidden={!showRestNav} />
    </>
  );
}

export default Navigation