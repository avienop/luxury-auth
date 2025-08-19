# Avien Bank - Authentication App

This project is a simple authentication-based web app built with React, Vite, Tailwind CSS, and DaisyUI.
It includes Login, Register, Forgot Password (OTP via Email), Change Password, and Dashboard with Logout features.

# Setup Instructions

 # Clone the repo

git clone https://github.com/your-username/avien-bank-auth.git
cd avien-bank-auth


# Install dependencies

npm install


# Run the development server

npm run dev


Open in browser → http://localhost:5173

🔑 Authentication Flow
# Login

User enters email & password.

If credentials are correct → redirected to Dashboard.

If invalid → error message shown.

# Dashboard

Displays a simple welcome message + navigation bar.

Navbar includes:

Dashboard (home)

Logout button → clears session and redirects to login

#  Forgot Password → OTP → Change Password

If user forgets password:

Enter registered email → OTP sent.

Redirected to Change Password page with email pre-filled.

Enter OTP + new password → updates password.

Redirect back to Login page.

# Testing the App

# Login Test

Use a valid email & password → should go to Dashboard.

Invalid credentials → should show error.

# Forgot Password Test

Go to Forgot Password → enter email.

Check your email inbox for OTP.

# On Change Password page → enter email, OTP, and new password.

Try logging in with new password.

# Logout Test

Click Logout in Dashboard navbar.

Should redirect back to Login page.

# Tech Stack

Frontend: React, Vite, Tailwind CSS, DaisyUI

Backend API: Node.js + Express (hosted on Vercel)

Authentication: Email + Password, OTP for Reset