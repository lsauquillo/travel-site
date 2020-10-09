/*para dar funcionalidad a site-header__icon*/
class MobileMenu {
  constructor(){
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content')
    this.events();
    this.siteHeader = document.querySelector('.site-header');
  }

  events(){
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu(){
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
  }
}

export default MobileMenu;