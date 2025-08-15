const { JSDOM } = require('jsdom');
const { toggleMenu } = require('./scripts.js');

test('toggleMenu switches hidden and block classes', () => {
  const dom = new JSDOM(`<!DOCTYPE html><div id="menu" class="hidden"></div>`);
  const menu = dom.window.document.getElementById('menu');
  toggleMenu(menu);
  expect(menu.classList.contains('hidden')).toBe(false);
  expect(menu.classList.contains('block')).toBe(true);
});
