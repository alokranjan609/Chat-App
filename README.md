# Chat Application

A simple WebSocket-based chat application allowing users to log in, see a list of online users, and chat with selected users.

## Features

- User login
- Display list of online users
- Chat with selected users in real-time

## Requirements

- **Node.js**: Make sure Node.js is installed. This application uses Node.js to run the WebSocket server.
- **npm**: Node.js package manager, usually installed with Node.js.  

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd Chat-App
    ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Install the necessary npm packages:

    ```bash
    npm install
    ```

## Running the Application

1. **Start the WebSocket server:**

    ```bash
    npm start
    ```

   The WebSocket server will start on `ws://localhost:8080`.

2. **Open the chat application:**

    - Open `public/index.html` in your web browser to access the login page.

## Usage

1. **Login:**
   - Enter a username on the login page and click "Login".

2. **Select a User:**
   - On the user list page, click on a user to start a chat with them.

3. **Chat:**
   - Enter your message and click "Send" to communicate with the selected user.

## File Structure

- `server/`:
  - `server.js`: Contains the WebSocket server code.

- `public/`:
  - `index.html`: Login page.
  - `users.html`: Page to select users to chat with.
  - `chat.html`: Chat page.
  - `styles.css`: CSS styles for the application.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## Contact

For any questions or comments, please reach out to [Alok Ranjan](mailto:alokthakur609@gmail.com).
