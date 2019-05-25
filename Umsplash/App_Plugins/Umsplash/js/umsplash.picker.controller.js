function umsplashPickerController($scope, $http, $element) {

    setTimeout(function () {
        var input = $element[0].querySelector("#umsplash-search");
        if (input) input.focus();
    }, 20);

    $scope.submit = function (result) {
        if ($scope.model.submit) {
            download(result);
            $scope.model.submit(result);
        }
    };

    $scope.close = function () {
        if ($scope.model.close) {
            $scope.model.close();
        }
    };

   download = function (result) {
        $http({
            method: 'GET',
            url: result.links.download_location + '?client_id=' + $scope.model.apikey,
            headers: {
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            }
        });
    };

    $scope.search = function (page = 1) {
        $scope.model.loading = true;
        $http({
            method: 'GET',
            url: 'https://api.unsplash.com/search/photos?client_id=' + $scope.model.apikey + '&query=' + $scope.model.search + '&page=' + page,
            headers: {
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            }
        }).then(function (response) {
            if (response !== null && response !== undefined && response.data !== undefined) {
                var set = {
                    results: response.data.results,
                    page: page
                };
                $scope.model.set = set;
            }
            else {
                $scope.model.results = null;
            }
            $scope.model.loading = false;
        });
    };

    $scope.next = function (page) {
        if ($scope.search) {
            $scope.search(parseInt(page) + 1);
        }
    };

    $scope.prev = function (page) {
        if ($scope.search) {
            $scope.search(parseInt(page) - 1);
        }
    };
}
angular.module('umbraco').controller("Umsplash.Picker.Controller", umsplashPickerController);
