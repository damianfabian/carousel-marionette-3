import Marionette from 'backbone.marionette'
import imageTemplate from '../templates/image.jst'

const imageView = (size = 4) => {
    const cols = Math.ceil(12/size)
    return Marionette.View.extend({
        tagName: 'div',

        template: imageTemplate,

        className: `block-box col-md-${cols} col-lg-${cols} col-sm-${cols} active`,
        
        initialize: function(options) {
            this.src = options.src;
        }
    })
}
export default imageView
