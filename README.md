**Oraimo-Clone**

A full-stack e-commerce clone inspired by the Oraimo websites.
The project uses React + TypeScript + Tailwind CSS for the frontend and Django (REST API) for the backend, focusing on clean architecture, scalability, and real-world development practices.

This is a learning and portfolio project. It is not affiliated with Oraimo.


**Overview**

Oraimo-Clone replicates the UI/UX and basic workflows of an e-commerce platform while introducing a proper backend for data handling, authentication, and future expansion.

The project is designed to demonstrate:

Full-stack architecture (frontend + backend separation)

RESTful API communication

Scalable frontend component structure

Clean backend organization with Django

Modern styling using Tailwind CSS


**Features**

*Frontend*

Responsive UI inspired by Oraimo

Reusable React components

Client-side routing with React Router

Tailwind CSS for consistent styling

Scroll-to-top handling

Clean Navbar and Footer architecture


*Backend*

Django-powered backend

REST API for products and user-related data

Structured models and views

Ready for authentication, cart, and order logic


**Tech Stack**

*Frontend*

React

TypeScript

Vite

Tailwind CSS

React Router


*Backend*

Django

Django REST Framework

SQLite
TODO: Update Project Structure
**Project Structure**
oraimo-clone/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── backend/
│   ├── core/
│   ├── products/
│   ├── users/
│   ├── manage.py
│   └── requirements.txt
│
└── README.md


**Installation & Setup**
Clone the Repository
git clone https://github.com/Prosper-ekube/Oraimo-Clone.git
cd Oraimo-Clone

**Frontend Setup**
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173


**Backend Setup**
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Backend runs on:
http://localhost:8000


**API Communication**

Frontend consumes backend data via REST APIs

API endpoints are exposed using Django REST Framework

CORS configuration is required for local development


**Available Scripts**

*Frontend*
Command	Description
npm run dev	Start frontend dev server
npm run build	Build frontend
npm run preview	Preview production build

*Backend*
Command	Description
python manage.py runserver	Start Django server
python manage.py migrate	Apply migrations
python manage.py createsuperuser	Create admin user


**Development Notes**

Frontend and backend are deliberately separated

Styling is handled exclusively with Tailwind CSS

Django is used as an API provider, not a template engine

The project prioritizes clarity and maintainability, not shortcuts

If someone complains this isn’t “fully finished,” they’re missing the point — this is a portfolio-grade foundation, not a Shopify clone.

TODO: Add roadmap


**Contributing**

Fork the repository

Create a feature branch

Write clear conventional commits

Open a pull request


**License**

This project is intended for educational and portfolio use only.

All trademarks, brand names, and assets belong to Oraimo.