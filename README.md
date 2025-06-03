# 📝 ThinkBord – MERN Stack Note Taking App

A fully responsive full-stack **Note Taking App** built with the **MERN stack** and styled using **Tailwind CSS**. It lets you **create**, **update**, and **delete** notes with a title and description. Ideal for beginners who want to understand full-stack development, REST APIs, rate limiting, and modern frontend design.

🌐 **Live Demo:** [https://thinkbord.onrender.com](https://thinkbord.onrender.com)

---

## 🚀 Features

* ✨ Create, Edit, and Delete notes (with title & description)
* ⚙️ Fully functional and tested REST API
* 🔐 Rate Limiting using Upstash Redis
* 📱 Responsive UI with Tailwind CSS
* 📖 Learn REST methods, status codes, and SQL vs NoSQL concepts

---

## 🛠️ Tech Stack

### 💻 Frontend
* React (Vite)
* Tailwind CSS

### 🌐 Backend
* Node.js
* Express.js
* MongoDB (Mongoose)
* dotenv
* CORS
* Upstash Redis (for rate limiting)


---

## 🧪 .env Setup

Create a `.env` file inside the `/backend` directory with the following content:

```env
    MONGO_URI=<your_mongo_uri>
    
    UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
    UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
    
    NODE_ENV=development
```

🔧 Getting Started
▶️ Run the Backend

```bash

cd backend
npm install
npm run dev
```

💻 Run the Frontend
```bash

cd frontend
npm install
npm run dev
```
🧐 Concepts Covered

✅ RESTful API design and testing

✅ Connecting frontend and backend using Axios

✅ Tailwind CSS for modern responsive design

✅ Rate Limiting using Upstash Redis

✅ Secure environment variable setup

✅ Deployment on Render with static frontend + API backend

✅ Real-world backend concepts explained simply (e.g., Redis, rate limiting, status codes)

✨ Author

Sujit Kumar SrivastavBuilt this project as a learning exercise to gain hands-on experience in full-stack development, backend architecture, and deployment pipelines.
