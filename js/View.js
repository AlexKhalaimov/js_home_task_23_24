define(
    'View',
    ['jquery','tmpl',  'Model'],
    function ($, tmpl, Model) {
        function View (model) {

            var self = this;


            function init() {
                var wrapper = tmpl( $('#wrapper-template').html());

                $('body').append(wrapper);

                self.elements = {
                    input : $('.item-value'),
                    addBtn : $('.item-add'),
                    listContainer : $('.item-list'),
                    listItem : $('.list-item'),
                    inputEdit : $('.edit-list'),
                    btnEdit : $('.edit-item'),
                    btnDelete : $('.delete-item')
                };

                self.renderList(model.data);

            }

            self.renderList = function (data) {

                var list = tmpl($('#list-template').html(), {data : data});
                self.elements.listContainer.html(list);
            };

            init();
        }

        return View;
    }
);
