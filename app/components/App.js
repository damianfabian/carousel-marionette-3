import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

const view = ItemView({ CUR_PAGE: 2, PAGINATION: 2 })
export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new view());
  }
});
