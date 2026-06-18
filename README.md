# DocAppoint - Doctor Appointment Manager

A modern doctor appointment booking platform where users can browse doctors, view detailed information, book appointments, and manage their healthcare bookings through a secure and user-friendly interface.

## Live Website

🔗 Live Site: https://doctor-appoint-manager.vercel.app

## Client Repository

🔗 Client Repo: https://github.com/Reyad-Hoq/doctor-appointment-manager

## Server Repository

🔗 Server Repo: https://github.com/Reyad-Hoq/doctor-appointment-server

---

## Features

* Browse all available doctors with detailed information and ratings.
* Secure authentication using Better Auth with Google Sign-In.
* Book doctor appointments and save booking information to MongoDB.
* Manage personal bookings with update and delete functionality.
* Protected dashboard with My Bookings and My Profile sections.
* Search doctors by name from the appointments page.
* Dynamic doctor details page with appointment booking system.
* Responsive design optimized for mobile, tablet, and desktop devices.
* SEO-friendly metadata implementation for improved discoverability.
* Custom 404 page and loading spinner for enhanced user experience.

---

## Technologies Used

### Frontend

* Next.js
* React
* Tailwind CSS
* HeroUI
* Better Auth
* React Hot Toast
* React Icons
* GravityUI Icons

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* JWT Authentication
* CORS
* Dotenv

---

## Main Pages

### Public Pages

* Home Page
* All Appointments Page
* Login Page
* Register Page

### Private Pages

* All Appointments Page

  * Doctor Details Page

* Dashboard

  * My Bookings
  * My Profile

---

## Authentication Features

* Email & Password Authentication
* Google Authentication
* Protected Routes
* Persistent Login Session
* JWT-based Authorization

---

## Appointment Management

### Create Appointment

Users can:

* Select a doctor
* Fill in patient information
* Choose appointment date and time
* Save appointment to MongoDB

### Update Appointment

Users can:

* Edit booking information
* Update appointment details instantly
* View changes without page reload

### Delete Appointment

Users can:

* Remove bookings
* Instantly update UI
* Receive success notifications

---

## Environment Variables

### Client

```env
NEXT_PUBLIC_SERVER_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
```

### Server

```env
PORT=
MONGODB_URI=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Installation

### Clone Client

```bash
git clone https://github.com/Reyad-Hoq/doctor-appointment-manager
cd docappoint-client
npm install
npm run dev
```

### Clone Server

```bash
git clone https://github.com/Reyad-Hoq/doctor-appointment-server
cd docappoint-server
npm install
npm start
```

---

## Future Improvements

* Doctor review and rating system
* Appointment sorting and filtering
* Theme toggle (Dark/Light Mode)
* Doctor availability management
* Appointment reminder notifications

---

## Author

Developed by Reyad Hoq
Full-Stack Web Developer