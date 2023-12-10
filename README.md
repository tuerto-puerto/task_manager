# task_manager
Task Manager Web App Readme

Overview:
This web application is a simple Task Manager that allows users to add, delete, and filter tasks. Users can sign in, sign up, and manage their tasks. The application is built using HTML, CSS, and JavaScript. It also utilizes the SweetAlert2 library for displaying pop-up messages and communicates with a mock API for user authentication and task storage.

Features:
User Authentication: Users can sign in or sign up to access the task management features. The user data is stored in a mock API for demonstration purposes.

Task Management:

Add tasks: Users can enter a task in the input field and click the "Add Task" button to add it to the task list.
Delete tasks: Each task has a "Delete" button that allows users to remove a task from the list.
Toggle task completion: Users can mark tasks as completed or active by clicking on the checkbox next to each task.
Task Filtering:

Show All Tasks: Displays all tasks in the list.
Show Active Tasks: Displays only tasks that are not marked as completed.
Show Completed Tasks: Displays only tasks that are marked as completed.
Logout:

Users can log out by clicking the "Log out" button, which clears the current user's information from local storage and redirects them to the login page.
File Structure:
index.html: Contains the main structure of the Task Manager app, including the login/signup forms and the task management section.
2_page.html: Represents the task management page.
style.css: Provides the styling for the Task Manager app.
2style.css: Styles specific to the task management page.
script.js: Handles the user interface interactions and API communication for the login/signup functionality.
main.js: Manages the task-related functionality, including task creation, deletion, and filtering.
logout.js: Manages the logout functionality.
How to Run:
Clone the repository to your local machine.
Open the index.html file in a web browser to access the login/signup page.
After logging in, you'll be redirected to the task management page (2_page.html).
Dependencies:
SweetAlert2 (https://sweetalert2.github.io/): Used for displaying attractive pop-up messages.
Mock API (https://6574b9adb2fbb8f6509c96da.mockapi.io/v1/users): Simulates user authentication and task storage.




