export const initialData = {
  employees: [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      tasks: [
        { id: 101, title: "Build login page", status: "Completed" },
        { id: 102, title: "Implement dashboard", status: "In Progress" },
      ],
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Backend Developer",
      tasks: [{ id: 103, title: "API integration", status: "Pending" }],
    },
    {
      id: 3,
      name: "Charlie Davis",
      role: "UI/UX Designer",
      tasks: [
        { id: 104, title: "Design task cards", status: "Completed" },
        { id: 105, title: "Revamp colors", status: "Pending" },
      ],
    },
  ],
};
