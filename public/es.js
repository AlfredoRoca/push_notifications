var listen_system_notifications = function () {
  var es = new EventSource('/connect');
  es.onmessage = function (event) {
    var msg = $.parseJSON(event.data);
    $('#notification').html(msg.notification);
  } 
}

$(document).ready(listen_system_notifications);