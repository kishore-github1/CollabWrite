CollabWrite
CollabWrite is a web-based document editor that enables real-time collaboration. Built with React, Node.js, MongoDB, and Socket.io, it allows multiple users to edit a document simultaneously, with changes saved in MongoDB.

Features:
Real-time Collaboration: Multiple users can work on the same document in real-time.
Unique Document IDs: Each session generates a unique document ID.
Persistent Storage: Documents are saved and retrieved from MongoDB.
Getting Started
Prerequisites:
Node.js (v14+)
MongoDB (local or cloud)
Setup
Clone the repository

bash
Copy code
git clone https://github.com/your-username/collabwrite.git
cd collabwrite
Backend Setup:

Install dependencies and configure MongoDB URL in server/database/db.js.
bash
Copy code
cd server
npm install
npm start
Frontend Setup:

bash
Copy code
cd client
npm install
npm start
Run the Application: Open http://localhost:3000.

Technologies
Frontend: React, Socket.io-client
Backend: Node.js, Express, MongoDB, Socket.io