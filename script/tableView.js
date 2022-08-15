import { tableGoods } from './elems.js'
import { currencyFormatRUB } from './utils.js';


export const renderRow = ({id, title, category, price}) => {
  const goodsRow = document.createElement('tr');
  goodsRow.classList.add('table-row', 'table-goods-item');
  

  goodsRow.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
      <button class="btn-table btn-delete" data-id=${id}>
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
      <button class="btn-table btn-edit" data-id=${id}>
          <svg width="30" height="30">
            <use xlink:href="#edit" />
          </svg>
        </button>
    </td>
  `;

  tableGoods.append(goodsRow);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';

  goods.forEach(renderRow)
}