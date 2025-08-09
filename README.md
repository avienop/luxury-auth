# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Authentication System with Token Handling
This project is a React-based authentication system that connects to an external API to handle user login. Upon successful login, the system receives a JWT token, which is stored and decoded to display user-specific data. This data is then shown on a welcome/dashboard screen. The system is designed to be clean, functional, and responsive, ensuring a smooth experience on both desktop and mobile devices.

## Features
Login Form: Users can log in by entering their username and password.

Token Management: After successful authentication, the system securely stores the JWT token and decodes it to extract essential user information.

Welcome Screen: After decoding the token, the user is redirected to a welcome screen displaying their username and email.

Logout Functionality: The user can log out, clearing the stored token and redirecting them back to the login page.

Responsive Design: The app is fully responsive, built with Tailwind CSS, to ensure it works seamlessly across different devices.

## How it Works
## Login
Users begin by entering their username and password in the login form. After submitting the credentials, the app sends them to the API for authentication. If the login is successful, the API returns a JWT token. This token is stored in the browser's localStorage for future use.

## Token Handling
Once the token is securely stored, the system decodes it to retrieve important user data, like their username and email. This information is displayed on the welcome screen once the user is redirected.

## Welcome Screen
After successful authentication, the user is taken to the dashboard/welcome page, where their username and email are shown. This page serves as the user's main hub after logging in.

## Logout
When the user clicks the Logout button, the stored token is cleared from localStorage, and they are redirected back to the login page.

Key Components
LoginForm: Handles the user login process, sending credentials to the API, and storing the JWT token upon successful login.

DashboardPage: Displays the decoded token data (like the username and email) after a successful login.

Logout: Clears the stored token and redirects the user back to the login screen.

Token Decoding: Decodes the JWT token to extract and display user-specific data on the welcome page.

## Testing the Application
Once you log in with the correct credentials, you should see the username and email displayed on the welcome screen. If the login fails, an error message will appear.

Clicking the Logout button will clear the stored token, redirecting you back to the login page.

## Notes
The token is stored in localStorage for session management.

Errors during the login process are logged in the console, and users will be notified through an alert if the login fails.