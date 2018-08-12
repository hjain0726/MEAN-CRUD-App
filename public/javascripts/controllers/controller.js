
app.controller('ctrl2', function ($scope, myfactory, $location, $rootScope, $window) {
    $scope.user = {};
    $scope.saveData = function (isvalid) {
        if (isvalid) {
            var pr = myfactory.add($scope.user);
            pr.then(res => {
                $scope.result = res;
                $location.path('/home');
                $window.location.reload('/home');

            })
        }
    }
});

app.controller('ctrl1', function ($scope, factorytwo, $location, $rootScope, $window) {
    $scope.showsData = function () {
        var pro = factorytwo.showdata();
        pro.then((data) => {
            $scope.users = data;
        }, (err) => {
            $scope.error = err;
        })
    }
    $scope.showsData();
    $scope.edit = function (user) {
        $rootScope.id = user._id;
        console.log($scope.id);
        $location.path('/edit');
    }

    $scope.update = {};
    $scope.updatedData = function (isvalid) {
        if (isvalid) {
            var prom = factorytwo.updateIt($rootScope.id, $scope.update);
            prom.then(res => {
                $scope.success = res;
                $location.path('/home');
                $window.location.reload('/home');
            })
        }

    }

    $scope.delete = function (user) {
        $scope.uid = user._id;
        var promise = factorytwo.delete($scope.uid);
        promise.then((res) => {
            $scope.deletemsg = res;
            $location.path('/home');
            $window.location.reload('/home');

        })

    }
});