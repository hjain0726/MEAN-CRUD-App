app.factory('myfactory', ($http, $q, URL) => {
    var defer = $q.defer();
    const obj = {
        add(user) {
            $http.post(URL + "/postdata", user).then((res) => {
                defer.resolve(res);
            })
            return defer.promise;
        }
    }
    return obj;
});

app.factory('factorytwo', ($http, $q, URL) => {
    var defer = $q.defer();
    var defer2 = $q.defer();
    const obj2 = {
        showdata() {
            $http.get(URL + "/givedata").then((data) => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            })
            return defer.promise;
        },
        updateIt(id, update) {
            $http.put(URL + "/" + id, update).then((res) => {
                defer2.resolve(res)
            })
            return defer2.promise;
        },
        delete(id) {
            $http.delete(URL + "/delete/" + id).then((res) => {
                defer.resolve(res);
            })
            return defer.promise;
        }
    }
    return obj2;
});
