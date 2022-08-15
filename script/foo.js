let x = 5

const createElem = (tag, attr, dataset) => {
  const elem = document.createElement(tag);

  Object.assign(elem, attr);

  

  Object.assign(elem.dataset, dataset);
    

  return elem;
};


const p1 = createElem('p', {
  className: 'text',
  textContent: 'Привет JS1',
  title: 'Наведи мышкой',
  id: 'привет'
})

const p2 = createElem('p', {
  className: 'text',
  textContent: 'Привет JS2',
  title: 'Наведи мышкой',
  id: 'привет',
}, {id: 'sdfsdf'})

console.log(p2);