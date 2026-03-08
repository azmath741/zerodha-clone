# Zerodha Clone – Full Stack Trading Platform

## Abstract

This project is a **full-stack clone of the Zerodha trading platform** built to simulate a modern stock trading application.
It includes a **landing website, user authentication, and a trading dashboard** where users can view holdings, positions, orders, and manage funds.

The project is divided into three main parts:

* **Frontend** – Landing website for users
* **Dashboard** – Trading interface
* **Backend** – API server and database management

This project demonstrates **full-stack development using React, Node.js, Express, and MongoDB**.

---

# Project Information

* **Project:** Zerodha Clone Trading Platform
* **Type:** Full Stack Web Application
* **Frontend:** React.js
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Authentication:** JWT

---

# Tech Stack

### Frontend

* React.js
* BootStrap, CSS
* Context API

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose

---

# Features

### Landing Website

* Home page
* About page
* Pricing page
* Product page
* Support page
* Login / Signup

### Trading Dashboard

* Portfolio summary
* Holdings
* Positions
* Orders
* Funds management
* Watchlist
* Charts and graphs

### Backend API

* Authentication
* Portfolio management
* Orders management
* Positions and holdings APIs

---

# Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/azmath741/zerodha-clone
cd zerodha-clone
```

---

# Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:8080
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Dashboard runs on:

```
http://localhost:3001
```

---

# Environment Variables

Create a `.env` file in each folder.

Example:

```
# Backend
PORT=8080
MONGO_URL=your_mongodb_connection
TOKEN_KEY=your_secret_key

# Dashboard & Frontend
REACT_APP_BACKEND=http://localhost:8080
REACT_APP_FRONTEND=http://localhost:3000
```

---

# Folder Structure

```
zerodha-clone
│
├── backend
│   ├── Controllers
│   ├── middlewares
│   ├── model
│   ├── routes
│   ├── schemas
│   └── utils
│
├── dashboard
│   ├── components
│   ├── data
│   └── public
│
└── frontend
    ├── landing page
    ├── public
    └── src
```

---

# API Modules

### Authentication

* User login
* User signup
* JWT token generation

### Dashboard APIs

* Get holdings
* Get orders
* Get positions
* Portfolio summary

---

# Future Improvements

* Real-time stock data
* WebSocket live price updates
* Payment integration
* Mobile responsive improvements
* Advanced trading charts

---

# References

* Zerodha Official Website
* React Documentation
* Node.js Documentation
* MongoDB Documentation

---

# License

This project is created **for educational purposes only**.

---

# Author

**Azmath Ali**

CSE Student | Aspiring AI & Full Stack Developer
