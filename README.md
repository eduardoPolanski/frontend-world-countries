## Project Overview 🔍

This project is a full-stack application aimed at creating a user interface (UI) within the monday.com platform to interact with board data. The front-end is developed using Next.js, TypeScript, and integrates monday.com's React UI Components Library. The UI allows users to search through country data stored on a monday.com board, display filtered results, and retrieve weather data for selected countries from a back-end API.

## Getting Started 🚀

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone git@github.com:eduardoPolanski/frontend-world-countries.git
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend-world-countries
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application running on port 3000 by default.

### Technologies Used 💻

- Next.js: React framework for server-side rendering and routing.
- TypeScript: Superset of JavaScript that adds static typing.
- Tailwind CSS: Utility-first CSS framework.
- axios: HTTP client for making requests to the back-end API.
- monday-sdk-js: SDK for integrating with the monday.com platform.
- monday-ui-react-core: React UI Components Library provided by monday.com.

### Functionality 🛠️

- Search Bar: Allows users to input text to filter country information.
- Filtered Results: Displays filtered country results and enables clicking.
- Modal: Shows detailed country information and weather data upon clicking a result.
- Error Handling: Implements basic error handling for smoother user experience.

### Additional Notes ℹ️

- Responsiveness: The UI is designed to be responsive across various screen sizes.
- Clean Code: Emphasis is placed on writing clean, modular, and maintainable code.
- UI Elements: Utilizes UI components from monday.com's React UI Components Library for consistency with the monday.com platform.
