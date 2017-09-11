// 当用户点击登陆按钮的时候，这个插件ajaxForm方法会自动监听submit事件
// 然后阻止浏览器默认的刷新提交，然后自动变成ajax的方式发送请求。
/**
 * 登陆成功后服务器会返回用户信息，这个信息在左侧导航要使用，所以我们存储
 * 但是不能通过变量存储，因为登陆成功后页面会跳转到新的页面，每个页面的变量是独立的，所以需要通过localStorage存储
 * */
$('#login-form').ajaxForm({
    success: function(data) {
        if(data.code == 200) {
            alert('登陆成功');
            localStorage.setItem('userinfo', JSON.stringify(data.result));
            location.href = '/dist';
        }else {
            alert('登陆失败');
        }
    },
    error: function() {
        alert('登陆失败');
    }
});


// $('#login-form').on('submit', function(e) {

//     $.ajax({
//         url: '/v6/login',
//         type: 'post',
//         data: $(this).serialize(),
//         success: function(data) {
//             if(data.code == 200) {
//                 alert('登陆成功');
//             }else {
//                 alert('登陆失败');
//             }
//         },
//         error: function() {
//             alert('登陆失败');
//         }
//     });

//     // jquery中阻止浏览器默认事件return false即可
//     return false;
// });