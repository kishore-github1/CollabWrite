# CollabWrite

**CollabWrite** is a web-based document editor that enables real-time collaboration. Built with React, Node.js, MongoDB, and Socket.io, it allows multiple users to edit a document simultaneously, with changes saved in MongoDB.

### Features:
- **Real-time Collaboration**: Multiple users can work on the same document in real-time.
- **Unique Document IDs**: Each session generates a unique document ID.
- **Persistent Storage**: Documents are saved and retrieved from MongoDB.

## Getting Started

### Prerequisites:
- Node.js (v14+)
- MongoDB (local or cloud)

### Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/collabwrite.git
    cd collabwrite
    ```

2. **Backend Setup**:
    - Install dependencies and configure MongoDB URL in `server/database/db.js`.
    ```bash
    cd server
    npm install
    node index.js
    ```

3. **Frontend Setup**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

4. **Run the Application**: Open `http://localhost:5173`.

## Technologies
- **Frontend**: React, Socket.io-client
- **Backend**: Node.js, Express, MongoDB, Socket.io

## License
Licensed under the MIT License.

## Screenshots
![CollabWrite Preview](https://github.com/user-attachments/assets/e7a8cf84-fc4a-4f68-9fbd-7423062257d7)


