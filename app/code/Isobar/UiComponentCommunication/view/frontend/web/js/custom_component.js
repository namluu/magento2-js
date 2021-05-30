define([
    'uiComponent',
    'knockout'
], function (Component, ko) {
    return Component.extend({
        defaults: {
            exports: {
                isLoading: 'minicart_content:isLoading'
            },
            imports: {
                cart: 'minicart_content:cart'
            }
        },

        cart: ko.observable(),
        isLoading: ko.observable(false),

        forceCartToSpin: function() {
            this.isLoading(!this.isLoading());
        }
    });
});