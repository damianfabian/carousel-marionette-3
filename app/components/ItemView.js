import Bb from 'backbone'
import Marionette from 'backbone.marionette'
import API from '../libs/api.js'
import SliderView from '../views/sliderView'
import template from '../templates/item.jst'

/////// DEFAULTS //////////
let _options = {
    CUR_PAGE : 1,
    PAGINATION : 4,
    DELAY : 1000
} 
/////// END DEFAULTS //////////

const ImagesCollection = API.getImages()

const render = function (opts) {
    _options = Object.assign(_options, opts)
    let viewSlider = new SliderView({ collection: ImagesCollection, size: _options.PAGINATION })
    const TOTAL_PAGES = Math.ceil(ImagesCollection.length/_options.PAGINATION)

    return Marionette.View.extend({
        template: template,

        className: 'carousel',

        regions : {
            images: '.content',
            controls: '.controls'
        },

        ui: {
            prev: '.prev',
            next: '.next'
        },

        disableButton (button) {
            var el = this.getUI(button)
            el.addClass('disabled')
            el.attr('disabled', 'disabled')
        },

        enableButton (button) {
            var el = this.getUI(button)
            el.removeClass('disabled')
            el.removeAttr('disabled')
        },

        onRender () {
            this.disableButton('prev')
            this.showChildView('images', viewSlider)
        },

        onAttach () {
            const page = _options.CUR_PAGE 
            if(page > 1 && page <= TOTAL_PAGES) {
                this.changeBlocks(false, (page - 1) * 100)
                this.enableButton('prev')
            }
        },

        triggers: {
            'click button.prev': 'go:prev',
            'click button.next': 'go:next'
        },

        onGoPrev: function (view, event) {
            var next = this.getUI('next')

            if(_options.CUR_PAGE > 1) {
                _options.CUR_PAGE--;
                if(_options.CUR_PAGE === 1) {            
                    this.disableButton('prev')          
                }

                if(next.hasClass('disabled')) {
                    this.enableButton('next')
                }

                this.changeBlocks(true)
            } 
        },

        onGoNext: function (view, event) {
            var prev = this.getUI('prev');

            if(_options.CUR_PAGE < TOTAL_PAGES) {
                _options.CUR_PAGE++;

                if(_options.CUR_PAGE === TOTAL_PAGES) {
                    this.disableButton('next')
                }

                if(prev.hasClass('disabled')) {
                    this.enableButton('prev')
                }

                this.changeBlocks()
            } 
        },

        changeBlocks (left, pos = 100) {
            const rest = left ? '+' : '-'
            $('.block-box.active').animate({
                left: `${rest}=${pos}vw`
            }, _options.DELAY)
        }
    })  
}

export default render
