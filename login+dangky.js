var login = [{
        User: 'chien',
        Pass: 'koi'
    },
    {
        User: 'hai',
        Pass: 'hai'
    },
    {
        User: 'a',
        Pass: 'a'
    }
]

function getAcc() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var item = {
        User: user,
        Pass: pass
    }
    if (user != '' && pass != '') {
        login.push(item)
        alert('Đăng kí thành công')
    } else {
        alert('Nhập thông tin đăng kí')
        return
    }
    document.getElementById('user').value =''
    document.getElementById('pass').value =''

}

function check() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    for (var i = 0; i < login.length; i++) {
        if (user == login[i].User && pass == login[i].Pass) {
            window.location = "nhapkho.html";
            var dem = 1;
        }
    }
    if (dem != 1) {
        alert('Thông tin không chính xác')
        return
    }
}

function dangky() {
    window.location = "dangky.html";
}