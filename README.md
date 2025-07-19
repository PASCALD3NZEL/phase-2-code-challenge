Smart Goal Planner
A full-stack financial goal management dashboard built with React and json-server. Users can track multiple savings goals, make deposits, edit/update goals, and view their overall savings progress.

Features
CRUD operations: Add, edit, delete, and update savings goals

Progress Tracking: Visual progress bar for each goal, including remaining and overdue status

Deposits: Allocate deposits directly to any savings goal

Overview: See total goals, total saved, completed goals, and deadlines at a glance

Persistent Storage: All data is persisted in db.json using json-server as a REST API

Technologies Used
React

json-server (simulated backend API)

HTML/CSS/JavaScript

Getting Started
Prerequisites
Node.js (v16 or higher recommended)

npm (included with Node.js)

Installation
Clone this repository:

bash
git clone <your-repo-url>
cd smart-goal-planner
Install dependencies:

bash
npm install
Add db.json to your project’s root directory
(Sample data provided below, or use your own)

Start the backend (json-server):

bash
npx json-server --watch db.json --port 3000
The API will run at http://localhost:3000/goals

Start the React app:

bash
npm start
The app will open at http://localhost:3001
(or similar port, depending on your setup; make sure both servers are running)

Usage
Add a Goal: Enter goal details (name, target amount, category, deadline) and submit.

View Goals: View all active and completed goals in a dashboard format.

Edit/Update Goal: Modify goal details by clicking edit (if implemented).

Deposit Funds: Enter a deposit amount and choose the goal to add funds to.

Delete Goal: Remove a goal permanently.

Dashboard Overview: See statistics for total goals, completion, savings, deadlines, and warnings for overdue/expiring goals.

Notes
This project uses json-server for a mock RESTful API.

All CRUD actions are persisted to db.json.

Feel free to expand with features such as authentication, goal editing modals, or charts.

License
MIT (or your chosen license)

Contact
For questions, contact PASCAL DENZEL. at pascaldenzel7@gmail.com.

Smart Goal Planner helps users take control of their financial future, one smart target at a time!
Dont forget to enjoy the light and dark theme mode.
