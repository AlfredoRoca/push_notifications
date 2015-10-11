var bind_push = function () {
  $('#send').click(function (event) {
    event.preventDefault();

    var notification = {notification: $('#notification').val()};

    $.post('/push', notification, 'json');
  });
}

$(document).ready(bind_push);