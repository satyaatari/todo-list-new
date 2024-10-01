# React + TypeScript + Redux Todo Application

## Overview

This application is built using React, TypeScript, and Redux for state management. It allows users to sign up, manage a todo list, and view their profile.

## Prerequisites

- **Node Version**: 20.14.0
- **NPM Version**: 10.8.1

## Getting Started

Follow the steps below to set up and run the application:

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
cd <project-directory>

3. Install the dependencies:
npm install

4. Start the development server:
npm run dev


5. Open the application in your browser (usually at http://localhost:5173/)

Application Features:

Sign-Up Page:

Users can sign up by entering their name and email.
Upon successful sign-up, the user is logged in automatically.


Todo List Page:

After signing up, users are redirected to their personal Todo List page.
Features of the Todo List page:

Add Tasks: Users can add new tasks to their list.

View Tasks: Users can view only their own tasks.

Update Task Status: Users can mark tasks as complete or incomplete.

Remove Tasks: Users can delete tasks from their list.

Each user will only see and manage their own tasks.


Data Persistence:
State management is handled using Redux.
Redux Persist is used to retain user data (tasks and login state) across page reloads. The data persists until the browser session is closed.


Profile Page:
Users can navigate to the Profile page by clicking the user icon or the "Profile" button in the header.
Profile Page Features:

Logout Button: When clicked, the user is logged out and redirected to the Sign-Up page.

To Do Validation: 
1. Allow only alphabets and spaces.
2. To Do cannot exceed 250 characters.



