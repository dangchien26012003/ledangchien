var data = []

var sua = {
    SoLan: 0
}
var xoa = {
    SoLan: 0
}

function submit() {
    var ma = document.getElementById('ma').value;
    var ten = document.getElementById('ten').value;
    var soLuong = document.getElementById('soluong').value;
    var giaMua = document.getElementById('giamua').value;
    var giaBan = document.getElementById('giaban').value;
    var date = document.getElementById('date').value;
    var ngayNhap = document.getElementById('ngaynhap').value;

    if (ma == '') {
        ma = 0
    }
    // if(ten == '') {
    //     ten = 'False'
    // }
    if (soLuong == '') {
        soLuong = '0'
    }
    // if(giaMua == '') {
    //     giaMua = '0'
    // }
    // if(giaBan == '') {
    //     giaBan = '0'
    // }
    if (date == '') {
        date = '0001-01-01'
    }
    if (ngayNhap == '') {
        ngayNhap = '0001-01-01'
    }
    var item = {
        Stt: 1,
        Ma: ma,
        Ten: ten,
        SoLuong: soLuong,
        GiaMua: giaMua,
        GiaBan: giaBan,
        Date: date,
        NgayNhap: ngayNhap
    }



    for (var i = 0; i < data.length; i++) {
        if (ma == data[i].Ma) {
            var check = confirm('Mã sản phẩm đã tồn tại bạn có muốn thay thế không')
            if (check == true) {
                data.splice(i, 1, item)
            } else {
                return
            }

            render()
            return
        }
    }



    data.push(item)
    render()
    tomtat()
}

function render() {
    var table = `
    <tr>
    <th>STT</th>
    <th>Mã SP</th>
    <th>Tên SP</th>
    <th>Số Lượng</th>
    <th>Giá Mua</th>
    <th>Giá Bán</th>
    <th>Date</th>
    <th>Ngày Nhập</th>
    <th>Chỉnh Sửa</th>
    </tr>
    `
    for (var i = 0; i < data.length; i++) {
        table += `
        <tr>

        <td>${1 + i}</td>
        <td>${data[i].Ma}</td>
        <td>${data[i].Ten}</td>
        <td>${data[i].SoLuong}</td>
        <td>${data[i].GiaMua}</td>
        <td>${data[i].GiaBan}</td>
        <td>${data[i].Date}</td>
        <td>${data[i].NgayNhap}</td>
        <td>
            <button onclick="deleteItem(${data[i].Ma})" class="delete">Delete</button>
            <button onclick="editItem(${data[i].Ma})" class="edit">Edit</button>
        </td>
        </tr>
        `
    }

    sua.SoLan++
    document.getElementById('sua').value = sua.SoLan

    document.getElementById('render').innerHTML = table
    deleteValue()
}

function tomtat() {
    var tongKho = data.length
    var hetHang = 0
    var sapHetHang = 0
    var soluong
    var chuanhapdate = 0
    var chuanhapgiaban = 0
    var chuanhapgiamua = 0

    // var date = new Date();
    // var day = date.getDate()
    // var day = date.getDate()
    for (var i = 0; i < tongKho; i++) {
        soluong = data[i].SoLuong * 1
        if (soluong <= 10 && soluong > 0) sapHetHang++
        if (soluong == 0 || soluong < 0) hetHang++
        if (data[i].Date == '0001-01-01') chuanhapdate++
        if (data[i].GiaBan == '') chuanhapgiaban++
        if (data[i].GiaMua == '') chuanhapgiamua++

    }
    document.getElementById('tongkho').value = tongKho
    document.getElementById('hethang').value = hetHang
    document.getElementById('saphethang').value = sapHetHang
    document.getElementById('notdate').value = chuanhapdate
    document.getElementById('notgiaban').value = chuanhapgiaban
    document.getElementById('notgiamua').value = chuanhapgiamua

}

function deleteValue() {
    document.getElementById('ma').value = ''
    document.getElementById('ten').value = ''
    document.getElementById('soluong').value = ''
    document.getElementById('giamua').value = ''
    document.getElementById('giaban').value = ''
    document.getElementById('date').value = ''
    document.getElementById('ngaynhap').value = ''

}

function editItem(x) {
    for (var i = 0; i < data.length; i++) {
        if (x == data[i].Ma) {
            document.getElementById('ma').value = data[i].Ma
            document.getElementById('ten').value = data[i].Ten
            document.getElementById('soluong').value = data[i].SoLuong
            document.getElementById('giamua').value = data[i].GiaMua
            document.getElementById('giaban').value = data[i].GiaBan
            document.getElementById('date').value = data[i].Date
            document.getElementById('ngaynhap').value = data[i].NgayNhap
            break;
        }
    }
}

function deleteItem(x) {
    for (var i = 0; i < data.length; i++) {
        if (x == data[i].Ma) {
            var check = confirm(`Bạn có muốn xoá mã sản phẩm ${x} không`)
            if (check == true) {
                sua.SoLan--

                data.splice(i, 1)
                render()
                tomtat()

                xoa.SoLan++
                document.getElementById('xoa').value = xoa.SoLan
            }
            return
        }
    }
}



//     $(window).scroll(function(){
//         //code sẽ đc chạy khi lăm chuột
//         if($(this).scrollTop()){
//         // khi lăn chuột lên thì thực hiên đoạn code
//             $('.header').addClass('sticky')
//             // thêm class sticky vào trong class header
//         }
// })

