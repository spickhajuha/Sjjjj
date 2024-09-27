document.getElementById("send-otp").addEventListener("click", function () {
    const phone = document.getElementById("phone").value;
    
    if (phone) {
        // Simulate sending OTP (replace with actual API call)
        console.log(`Sending OTP to ${phone}`);
        
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

    // Simulate OTP verification (replace with actual API call)
    if (otp) {
        console.log(`Verifying OTP: ${otp}`);
        document.getElementById("message").innerText = "OTP verified! Sign up successful.";
    } else {
        document.getElementById("message").innerText = "Please enter the OTP.";
    }
});