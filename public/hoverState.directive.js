(function(){
    function hoverState(){
        return {
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function (){
                    $element.css('box-shadow', '0px 0px 5px 0px rgba(0,0,0,0.75)')
                });
                $element.on("mouseout", function (){
                    $element.css('box-shadow', 'none')
                });
            }
        }
    }
    angular
    .module("app")
    .directive("hoverState", hoverState)
})();