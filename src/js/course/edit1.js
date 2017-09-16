require('../common/header.js');
require('../common/aside.js');

var util = require('../common/util.js');
var cs_id = util.getSearch('cs_id');
$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
    data.result.editIndex = 1;
    data.code == 200 && $('#course-edit1').append(template('course-edit1-tpl', data.result));
});


// 二级联动
$(document).on('change', '#category-top-select', function() {

    // select 的value 就是所选的顶级学科的cg_id
    var topCgid = $(this).val();
    // 用顶级学科的CGID获取对应的子级学科的列表
    $.get('/v6/category/child', { cg_id: topCgid }, function(data) {
        var html = "";
        var childList = data.result;
        if (data.code == 200) {
            // 根据子列表动态生成对应的option
            for (var i = 0, len = childList.length; i < len; i++) {
                html += '<option value="' + childList[i].cg_id + '">' + childList[i].cg_name + '</option>'
            }
        }
        // 用新的option替换原来的
        $('#category-top-select').html(html);
    });

})
$('#course-edit1-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
            location.href = '/dist/html/course/edit2.html?cs_id=' + cs_id;
        }
    }
})