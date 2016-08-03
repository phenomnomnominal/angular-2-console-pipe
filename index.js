'use strict';

var core = require('@angular/core');

var ConsolePipe = (function () {
    function ConsolePipe() {}

    ConsolePipe.prototype.transform = function (value) {
        console.log(value);
        return '';
    };

    ConsolePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'console', pure: true },] },
    ];
    return ConsolePipe;
}());

exports.ConsolePipe = ConsolePipe;
