import Vue from "vue";
Vue.filter('formatDate', function(value) {
    return moment(value).format("YYYY-MM-DD");
});