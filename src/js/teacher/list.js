require('../common/header.js');
require('../common/aside.js');

$.get("/v6/teacher", function(data) {
    data.code == 200 && $('#teacher-list-table').append(template('teacher-list-tpl', data.result))
})


$(document).on('click', 'btn-teacher-status', function() {
    var $this = $(this);
    var data = {
        tc_id: $(this).attr('data-id'),
        tc_status: $(this).attr('data-status')
    }
    $.post('/v6/teacher/handle', data, function(data) {
        var newStatus = data.result.tc_status;
        $this.text(newStatus == 0 ? '注销' : '启动');
        $this.attr('data-status', 'newStatus')


    })
})