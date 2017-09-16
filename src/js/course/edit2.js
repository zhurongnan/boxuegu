require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util');
var cs_id = util.getSearch('cs_id'); +
$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 2;
        $('#course-edit2').append(template('course-edit2-tpl', data.result));
    }
});