# DPhi

Welcome to the **Dphi**! This application allows users to browse, filter, sort, and search for hackathon challenges. It provides a comprehensive interface for managing and participating in various hackathons.

## Features

- **Search**: Find hackathons by name.
- **Filter**: Narrow down hackathons by level (Easy, Medium, Hard) and status (Active, Upcoming, Past).
- **Sort**: Order hackathons by start date (Newest First, Oldest First).
- **Dynamic Display**: View relevant details based on hackathon status:
  - **Active**: Shows a countdown timer to the end.
  - **Upcoming**: Shows a countdown timer to the start.
  - **Past**: Displays start and end dates.

## Technologies Used

- **React**: For building the user interface.
- **Material-UI**: For UI components and styling.
- **Tailwind CSS**: For additional styling and responsive design.
- **React Router**: For navigating between pages.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Kaifzaffer/AI-Planet-ASSIGNMENT.git
2. Navigate to the Project Directory:

bash
Copy code
cd vite-project
3. Install Dependencies:

bash
Copy code
npm install
4. Start the Development Server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the application.

Usage
Home Page: Displays a grid of hackathon challenges.
Search Bar: Enter a name to search for specific hackathons.
Filters: Use dropdowns to filter by level and status.
Sorting: Select sorting options to view hackathons in desired order.
Challenge Details: Click on a challenge to view details, including timers and dates. You can also participate, edit, or delete challenges.
Folder Structure
src/
components/: Contains reusable components like Timer.
pages/: Contains page components like HomeE and ChallengeDetails.
Context/: Contains the ChallengeProvider context for state management.
assets/: Stores static assets like images.
Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

Fork the Repository.

Create a Feature Branch:

bash
Copy code
git checkout -b feature/new-feature
Commit Your Changes:

bash
Copy code
git commit -m 'Add new feature'
Push to the Branch:

bash
Copy code
git push origin feature/new-feature
Create a Pull Request.
