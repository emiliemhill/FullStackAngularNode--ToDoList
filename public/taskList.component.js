(function () {
    var TaskController = function (formService) {
        var vm = this;
        vm.formItem = {}
    }

controller: function(FormService) {
    var $ctrl = this;
    $ctrl.todoList = FormService.getTodos();
    $ctrl.removeItem = function (item) {
        FormService.removeTodo(item);

    }

}


angular.module("app")
    .component("taskList", taskList);
}) ();