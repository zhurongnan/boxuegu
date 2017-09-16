require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

var cs_id = util.getSearch('cs_id');
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 3;
        $('#course-edit3').append(template('course-edit3-tpl', data.result));
    }
});

// 模态框编辑学科的回显
// 1、因数据动态生成，需要给提交按钮绑定事件监听事件
// 2、获取到按钮点击的时候的tc_id,用这个tc_id获取后台数据
//3、渲染生成表格插入页面的模板坑


$(document).on('click', 'btn-form-edit3', function() {
    var data = {
        ct_id: $(this).attr('data_id'),
    }
    $.get('/v6/course/chapter/edit', data, function(data) {
        if (data.code == 200) {
            data.result.cs_id = cs_id; //后台判断课程属于哪个学科
            $('#chapterModal').html(template('lesson-tpl', data.result));
        }
    })
})



// 编辑课程，提交表单
// ajaxForm插件方式委托
// $('#lesson-form').ajaxForm({
//     delegation: true, //委托成功，则给他修改成功提示
//     // success: function(data) {
//     //     if (data.code == 200) {
//     //         alert('修改成功');
//     //     }
//     // }
//     success: lessonSuccess
// });
// 添加章节，事件委托，按钮点击触发，生成一个空对象渲染模态框，插入页面
// $(document).on('click', '#btn-lesson-add', function() {
//     $('#chapterModal').html(template('lesson-tpl', { cs_id: cs_id }));
// });

// // 修改或者添加章节成功后处理回调：服务器返回有result则添加章节成功，否则是修改成功
// function lessonSuccess(data) {
//     if (data.result) {
//         alert('添加成功');
//         $('#lesson-form').get(0).reset(); //添加成功后，再次点击课时按钮的时候晴空表单
//     } else {
//         alert('修改成功');
//     }
// }

$('#lesson-tpl').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.result) {
            alert('添加成功');
            $('#lesson-form').get(0).reset(); //添加成功后，再次点击课时按钮的时候晴空表单
        } else {
            alert('修改成功');
        }
    }
})