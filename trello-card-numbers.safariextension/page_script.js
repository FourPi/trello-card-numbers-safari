var TCN_CARD_NUMBER = 'card-number';
var CARD_TITLE = 'card-detail-title-assist js-title-helper';

function copyCardNumberAndTitle()
{
    var cardNumber = '#' + document.getElementsByClassName(TCN_CARD_NUMBER)[0].innerHTML;
    var title = document.getElementsByClassName(CARD_TITLE)[0].innerHTML;
    
    window.prompt('Copy to clipboard: Ctrl+C, Enter',  cardNumber + ', ' + title);
}