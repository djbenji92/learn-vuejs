new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        showButton: true,
        disabledButton: false,
    },
    methods: {
        startAction: function(){
            this.disabledButton = true;
            setTimeout(function () {
                this.enabledButton();
            }.bind(this), 1000);
        },

        enabledButton: function(){
            this.disabledButton = false;
        }
    },
})