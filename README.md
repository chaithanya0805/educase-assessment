# PopX UI Recreation

This project is a pixel-perfect recreation of the PopX mobile application design provided via Adobe XD screenshots.

## Requirements Met

- **Tech Stack**: React.js + Vite + React Router DOM
- **Styling**: Plain CSS with mobile constraints (375x812 container centered on screen).
- **Screens Implemented**:
  1. Landing Screen
  2. Login Screen
  3. Signup Screen
  4. Profile Screen
- **Typography & Colors**: Uses the `Rubik` font and exact color Hex values extracted from the design.
- **Assets**: Integrates the provided `Lady.png` avatar image.
- **Components**: Includes reusable `Button` and `Input` components.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the local URL provided by Vite (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/
│   ├── Button.jsx    # Reusable button with primary/secondary/disabled states
│   └── Input.jsx     # Reusable text input with overlapping labels
├── pages/
│   ├── Landing.jsx   # Welcome screen
│   ├── Login.jsx     # Signin screen
│   ├── Signup.jsx    # Account creation screen
│   └── Profile.jsx   # User settings and details
├── styles/
│   └── index.css     # Global styles and layout constraints
├── App.jsx           # Router setup
└── main.jsx          # Entry point
```

## Deployment
This project is ready to be pushed to GitHub and deployed to Vercel or any standard static hosting platform without further changes.
