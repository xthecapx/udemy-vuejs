new Vue({
        el: '#exercise',
        data: {
            value: '',
            valueAllTime: '',
            valuePressEnter: ''
        },
        methods: {
            showAlert: function() {
                alert("show Alert");
            },
            storeValue: function(event) {
                 this.valueAllTime = event.target.value;
            },
            storeValueEnter: function(event) {
                 this.valuePressEnter = event.target.value;
            }
        }
    });