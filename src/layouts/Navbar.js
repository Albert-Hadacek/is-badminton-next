import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { BrowserView, MobileView } from 'react-device-detect'

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(true)

  return (
    <>
      <Menu>
        <Link href="/" className="menu-item">
          <a id="home" href="/" className="bm-item">
            Seznam turnajů
          </a>
        </Link>
        <Link href="/" className="menu-item">
          <a id="home" href="/" className="bm-item">
            Vytvořit turnaj
          </a>
        </Link>
        <Link href="/" className="menu-item">
          <a id="home" href="/" className="bm-item">
            Moje turnaje
          </a>
        </Link>
        <Link href="/" className="menu-item">
          <a id="home" href="/" className="bm-item">
            Odhlásit
          </a>
        </Link>

        {isAdmin && (
          <>
            <br />
            <Link href="/" className="menu-item">
              <a id="home" href="/" className="bm-item">
                Žádanky
              </a>
            </Link>
            <Link href="/" className="menu-item">
              <a id="home" href="/" className="bm-item">
                Správa uživatelů
              </a>
            </Link>
          </>
        )}
      </Menu>
      <div className="navbar-header">
        <BrowserView>
          <h1 className="navbar-header">IS - Badminton České Budějovice</h1>
        </BrowserView>
        <MobileView>
          <h1 className="navbar-header">IS - Badminton ČB</h1>
        </MobileView>
      </div>
    </>
  )
}

export default Navbar
