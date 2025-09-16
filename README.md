# Google Calendar Wrapper

## Table of Contents
*   [Description](#description)
*   [Features](#features)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Usage](#usage)
*   [Project Structure](#project-structure)
*   [License](#license)
*   [Acknowledgements](#acknowledgements)

## Description
This project provides a simple, dedicated desktop wrapper for Google Calendar, built using Electron. It allows users to access Google Calendar as a standalone application on their desktop, separate from a web browser, offering a focused experience without browser tabs or distractions.

## Features
*   **Dedicated Google Calendar Application**: Launches Google Calendar in a standalone Electron window.
*   **Custom Window Dimensions**: Configured with a default width of 1000px and height of 700px.
*   **Custom Application Icon**: Uses a custom icon for the desktop application.
*   **No Default Browser Menu**: The application menu (like File, Edit, View) is removed for a cleaner interface.
*   **Cross-Platform Compatibility**: Electron enables it to run on Windows, macOS, and Linux.
*   **Linux Desktop Integration**: Includes a `.desktop` file for easy integration into Linux desktop environments, allowing it to appear in application menus.

## Getting Started

## Prerequisites
Before you begin, ensure you have the following installed on your system:

*   **Node.js**: A JavaScript runtime environment. It is recommended to use an LTS version. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: Node.js package manager, which comes bundled with Node.js.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Apsinghsa/google-calendar-wrapper.git
    cd google-calendar-wrapper
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Running the application
To start the Google Calendar desktop wrapper, run the following command in the project directory:

```bash
npm start
```

This will open a new Electron window displaying Google Calendar.

### Linux Desktop Integration (Optional)
For Linux users, a `.desktop` file is provided to integrate the application into your system's application menu.

1.  **Edit the `.desktop` file:**
    Open `google-calendar.desktop` and replace `{your project address}` with the absolute path to your cloned `google-calendar-wrapper` directory.

    Example:
    ```desktop
    [Desktop Entry]
    Name=Google Calendar
    Comment=A simple desktop wrapper for Google Calendar.
    Exec=sh -c "cd /home/youruser/google-calendar-wrapper && npm start"
    Icon=/home/youruser/google-calendar-wrapper/assets/icon.png
    Terminal=false
    Type=Application
    Categories=Office;Calendar;
    StartupWMClass=google-calendar-wrapper
    ```

2.  **Install the `.desktop` file:**
    Copy the modified `google-calendar.desktop` file to your applications directory. A common location is `~/.local/share/applications/`:

    ```bash
    cp google-calendar.desktop ~/.local/share/applications/
    ```
    After this, you should find "Google Calendar" in your desktop environment's application launcher.

## Project Structure
```
.
├── google-calendar.desktop  # Linux desktop entry file
├── index.js               # Main Electron application logic
└── package.json           # Project metadata and dependencies
```

## License
This project is licensed under the ISC License. See the `package.json` file for details.

## Acknowledgements
*   **Ap** - Initial Author