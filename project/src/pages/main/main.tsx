function Main(): JSX.Element {
  return (
    <div>
      <header className="body__header header">
        <nav className="footer__menu menu">
          <ul className="menu__menu-list menu-list">
          </ul>
        </nav>
        <div className="header__intro intro">
          <div className="intro-photo-wrapper">
            <img className="intro-picture-1" src="img/guitar.webp" alt="Гитара" />
          </div>
          <div className="intro-content">
            <h3 className="intro-description">Катровский & G</h3>
            <h2 className="intro-name">Гитарные<br/>вечера</h2>
            <h1 className="intro-name visually-hidden">Катровский Роман</h1>

            <button
              onClick={() => {
                const contactsSection = document.querySelector('.footer');
                if (contactsSection) {
                  contactsSection.scrollIntoView({ behavior: 'smooth' });
                }}}
              type="button"
              className="intro-hobby button"
            >Контакты
            </button>

          </div>
        </div>
      </header>

      <main className="page__main main">
        <section className="main__records records">
          <h2 className="records-title main-big-title">Композиции.</h2>
          <div className="records__records-list records-list">

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Ozzy O. & Randy R.</h3>
              <p className="composition-title">Goodbye To Romance</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/ozzy-osbourne.webp">
                <source src="records/GoodbyeToRomance.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">27 августа 2023</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Joe Zawinul</h3>
              <p className="composition-title">Mercy Mercy Mercy</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/joe-zawinul.webp">
                <source src="records/MercyMercyMercy.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">08 июля 2023</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Ray Charles</h3>
              <p className="composition-title">Hit The Road Jack</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/ray-charles.webp">
                <source src="records/HitTheRoadJack.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">08 июля 2023</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Queen</h3>
              <p className="composition-title">Bohemian Rhapsody</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/queen.webp">
                <source src="records/BohemianRhapsody.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">19 августа 2022</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Lalo Schifrin</h3>
              <p className="composition-title">Mission Impossible</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/lalo-schifrin.webp">
                <source src="records/MissionImpossible.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">16 сентября 2022</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Pink Floyd</h3>
              <p className="composition-title">Shine On You Crazy Diamond (Part V)</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/pink-floyd.webp">
                <source src="records/ShineOnYouCrazyDiamond.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">11 ноября 2022</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Europe</h3>
              <p className="composition-title">The Final Countdown</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/europe.webp">
                <source src="records/TheFinalCountdown.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">11 октября 2022</p>
            </section>

            <section className="records-list__composition composition">
              <h3 className="composition-band main-middle-title">Scorpions</h3>
              <p className="composition-title">Still Loving You</p>
              <video className="composition-video" controls preload="none" poster="img/compositions/scorpions.webp">
                <source src="records/StillLovingYou.webm" type="video/webm" />
              </video>
              <p className="composition-date visually-hidden">24 сентября 2022</p>
            </section>

          </div>

        </section>

      </main>

      <footer className="body__footer footer footer--hobby">
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

      <button type="button" className="button button--up">
        <img src="img/rocket.png" width="100" height="100" alt="ракетка" />
      </button>

    </div>
  );
}

export default Main;
