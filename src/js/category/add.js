require('../common/header.js');
require('../common/aside.js');

// 请求数据，渲染模板，插入指定位置的坑
$.get("/v6/category/top", function(data) {
    if (data.code == 200) {
        $('#category-top-select').html(template('select_tpl', data.result));
    }
});

// + * 表单提交：
//  + * ajaxForm方法会判断你传入的数据类型，如果是对象认为是配置，函数认为是成功回

$('#category-add-form').ajaxForm(function(data) {

    if (data.code == 200) {
        alert('恭喜你，创建了一个新学科');
    }
})