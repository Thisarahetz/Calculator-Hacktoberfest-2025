## Calculator - Next.js Edition

![Calculator App](https://user-images.githubusercontent.com/73592688/194620666-431adc31-df00-4345-bc26-d1b5baac9f2a.jpg)

A beautiful, modern calculator application built with Next.js, featuring dark mode, light mode, and an alternate theme. This project is a Next.js conversion of the original JavaScript Calculator.

## Features

- 🎨 **Multiple Themes**: Dark mode, Light mode, and a colorful alternate theme
- 🔬 **Scientific Mode**: Toggle scientific calculator functions
- ⌨️ **Keyboard Support**: Full keyboard input support
- 📅 **Live Date/Time**: Real-time date and time display
- 💫 **Animated Welcome Text**: Beautiful typewriter effect
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS3 with CSS Variables
- React Type Animation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Calculator-Hacktoberfest-2025.git
cd Calculator-Hacktoberfest-2025
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Calculator.tsx  # Calculator component
│   ├── Header.tsx      # Header with date/time
│   └── Footer.tsx      # Footer component
├── utils/
│   └── calculate.ts    # Calculation logic
├── public/
│   └── assets/         # Static assets
└── package.json
```

## Usage

- Click buttons or use your keyboard to input numbers and operators
- Press Enter or click "=" to calculate
- Press Backspace to delete the last character
- Shift + Backspace to clear all
- Click the theme button (sun/moon icon) to toggle between dark and light mode
- Click the settings icon to switch between light and alternate theme
- Click "S" button to enable scientific mode with additional functions

## Scientific Mode

When scientific mode is enabled, you can use:

- Parentheses `( )`
- Power `^`
- Square root `√`

## Contributing

Contributions are welcome! This project is open for Hacktoberfest 2025.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Original design inspiration from the JavaScript Calculator project
- Built for Hacktoberfest 2025

---

Made with ❤️ using Next.js
