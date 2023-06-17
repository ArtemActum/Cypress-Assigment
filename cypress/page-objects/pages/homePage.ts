import BasePage from '../basePage'

export default class HomePage extends BasePage {
  static clickAuctions() {
    throw new Error('Method not implemented.')
  }
  // Elements
  logo = '.chr-header__link-site  svg'
  signIn = '.chr-header__user-zone .chr-button__text'

  // Page Object Methods
  open(path = '/') {
    super.open(path)
  }
}
