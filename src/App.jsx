

import { useState } from "react";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(null);

  // Function to simulate OTP generation and sending
  function sendOtp() {
    if (phoneNumber) {
      const otpCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
      setGeneratedOtp(otpCode);
      setShowOtpInput(true);
      alert(`OTP sent to ${phoneNumber}: ${otpCode}`); // In real-world apps, this would be sent to the phone number.
    } else {
      alert("Please enter a valid phone number.");
    }
  }

  // Function to validate OTP
  function validateOtp() {
    if (otp === generatedOtp) {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>OTP Verification</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={sendOtp}>Get OTP</button>
      </div>

      {/* OTP Input Section */}
      {showOtpInput && (
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={validateOtp}>Submit OTP</button>
        </div>
      )}

      {/* OTP Validation Result */}
      {isOtpValid === true && <p style={{ color: "green" }}>OTP is valid!</p>}
      {isOtpValid === false && <p style={{ color: "red" }}>OTP is invalid!</p>}
    </div>
  );
}

export default App;
