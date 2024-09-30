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

Features
Sign Up Page: Users can enter their name and email to sign up.

Todo List Page: After signing up, users are redirected to the Todo List page where they can:

Add tasks.
View their task list.
Update task status.
Remove tasks.
Data Persistence: The application uses Redux for state management, and data persistence is handled using Redux Persist. The data will be retained until the browser is closed.

Profile Page: Users can navigate to the profile page by clicking the user icon or the Profile button in the header. On the profile page:

If the user clicks the user icon, they will be logged out and redirected back to the Sign Up page.

