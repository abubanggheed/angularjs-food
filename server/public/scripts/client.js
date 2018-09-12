console.log('client loaded');

let myApp = angular.module('FoodApp', []);

myApp.controller('FoodController', function () {
    let self = this;
    self.foods = [
        { name: 'Pasta', deliciousness: 45 },
        { name: 'Pizza', deliciousness: 78 },
        { name: 'Sandwitches', deliciousness: 37 },
        { name: 'Natural Flavors', deliciousness: 22 },
    ];
    self.addFood = function (name, delic) {
        if (self.newDeliciousness <= 100 && self.newDeliciousness >= 1) {
            self.foods.push({
                name: name,
                deliciousness: delic
            });
            self.newFood = '';
            self.newDeliciousness = 0;
        } else {
            alert('enter valid inputs')
        }
    }
});