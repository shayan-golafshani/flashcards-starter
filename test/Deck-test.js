const chai = require('chai');
const expect = chai.expect;

    const Card = require('../src/Card');
    const Deck = require('../src/Deck');

describe('Deck', () => {

  let card1, card2, card3, card4;

  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card4 = new Card(99, 'What is Obama\'s age?', ['59', '65', '48'], '59');
    
   });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should know how many cards are in the deck ', () => {
    
    const deck = new Deck([card1, card2, card3]);
    const cardCount = deck.countCards();

    expect(cardCount).to.equal(3);
  });

  it('should be able to have decks of different length ', () => {
    const deck = new Deck([card1, card2, card3, card4]);
    const cardCount = deck.countCards();
    
    expect(cardCount).to.equal(4);
  });

  it('should be able to have default deck length ', () => {
    const deck = new Deck([]);
    const cardCount = deck.countCards();
    
    expect(cardCount).to.equal(0);
  });
});
