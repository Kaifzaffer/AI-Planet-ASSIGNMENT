# DPhi

Welcome to **DPhi**! This application allows users to browse, filter, sort, and search for hackathon challenges. It provides a comprehensive interface for managing and participating in various hackathons.

## Screenshots

![Screenshot 1](https://drive.google.com/uc?export=view&id=1ZlRwC-2WMdo6xNNJqq7_bAVn7Mil1o0i)
![Screenshot 2](https://drive.google.com/uc?export=view&id=1ffEPLxN9AtTxfuQpPnZjPDVjhxOrRWYD)
![Screenshot 3](https://drive.google.com/uc?export=view&id=1fGVUCCsNYPhuWaBryDkt0_41auI0h8EV)
![Screenshot 4](https://drive.google.com/uc?export=view&id=1mlSX1NZs3p58CQF01Laph2bPMzsCEmvV)
![Screenshot 5](https://drive.google.com/uc?export=view&id=1qyh5uECw-KntvohLYJLRIpr561Gnd4VB)
![Screenshot 6](https://drive.google.com/uc?export=view&id=1qyh5uECw-KntvohLYJLRIpr561Gnd4VB)
![Screenshot 7](https://drive.google.com/uc?export=view&id=1ONYlp0xDd0HpJ1dsdBVs-EDU8syUZbNJ)
![Screenshot 8](https://drive.google.com/uc?export=view&id=1MUH3TOKRePiWuYuund6AB7fdLLLjbLZ5)
![Screenshot 9](https://drive.google.com/uc?export=view&id=1fiGPWgzZowNUtH-CjBArDVrNscCqXZUE)
![Screenshot 10](https://drive.google.com/uc?export=view&id=19RrQAVqo1omc7MqKzIItrFx5a_H4dKzM)

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
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd vite-project
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to view the application.

## Usage

- **Home Page**: Displays a grid of hackathon challenges.
- **Search Bar**: Enter a name to search for specific hackathons.
- **Filters**: Use dropdowns to filter by level and status.
- **Sorting**: Select sorting options to view hackathons in the desired order.
- **Challenge Details**: Click on a challenge to view details, including timers and dates. You can also participate, edit, or delete challenges.

## Folder Structure

```
src/
  components/        # Contains reusable components like Timer.
  pages/             # Contains page components like HomeE and ChallengeDetails.
  Context/           # Contains the ChallengeProvider context for state management.
  assets/            # Stores static assets like images.
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

1. Fork the Repository.
2. Create a Feature Branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit Your Changes:

   ```bash
   git commit -m 'Add new feature'
   ```

4. Push to the Branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Create a Pull Request.
