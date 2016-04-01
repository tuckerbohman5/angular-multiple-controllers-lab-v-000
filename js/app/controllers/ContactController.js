function ContactController() {
  this.name = "Bill Gates"
  this.email = "bill@microsoft.com"
  this.phone = "073888300303"

  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular 
  .module('app')
  .controller('ContactController', ContactController);