const validOtps = [1212, 5552, 9854, 3258, 7854, 5555, 6635, 5488, 9632, 7878, 7454, 3256, 8422, 8425, 5445, 2226, 1000, 85, 6325, 1231, 7539, 9685];
let generatedOtp;

document.getElementById("send-otp").addEventListener("click", function () {
    const phone = document.getElementById("phone").value;

    if (phone) {
        // Generate a random OTP from the list
        generatedOtp = validOtps[Math.floor(Math.random() * validOtps.length)];
        console.log(`Sending OTP ${generatedOtp} to ${phone}`);
        
        // Display OTP input and verify button
        document.getElementById("otp-container").style.display = "block";
        document.getElementById("verify-otp").style.display = "block";
        document.getElementById("message").innerText = "OTP sent! Please check your phone.";
    } else {
        document.getElementById("message").innerText = "Please enter a valid phone number.";
    }
});

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const otp = document.getElementById("otp").value;

    // Check if the entered OTP matches the generated OTP
    if (otp == generatedOtp) {
        console.log(`Verifying OTP: ${otp}`);
        document.getElementById("message").innerText = "OTP verified! Sign up successful.";

        // Redirect to the specified URL after verification
        window.location.href = "https://upmsp.edu.in";
    } else {
        document.getElementById("message").innerText = "Invalid OTP. Please try again.";
    }
});