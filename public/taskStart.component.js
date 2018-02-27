(function (){
    var taskStart = {
        template: `
        <main class= "main">
            <div id="start div">
                <h1 class="apptitle">Welcome to TODO</h1>
                <p>Do more. Increase your productivity with a simple to do app.</p>
                <a id="startarrow" href="#!/form">Enter<i class="material-icons arrow">arrow_forward</i></a>

            </div>
        </main>
        `,
        controller: function (FormService) {
           var vm = this;
        }
    };
    angular
        .module("app")
        .component("taskStart", taskStart)
})();