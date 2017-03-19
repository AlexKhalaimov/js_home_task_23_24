requirejs.config({
    paths : {
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
        'tmpl'   : '../js/tmpl'
    },
    shim : {
        'jquery' : {
            exports : 'jQuery'
        },
        'tmpl' : {
            exports : 'tmpl'
        }
    }
});

require(

    [ 'jquery', 'tmpl', 'Model', 'View', 'Controller' ],

    function ($, tmpl, Model,  View, Controller  ) {

        $(function () {
            var firstToDolist = ['make coffee', 'drink coffee', 'do some work'];

            var model = new Model(firstToDolist);

            var view = new View(model);

            var controller = new Controller(model, view);


        });











    }
);
