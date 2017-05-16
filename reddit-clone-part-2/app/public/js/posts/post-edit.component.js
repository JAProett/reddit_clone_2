(function() {
        'use strict'

        angular.module('app')
            .component('editPost', {
                templateUrl: '/js/posts/post-edit.template.html',
                require: {
                    layout: '^app'
                },
                controller: controller
            })

        controller.$inject = ['$http', '$stateParams', '$state']

        function controller($http, $stateParams, $state) {
            this.$onInit = () => {
                $http.get(`/api/posts/${$stateParams.id}`)
                    .then((result) => {
                        this.post = result.data;


                    })

            };




            this.validate = (ev) => {
                if (this.newPostForm[ev.target.name].$invalid) {
                    ev.target.classList.add('hayden');
                    ev.target.setAttribute('placeholder', 'Required');
                } else {
                    ev.target.classList.remove('hayden');
                    ev.target.setAttribute('placeholder', '');
                }
            };

            this.updatePost = ()=> {
                if (this.newPostForm.$valid) {

                    $http.patch(`/api/posts/${$stateParams.id}`, this.post)
                    .then(response => {
                        $state.go('posts')
                    })
                }
                else {console.log('whats wrong this time')}
            }
        }


})();
