# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# MegaBlog

A full-featured blog application built with React that allows users to sign up, sign in, and manage their posts. Users can upload, remove, and update their posts, and view posts created by others. The app uses Appwrite as a backend with an authentication service, file upload, and custom queries.

## Features

- **User Authentication**: Sign up and sign-in functionality powered by Appwrite authentication.
- **Post Management**: Create, update, delete, and view posts.
- **State Management**: Uses Redux Toolkit for global state management with Context API and local storage for authentication persistence.
- **File Upload**: Secure file upload using Appwrite storage.
- **Form Handling**: React Hook Form for handling form inputs and validation.

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, React Hook Form
- **Backend**: Appwrite (Authentication, Database, and File Storage)
- **State Management**: Redux Toolkit, Context API, Local Storage
- **File Upload**: Appwrite Storage
- **Form Validation**: React Hook Form

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Appwrite backend by following [Appwrite setup guide](https://appwrite.io/docs/installation). Create a project and set up authentication and database collections.

4. Create `.env` file and configure the Appwrite project details:

   ```
   REACT_APP_APPWRITE_URL=your_appwrite_url
   REACT_APP_APPWRITE_PROJECT_ID=your_project_id
   ```

5. Start the development server:

   ```bash
   npm start
   ```

## Features & Implementation Details

### 1. **Authentication Service**
   - Built with Appwrite to handle user sign-up, sign-in, and session management.
   - Authentication state is persisted using Redux and local storage.

### 2. **Post Management**
   - Posts can be uploaded, updated, and deleted by authenticated users.
   - Appwrite's database is used to store post data, and file uploads are managed through Appwrite's file storage service.

### 3. **Redux Toolkit Integration**
   - Redux Toolkit is used for state management in the app.
   - A focus on configuring Redux Toolkit in larger applications, optimizing the store setup, and enabling efficient state management across the app.

### 4. **React Hook Form**
   - For managing form inputs and validation for creating and updating posts, React Hook Form simplifies the process, providing a cleaner approach to handling forms.

### 5. **Production-Ready Code**
   - Focus on writing clean, maintainable code suited for production environments, ensuring performance optimizations and scalability.

## Future Enhancements

- Implement real-time updates for posts using Appwrite subscriptions.
- Add user profiles with editable information.
- Enhance UI/UX with more interactive features.

