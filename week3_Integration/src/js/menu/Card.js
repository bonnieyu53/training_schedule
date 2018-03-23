import Li from './Li';

export default class Card {
  constructor(menu) {
    const $tpGroupCard = $($('#tp-group-card').html());
    const $GroupCard = $tpGroupCard.find('.group-card');
    const $groupHard = $GroupCard.find('.group-header');
    const $groupLink = $tpGroupCard.find('.group-link');
    $groupHard.find('i').addClass(`${menu.menuIcon}`);
    $groupHard.find('.header-name').text(`${menu.menuName}`);

    menu.subMenu.forEach((submenu) => {
      const $Li = new Li(submenu);
      $groupLink.append($Li.render());
    });

    this.Card = $GroupCard;

    $GroupCard.click(() => {
      $('.group-card').removeClass('active');
      $GroupCard.toggleClass('active');
    });
    $groupHard.click(() => {
      $('a').removeClass('focus');
    });
  }

  render() {
    return this.Card;
  }
}
