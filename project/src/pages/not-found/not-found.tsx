import { RefObject, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(): JSX.Element {

  const navigate = useNavigate();
  const routeToMainHandler = () => {
    navigate('/');
  };

  //скрытие кнопки ВВЕРХ, в зависимости от прокрутки окна
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]); //---

  //осветление кнопки ВВЕРХ при наведении мыши
  const upButtonRef: RefObject<HTMLButtonElement> = useRef(null);
  const fadeUpButton = () => {
    if (upButtonRef.current && scrollPosition > 100) {
      upButtonRef.current.style.opacity = '0.7';
    }
  };
  const lightenUpButton = () => {
    if (upButtonRef.current && scrollPosition > 100) {
      upButtonRef.current.style.opacity = '1';
    }
  }; //---

  //функционал кнопки ВВЕРХ
  const headerRef: RefObject<HTMLHeadElement> = useRef(null);
  const scrollToTop = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }; //---

  //функционал кнопки КОНТАКТЫ
  const contactsRef: RefObject<HTMLElement> = useRef(null);
  const scrollToContacts = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }; //---

  return (
    <div>
      <header className="body__header header" ref={headerRef}>
        <nav className="footer__menu menu">
          <ul className="menu__menu-list menu-list">
          </ul>
        </nav>
        <div className="header__intro intro">
          <div className="intro-photo-wrapper">
            <img className="intro-picture-1" src="img/guitar.webp" alt="Гитара" />
          </div>
          <div className="intro-content">
            <h3 className="intro-description">2021 - 2023</h3>
            <h2 className="intro-name">Гитарная<br/>разминка</h2>
            <h1 className="intro-name visually-hidden">Катровский Роман</h1>

            <button
              onClick={scrollToContacts}
              type="button"
              className="intro-hobby button"
            >Контакты
            </button>

          </div>
        </div>
      </header>

      <main className="page__main main">
        <section className="main__records records">
          <h2 className="records-title main-big-title">404 <br/>Страница не найдена.</h2>
          <button
            type="button"
            className="records__button button button--go-to-main"
            onClick={routeToMainHandler}
          >Вернуться на главную
          </button>
        </section>
      </main>

      <footer ref={contactsRef} className="body__footer footer footer--hobby">
        <h4 className="footer-title">Контакты</h4>
        <img className="footer-contact" src="img/contacts.webp" alt="Картинка с е-мейлом" />

        <div className="footer__social social">
          <ul className="social-list">
            <li className="social-item social-item--ok">
              <a href="https://ok.ru/profile/128961659910" aria-label="одноклассники" className="">
                <img src="img/ok.svg" width="50" height="50" alt="иконка одноклассники" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://vk.ru/id78931741" aria-label="в контакте" className="">
                <img src="img/vk.svg" width="50" height="50" alt="иконка в контакте" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__menu menu">
          <ul className="menu__menu-list menu-list">
          </ul>
        </nav>
      </footer>

      <button
        type="button"
        className="button button--up"
        style={{opacity: scrollPosition > 100 ? 1 : 0,
          cursor: scrollPosition > 100 ? 'pointer' : 'auto'}} //видимость кнопки в зависимости от прокрутки окна
        onClick={scrollToTop}
        onMouseEnter={fadeUpButton}
        onMouseLeave={lightenUpButton}
        ref={upButtonRef}
      >
        <img src="img/rocket.png" width="100" height="100" alt="ракетка" />
      </button>

    </div >
  );
}

export default NotFound;
