const component = new Library();

describe('Library', function() {
  let element;

  beforeEach(() => {
    document.body.appendChild(component);
    element = document.querySelector('.box');
  });

  it('Should be teal', function() {
      expect(element.style.backgroundColor).toBe('teal');
  });

  it('Should exist', function() {
      expect(element.nodeName).toBe('DIV');
  });

  it('Should be bar', function() {
      expect(element.getAttribute('foo')).toBe('bar');
  });
});