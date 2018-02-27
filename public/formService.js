(function () {
    function FormService($http) {
        
        return {
            pushToDo: pushToDo,
            getTodos: getTodos,
            removeToDo: removeTodo
        }

        function pushToDo(TodoText) {
            tasks.push(TodoText);
            console.log(tasks);


        }

        function getTodos() {

            return $http({
                method: "GET",
                url: "/todos"
            }).then(function(response){
                return response.data;
            });

        };
        function removeTodo(item) {
            var array = item;
            var index = array.indexOf(item);
            array.splice(index, 1);
        }
    }

    angular
        .module("app")
        .factory("FormService", FormService);

})();