"use strict";
exports.__esModule = true;
exports.Departament = void 0;
var Departament = /** @class */ (function () {
    function Departament(i, o) {
        this.id = i;
        this.owner = o;
        this.workers = [this.id, this.owner];
    }
    Departament.prototype.createWorkers = function (x) {
        this.owner = x;
    };
    Departament.prototype.showEmployeesInfo = function () {
        console.log("id: " + departament.id + ", trabajador: " + departament.owner);
        console.log("id: " + departament1.id + ", trabajador: " + departament1.owner);
        console.log("id: " + departament2.id + ", trabajador: " + departament2.owner);
        console.log("id: " + departament3.id + ", trabajador: " + departament3.owner);
        return;
    };
    return Departament;
}());
exports.Departament = Departament;
var departament = new Departament(1, "juan perez");
var departament1 = new Departament(2, "Diana quinteros");
var departament2 = new Departament(3, "lucas bonifacio");
var departament3 = new Departament(4, "flor quintana");
console.log(departament.showEmployeesInfo());
exports["default"] = Departament;
