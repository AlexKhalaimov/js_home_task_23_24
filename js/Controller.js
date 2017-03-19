define(
    'Controller',
    ['jquery', 'tmpl','Model', 'View'],
    function ($, tmpl, Model, View) {

           function Controller( model, view ) {

                var self = this;
                var flag = false;

                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.edit-item', editItem);

                view.elements.listContainer.on('click', '.delete-item', removeItem);



            function editItem() {
                var inp =  $(this).prev('button').prev('input');
                var li = $(inp.prev('li'));
                var myVal = inp.val();
                index_myVal = model.data.indexOf(myVal);
                var newVal;

                    if (flag === false) {

                        $(this).toggleClass('done-item');

                        li.toggle();
                        inp.toggleClass('show_input');

                        inp.change(function(){
                        newVal = inp.val();
                        model.data.splice(index_myVal, 1 , newVal);

                            return model.data;
                        });

                        flag = true;
                    }
                    else {
                        $(this).toggleClass('done-item');
                        li.toggle();
                        inp.toggleClass('show_input');
                        view.renderList(model.data);
                        flag = false;
                }

                return flag;


            }
            function showItem() {
                $(this).css('display', 'none');
                $(this).prev('.list-item').css('display', 'inline-block');
            }

            function addItem(){
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');

            }
            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }
        }

        return Controller;
    }
);
