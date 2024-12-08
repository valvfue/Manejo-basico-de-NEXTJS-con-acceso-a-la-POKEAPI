'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const translations = {
  es: { title: 'Aplicación Pokémon', home: 'Inicio', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' },
  en: { title: 'Pokemon App', home: 'Home', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' },
  fr: { title: 'Application Pokémon', home: 'Accueil', gen1: 'Gen 1', gen2: 'Gen 2', gen3: 'Gen 3' },
};

export default function RootLayout({ children }) {
  const [lang, setLang] = useState('es');
  const dict = translations[lang];

  return (
    <html lang={lang}>
      <body>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">{dict.title}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">{dict.home}</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="success">{dict.gen1}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/gen1">{dict.gen1}</Dropdown.Item>
                  <Dropdown.Item href="/gen2">{dict.gen2}</Dropdown.Item>
                  <Dropdown.Item href="/gen3">{dict.gen3}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Nav>
              <button onClick={() => setLang('es')}>ES</button>
              <button onClick={() => setLang('en')}>EN</button>
              <button onClick={() => setLang('fr')}>FR</button>
            </Nav>
          </Container>
        </Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}



