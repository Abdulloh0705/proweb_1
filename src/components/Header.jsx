const Header = () => {
  return (
    <>
      <header>
        <div className="menu">
          <div className="container">
            <div className="menu__box">
              <a href="" className="menu__logo"><img src="PROWEB.png" alt="" /></a>
              <button class="nav_menu">
                        <img src="menu.png" alt="" />
                    </button>
              
              <ul className="menu__list">
                <li className="menu__item"><a href="" className="menu__link">Обо мне</a></li>
                <li className="menu__item"><a href="" className="menu__link">Мои работы</a></li>
                <li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dobro">
          <div className="dobro_work">
            <h2 className="dobro_title">Добро пожаловать на мой сайт</h2>
          <a href="" className="tel_link">Позвонить</a>
          </div>
          
        </div>
      </header>
    </>
  )
}
export default Header