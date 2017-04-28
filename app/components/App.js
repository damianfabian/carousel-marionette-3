import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

const view = ItemView({ PAGINATION: 3, CUR_PAGE: 2 })
export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new view());
  }
});
