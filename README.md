# google-calendar-wrapper

# Table of Contents
* [Features](#features)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Usage](#usage)
* [Project Structure](#project-structure)
* [License](#license)

## Features
This project is a simple, dedicated desktop wrapper for Google Calendar, offering a focused experience outside of a web browser.

*   **Dedicated Desktop Application:** Provides a standalone desktop experience for Google Calendar, separating it from general web browsing activities.
*   **Electron-Powered:** Built using the Electron framework, allowing it to run as a native desktop application across different operating systems.
*   **Clean Interface:** The application removes the default Electron application menu, offering a more streamlined and distraction-free view of Google Calendar.
*   **Custom Application Icon:** Utilizes a custom icon (referenced as `assets/icon.png`) for better integration and recognition on the desktop.

## Getting Started

These instructions will help you set up and run the Google Calendar Wrapper on your local machine for personal use or development.

### Prerequisites
Before you begin, ensure you have the following software installed on your system:

*   **Node.js**: A JavaScript runtime environment. The project relies on `npm` (Node Package Manager) which is bundled with Node.js.
    *   [Download Node.js](https://nodejs.org/en/download/)

### Installation
Follow these steps to get the project up and running:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Apsinghsa/google-calendar-wrapper.git
    cd google-calendar-wrapper
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will download and install all required packages, including Electron, as specified in the `package.json` file.

### Usage
To launch the Google Calendar Wrapper application:

1.  **Start the Electron application:**
    ```bash
    npm start
    ```
    This command executes the `start` script defined in `package.json`, which in turn launches the Electron application displaying Google Calendar in its own window.

**Note for Linux users:**
A `.desktop` file (`google-calendar.desktop`) is included in the repository to create a desktop shortcut for the application on Linux systems. Please be aware that the `Exec` and `Icon` paths within this file (`/home/apsingh/Documents/projects/google-calendar-wrapper`) are hardcoded to a specific local path. You will need to edit these paths to reflect the actual location where you have cloned this repository on your system before placing the `.desktop` file in `~/.local/share/applications/` or `/usr/share/applications/`.

## Project Structure
The repository is organized with the following key files:

*   `README.md`: This file, providing an overview and instructions for the project.
*   `google-calendar.desktop`: A desktop entry file specifically for Linux, enabling easy creation of application shortcuts.
*   `index.js`: The main Electron application file, responsible for creating the browser window and loading Google Calendar.
*   `package.json`: Contains project metadata, defines scripts (like `start`), and lists project dependencies (e.g., Electron).
*   `assets/icon.png` (referenced): The custom icon used for the application, as specified in `index.js` and `google-calendar.desktop`.

## License
This project is licensed under the ISC License. For more details, refer to the `license` field in the `package.json` file.