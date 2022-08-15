import { tableRender } from './tableView.js';
import { getGoods } from './serviceAPI.js';
import { modalController } from './modalController.js';
import { modal, tableGoods } from './elems.js';

export const tableController = async () => {

  modalController({
    delegation: {
      parent: tableGoods,
      target: '.btn-edit',
    }
  })

  const goods = await getGoods();
  tableRender(goods)
};