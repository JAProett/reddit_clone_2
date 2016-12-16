(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = onInit
    vm.togglePostForm = togglePostForm

    function onInit() {
      vm.addingPost = false
    }

    function togglePostForm() {
      vm.addingPost = !vm.addingPost
    }
  }

}());
