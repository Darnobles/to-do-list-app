function newItem(){
    
    let newElement = $('<li class ="inputValue>inputValue</li> ');
    $('body').append(newElement);

    if(inputValue().length < 1) {
        alert('You must write something!');
        else {
            $('#list').append(li);
        }
    }

    $('input').on('dblclick', function (event) {
    'crossOut'
    });

    let newElement = $('crossOutButton');
    $('.crossOutButton').append(document.CreateTextNode(X));
    $('.li').append('.crossOutButton');

    li.on('click', function() {
        li.addClass('delete');
    });

    $('#list').sortable();
};