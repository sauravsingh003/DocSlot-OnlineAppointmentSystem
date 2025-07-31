<h1 align="center">🩺 DocSlot - Online Appointment System</h1>

<p align="center">
  <b>A full-stack healthcare appointment management system</b><br>
  Built with <strong>Spring Boot</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-SpringBoot-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-React.js-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Database-MySQL-orange?style=flat-square" />
</p>

---

## 🌐 Project Overview

**DocSlot** is a comprehensive web-based platform designed to simplify the healthcare appointment process for all parties involved. The system supports **four user roles**—**Admin**, **Doctor**, **Patient**, and **Receptionist**—and provides a seamless interface for scheduling, managing, and tracking appointments in real time.

It features **real-time doctor availability**, secure appointment management, and prescription handling, making the entire experience smooth and efficient.

---

## 👥 User Roles and Features

### 👨‍⚕️ Doctor
- View and manage their appointment schedules.
- Set available timings.
- Access patient history.
- **Upload prescription files** after appointments.
- View patient payment status before allowing prescription access.

### 👩‍💻 Receptionist
- View and manage doctor-patient appointments.
- Handle manual appointment bookings if needed.
- Coordinate between patients and doctors.

### 🧑 Patient
- Register, login, and update profile.
- View available doctors and their slots.
- Book and cancel appointments.
- **Pay for appointment and view prescriptions after payment**.
- Access appointment history and download files securely.

### 🛡️ Admin
- Manage doctors, receptionists, and patients.
- Access complete appointment records.
- View system activity logs and analytics.

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React.js, Bootstrap  |
| Backend     | Spring Boot (Java)   |
| Database    | MySQL                |
| API Layer   | RESTful APIs         |
| Tools       | Postman, Git, Maven  |

---

## 🚀 How to Run the Project Locally

### Prerequisites
- Java 17+
- Node.js and npm
- MySQL server
- Maven

---

### 🔧 Backend Setup
```bash
# Clone the repository
git clone https://github.com/your-username/docslot.git
cd docslot/backend

# Set up MySQL and configure your connection
# Update src/main/resources/application.properties with your DB credentials

# Run the Spring Boot application
mvn clean install
mvn spring-boot:run

---

### 🎨 Frontend Setup

cd ../frontend

# Install dependencies
npm install

# Run the React application
npm start

---

## 📂 Project Structure

docslot/
├── backend/
│   └── src/
│       └── main/java/com/docslot/...
├── frontend/
│   └── src/
│       └── components/, pages/, services/
├── database/
│   └── schema.sql
├── README.md


## 💬 Contribution

We welcome all contributions!
If you'd like to fix a bug or add a feature, feel free to fork the repository and submit a pull request.
Don't forget to ⭐ the repo if you like it!

<p align="center"> Made with ❤️ for better and smarter healthcare. </p>```
