# ZenKAR

ZenKAR is a mobile app that helps indians with all their tax needs and features a reliable tax calculator with a self built algorithm. It is built using React, Tailwind CSS, Supabase, and Capacitor.


## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Supabase
- **Build Tool**: Vite
- **Mobile Framework**: Capacitor

## Project Structure

    .
    ├── android                 # Android project
    ├── public                  # Public assets
    ├── src                     # Source files
    │   ├── assets              # Images, fonts, etc.
    │   ├── components          # Reusable components
    │   ├── styles              # Global styles
    │   ├── App.jsx             # Main app component
    │   ├── main.jsx            # Entry point
    ├── .gitignore              # Git ignore file
    ├── .env                    # Environment variables
    ├── .eslintrc.js            # ESLint configuration
    ├── .prettierrc.js          # Prettier configuration
    ├── LICENSE                 # License file
    ├── package.json            # NPM package file
    ├── README.md               # Readme file
    ├── vite.config.ts          # Vite configuration

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- Android Studio (for building the Android app)
- Java Development Kit (JDK) (>= 8)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/paradigmclub/zenkar.git
cd zenkar
npm install # Install dependencies
```

3. Start the development server:

```sh
npm run dev
```

4. Build the app for production:

```sh
npm run build
```

5.Build For Android

    ```sh
    npx cap add android
    npx cap sync
    npx cap open android
    ```

6.Final Step

    - Build the app using Android Studio
    - Run the app on an Android device or emulator

## License

This project is licensed under the GNU V3 License - see the [LICENSE](LICENSE) file for details.

## Contributing

Since this is a personal project, I am not accepting contributions at the moment. However, you are free to fork the repository and make changes as you see fit.

## Acknowledgements

- [Supabase](https://supabase.io/)
- [Capacitor](https://capacitorjs.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
