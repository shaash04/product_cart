# Product Store 🛒

A full stack MERN app to manage products — you can add, update, and delete products.

Built while learning the MERN stack .

## Features
- View all products
- Add a new product
- Update existing product
- Delete a product
- Connected to MongoDB Atlas

## Tech Stack
- **Frontend:** React, Vite, Chakra UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Other:** React Router, Zustand

## Setup & Run Locally

1. Clone the repo
   ```bash
   git clone https://github.com/shaash04/product_cart.git
   cd product_cart
   ```

2. Create a `.env` file in the root folder
   ```
   MONGO_URL=your_mongodb_url_here
   PORT=5000
   NODE_ENV=production
   ```

3. Install and run
   ```bash
   npm run build
   npm run start
   ```

4. Open `http://localhost:5000`

> Note: You need your own MongoDB Atlas account and cluster to run this project.
