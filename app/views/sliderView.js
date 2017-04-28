import Bb from 'backbone'
import Marionette from 'backbone.marionette'
import imageView from '../views/imageView'

const SliderView = Marionette.CollectionView.extend({
    tagName: 'div',
    
    childView: function(model, parent) {
        return imageView(this.options.size)
    },

    className: 'carousel-container row',

    collection: new Bb.Collection(),

    childViewOptions: function(model, index) {
        // Get Random image per Block only once
        if(!model.attributes.src) {
            if(model.attributes.images) {
                model.attributes['src'] = model.attributes.images[_.random(0, model.attributes.images.length - 1)]
            }
        }
    }
})

export default SliderView
