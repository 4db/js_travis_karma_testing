class Library {
  constructor() {
    const element = document.createElement('div');
    element.style.backgroundColor = 'teal';
    element.style.width = '250px';
    element.style.height = '250px';
    element.setAttribute('foo', 'bar');
    element.classList.add('box');
    return element;
  }
}