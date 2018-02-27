(function () {
    var taskForm = {
        templateUrl: "partials/taskForm.template.html",
        controller: function (FormService) {
            var vm = this;
            vm.addItem = function (Todo) {
                FormService.pushToDo(Todo)

            }
        }
    }


    angular.module("app")
        .component("taskForm", taskForm);
})();