// Show/Hide Password
function togglePassword(inputId, btn) 
{
  const input = document.getElementById(inputId);
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  btn.textContent = isPassword ? '🙈' : '🐵';
}

// Close popup
function closePopup() 
{
  document.getElementById("popupModal").style.display = "none";
}

// Date & Time
  function updateDateTime() 
  {
    const now = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric', 
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    document.getElementById("datetime").textContent = now.toLocaleString("en-US", options);
  }
  updateDateTime();
  setInterval(updateDateTime, 30000);