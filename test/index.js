const expect = require('chai').expect;

const palindromes = [
  'Bob', 
  'I, man, am regal - a German am I',
  'Never odd or even',
  'If I had a hi-fi',
  'Madam, I\'m Adam',
  'Too hot to hoot',
  'No lemons, no melon',
  'Too bad I hid a boot',
  'Lisa Bonet ate no basil',
  'Warsaw was raw',
  'Was it a car or a cat I saw?'
];

const notPalindromes =[
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Ut interdum arcu non accumsan sollicitudin.',
  'Vivamus a metus in velit pulvinar feugiat sit amet ac arcu.',
  'Nunc euismod magna in felis viverra elementum.',
  'Ut finibus tellus imperdiet dolor bibendum, a sagittis lorem cursus.'
];

describe('#Palindrome', ()=> {
  const palindrome = require('../');

  describe('when testing things which are palindromes', () => {
    it('should return true', () => {
      palindromes.forEach((text) => {
        expect(palindrome(text), text).to.be.true;
      });
    });
  })

  describe('when testing things which are not palindromes', ()=> {
    it('should return false', () => {
      notPalindromes.forEach((text) => {
        expect(palindrome(text), text).to.be.false;
      });
    });
  })
})