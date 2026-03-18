document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const updateForm = document.getElementById("updateForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (username === "" || password === "") {
                alert("Vui lòng nhập đầy đủ username và mật khẩu.");
                return;
            }

            alert("Đăng nhập thành công (demo).");
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("registerUsername").value.trim();
            const password = document.getElementById("registerPassword").value.trim();
            const rePassword = document.getElementById("registerRePassword").value.trim();
            const email = document.getElementById("registerEmail").value.trim();

            if (username === "" || password === "" || rePassword === "" || email === "") {
                alert("Vui lòng nhập đầy đủ thông tin.");
                return;
            }

            if (password !== rePassword) {
                alert("Mật khẩu nhập lại không khớp.");
                return;
            }

            alert("Đăng ký thành công (demo).");
        });
    }

    if (updateForm) {
        updateForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("updateUsername").value.trim();
            const password = document.getElementById("updatePassword").value.trim();
            const rePassword = document.getElementById("updateRePassword").value.trim();
            const email = document.getElementById("updateEmail").value.trim();

            if (username === "" || password === "" || rePassword === "" || email === "") {
                alert("Vui lòng nhập đầy đủ thông tin cập nhật.");
                return;
            }

            if (password !== rePassword) {
                alert("Mật khẩu nhập lại không khớp.");
                return;
            }

            alert("Cập nhật thành công (demo).");
        });
    }
});

function confirmDelete(username) {
    const result = confirm("Bạn có chắc muốn xóa user " + username + " không?");
    if (result) {
        alert("Đã xóa user " + username + " (demo).");
    }
}