userApp.service("userService", function ($http, $location) {

    var $this = this;
    var Domain = $location.absUrl();

    $this.AddEdit = function (user) {
        var request = $http({
            method: 'POST',
            url: Domain + 'home/AddEditUser',
            data: JSON.stringify(user),
            dataType: "json"
        });
        return request;
    }

    $this.Delete = function (id) {
        var request = $http({
            method: 'POST',
            url: Domain + 'home/DeleteUser',
            data: "{ id:" + id + " }",
            dataType: "json"
        });
        return request;
    }

    $this.GetAll = function () {
        var request = $http({
            method: 'GET',
            url: Domain + 'home/GetAllUsers',
        });
        return request;
    }

    $this.GetUser = function (id) {
        var request = $http({
            method: 'GET',
            url: Domain + 'home/GetUser/' + id,
        });
        return request;
    }
});
