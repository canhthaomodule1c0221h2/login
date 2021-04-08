let name = prompt("nhập tên tài khoản");
if (name == "Admin") {
    let password = prompt("nhập mật khẩu");
    if (password == "the master") {
        alert("welcome");
    } else if (password == "null") {
        alert("canceled");
    }
    else {
        alert(" wrong pasword");
    }
}
else if (name == "null") {
    alert("cancel");
}
else {
    alert("I dont'know you ")
}
