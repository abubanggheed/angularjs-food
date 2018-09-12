console.log('client loaded');

let myApp = angular.module('FoodApp', []);

myApp.controller('FoodController', function() {
    let self = this;
    self.foods = [
        'Pasta',
        'Pizza',
        'Sandwitches',
        'Natural Flavors',
        'Xanthan Gum'
    ];
});