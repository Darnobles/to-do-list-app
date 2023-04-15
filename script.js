
function newItem(){

    let list = $('#list');
    list.append('<li></li>');
    let li = $('<li></li>');
    list.append(li);

    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue().length < 1) {
        alert('You must write something!');
        else {
            $('#list').append(li);
        }
    };

    li.on('dblclick', function () {
    li.addClass('strike');
    });

    let newElement = $('crossOutButton');
    $('.crossOutButton').append(document.CreateTextNode(X));
    $('.li').append('.crossOutButton');

    li.on('click', function() {
        li.addClass('delete');
    });

    $('#list').sortable();
};