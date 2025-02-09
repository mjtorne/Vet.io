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

    // Open login modal
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    // Close login modal
    closeLoginModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Open register modal from login modal
    openRegisterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "flex";
    });

    // Open forgot password modal
    forgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        forgotPasswordModal.style.display = "flex";
    });

    // Transition from Forgot Password to New Password Modal
    nextForgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        forgotPasswordModal.style.display = "none";
        newPasswordModal.style.display = "flex";
    });

    // Close register modal
    closeRegisterModal.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    // Close forgot password modal
    closeForgotPasswordModal.addEventListener("click", function () {
        forgotPasswordModal.style.display = "none";
    });

    // Close new password modal
    closeNewPasswordModal.addEventListener("click", function () {
        newPasswordModal.style.display = "none";
    });

    // Open admin verification modal (Example: After admin login attempt)
    function openAdminVerification() {
        loginModal.style.display = "none";
        adminVerificationModal.style.display = "flex";
    }

    // Close admin verification modal
    closeAdminVerificationModal.addEventListener("click", function () {
        adminVerificationModal.style.display = "none";
    });

    // Verify admin OTP and redirect to the admin landing page
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

    // Close modals if user clicks outside the content
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) loginModal.style.display = "none";
        if (event.target === registerModal) registerModal.style.display = "none";
        if (event.target === forgotPasswordModal) forgotPasswordModal.style.display = "none";
        if (event.target === newPasswordModal) newPasswordModal.style.display = "none";
        if (event.target === adminVerificationModal) adminVerificationModal.style.display = "none";
    });

    // Expose the functions to global scope
    window.openAdminVerification = openAdminVerification;
    window.verifyAdminOTP = verifyAdminOTP;
});
