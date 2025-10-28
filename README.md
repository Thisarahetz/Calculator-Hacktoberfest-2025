## Calculator - Next.js Edition

![Calculator App](https://user-images.githubusercontent.com/73592688/194620666-431adc31-df00-4345-bc26-d1b5baac9f2a.jpg)

A beautiful, modern calculator application built with Next.js, featuring dark mode, light mode, and an alternate theme. This project is a Next.js conversion of the original JavaScript Calculator.

## Features

- 🎨 **Multiple Themes**: Beautiful dark mode, light mode, and colorful alternate theme with stunning gradients
- 🔬 **Scientific Mode**: Toggle scientific calculator functions with advanced operations
- ⌨️ **Keyboard Support**: Full keyboard input support for seamless experience
- 📅 **Live Date/Time**: Real-time date and time display
- 💫 **Animated Welcome Text**: Beautiful animated text effects
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Glassmorphism Design**: Modern frosted glass effect with backdrop blur
- ✨ **Smooth Animations**: Delightful hover effects and transitions
- 🎯 **Intuitive UX**: Clean and modern interface designed for ease of use

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS3 with CSS Variables & Glassmorphism
- [React Icons](https://react-icons.github.io/react-icons/)
- Poppins & Handlee Fonts

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

### Basic Operations

- **Click buttons** or use your **keyboard** to input numbers and operators
- Press **Enter** or click **"="** to calculate
- Press **Backspace** to delete the last character
- **Shift + Backspace** to clear all
- Hover over buttons to see smooth animations and feedback

### Themes & Customization

- **Theme Button** (sun/moon icon): Toggle between dark and light modes
- **Settings Icon**: Switch between light and alternate colorful theme
- Each theme features unique gradient backgrounds and color schemes

### Scientific Mode

- Click **"S" button** to enable scientific mode
- Additional functions: Parentheses `( )`, Power `^`, Square root `√`
- Perfect for advanced mathematical calculations

## Design Highlights

### Modern Glassmorphism

- Frosted glass effect with backdrop blur for a premium feel
- Translucent containers with elegant transparency
- Smooth borders with subtle shadows

### Enhanced UX

- **Intuitive Layout**: Clean and organized button placement
- **Visual Feedback**: Hover and active states on all interactive elements
- **Smooth Transitions**: 0.3s ease transitions for all interactions
- **Gradient Buttons**: Special gradient effects for Clear and Equal buttons
- **Responsive Design**: Perfectly optimized for mobile, tablet, and desktop

### Color Themes

- **Dark Theme**: Purple gradient background with glassmorphic elements
- **Light Theme**: Warm peach/coral gradient with soft shadows
- **Alternate Theme**: Cool mint/pink gradient for a fresh look

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
