function umsplashPropertyEditorController($scope, editorService) {

    $scope.add = function () {
        var umsplashPicker = {
            apikey: $scope.model.config.apikey,
            title: "Unsplash Image Search",
            view: "/App_Plugins/Umsplash/umsplash.picker.html",
            size: "small",
            submit: function (model) {
                var image = {
                    full: model.urls.full,
                    regular: model.urls.regular,
                    small: model.urls.small,
                    thumb: model.urls.thumb,
                    alt: model.alt_description
                };
                $scope.model.value = image;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };
        editorService.open(umsplashPicker);
    };

    $scope.remove = function () {
        $scope.model.value = null;
    };
}
angular.module('umbraco').controller("Umsplash.PropertyEditor.Controller", umsplashPropertyEditorController);