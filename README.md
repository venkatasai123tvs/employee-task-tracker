# Employee Task Tracker (Frontend Assignment)
This is a single-page React application built for the ProU Technology Frontend Assignment. The app uses mock JSON data only and demonstrates filtering, task management, and a modern UI with responsive layout.

## Project Setup Instructions
1. Clone or download the project:
git clone https://github.com/venkatasai123tvs/employee-task-tracker.git
2. Open the project folder:
cd employee-task-tracker
3. Install dependencies:
npm install
4. Start the development server:
npm run dev
5. Open the application in your browser (usually):
http://localhost:5173/

## Framework and Libraries Used
- React (built using Vite) for component-based UI structure.
- JavaScript ES6+ features such as useState, useEffect, useMemo.
- Custom CSS for layout, animations, transitions, color design, and responsiveness.
- LocalStorage for saving task updates across page refreshes.
- No external backend, no UI libraries like Bootstrap/Tailwind.

## Assumptions Made
- The application is entirely frontend-based and does not require any backend or API.
- Employee and task data is stored in a local mockData.js file within the project.
- All task additions and status updates are saved only to LocalStorage for persistence.
- Valid statuses are limited to: Pending, In Progress, and Completed.
- Page refresh retains all task information through LocalStorage.
- The UI should be modern, clearly structured, responsive, and visually balanced as per assignment requirements.

## Features Implemented
- Dashboard displaying total tasks, completed tasks, pending tasks, tasks in progress, and completion percentage.
- Ability to filter tasks by status: All, Pending, In Progress, Completed.
- Add new task by selecting an employee, entering a task name, and choosing status.
- Update existing task status through dropdown selection.
- Modern UI design with smooth animations, hover effects, shadow depth, gradients, and responsive layout for mobile screens.
- Clean component structure (Dashboard, TaskFilter, TaskForm, EmployeeList).

## Author
venkata sai thorlakonda
GitHub: https://github.com/venkatasai123tvs
Frontend Developer – Placement Assignment
