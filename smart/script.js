document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");
    const newPasswordModal = document.getElementById("newPasswordModal");
    const adminVerificationModal = document.getElementById("adminVerificationModal");

    const loginBtn = document.getElementById("loginBtn");
    const closeLoginModal = document.getElementById("closeLoginModal");
    const openRegisterBtn = document.getElementById("openRegister");
    const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
    const nextForgotPasswordBtn = document.querySelector(".btn-next");
    const adminOtpInput = document.getElementById("adminOtpInput");

    const closeRegisterModal = registerModal.querySelector(".close");
    const closeForgotPasswordModal = forgotPasswordModal.querySelector(".close");
    const closeNewPasswordModal = newPasswordModal.querySelector(".close");
    const closeAdminVerificationModal = adminVerificationModal.querySelector(".close");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    closeLoginModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    openRegisterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "flex";
    });

    forgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        forgotPasswordModal.style.display = "flex";
    });

    nextForgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        forgotPasswordModal.style.display = "none";
        newPasswordModal.style.display = "flex";
    });

    closeRegisterModal.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    closeForgotPasswordModal.addEventListener("click", function () {
        forgotPasswordModal.style.display = "none";
    });

    closeNewPasswordModal.addEventListener("click", function () {
        newPasswordModal.style.display = "none";
    });

    function openAdminVerification() {
        loginModal.style.display = "none";
        adminVerificationModal.style.display = "flex";
    }

    closeAdminVerificationModal.addEventListener("click", function () {
        adminVerificationModal.style.display = "none";
    });

    function verifyAdminOTP() {
        const enteredOTP = adminOtpInput.value;
        const correctOTP = "123456"; // Replace with actual OTP logic

        if (enteredOTP === correctOTP) {
            alert("Admin Verified! Redirecting...");
            window.location.href = "admin-dashboard.html"; // Redirect to admin page
        } else {
            alert("Invalid OTP. Please try again.");
        }
    }

    window.addEventListener("click", function (event) {
        if (event.target === loginModal) loginModal.style.display = "none";
        if (event.target === registerModal) registerModal.style.display = "none";
        if (event.target === forgotPasswordModal) forgotPasswordModal.style.display = "none";
        if (event.target === newPasswordModal) newPasswordModal.style.display = "none";
        if (event.target === adminVerificationModal) adminVerificationModal.style.display = "none";
    });

    window.openAdminVerification = openAdminVerification;
    window.verifyAdminOTP = verifyAdminOTP;
});
