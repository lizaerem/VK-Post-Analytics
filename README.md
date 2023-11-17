# VK Post Analytics

VK Post Analytics is a web application that allows users to analyze the engagement of their recent **VK** (VKontakte) posts. The application fetches data from the VK API and presents key metrics for the last few posts, providing insights into post performance.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Getting Started


### Prerequisites

- `Node.js` and `npm` installed (for both frontend and backend).
  - Visit the official [Node.js website](https://nodejs.org/) and follow the instructions to download and install `Node.js`. `npm` is included with `Node.js`.
- VK API credentials:
  - Visit the [VK Developer portal](https://vk.com/dev) and create a new standalone application. Note down the _App ID_ and _App Secret_.
  - Create a `.env` file in the `server` directory with your **VK API** credentials:
    ```
    VK_APP_ID=your-app-id
    VK_APP_SECRET=your-app-secret
    VK_REDIRECT_URI=http://localhost:3001/auth/vk/callback
    ```

### Installation

1. Clone the repository

2. Install dependencies for the frontend:
```bash
cd src && npm install
```

3. Install dependencies for the backend:
```bash
cd server && npm install
```


### Running the Application
1. Start the backend server:
```bash
cd server && npm start
```
The server will run on http://localhost:3001 by default.

2. Start the frontend:
```bash
cd src && npm start
```
The React app will run on http://localhost:3000 by default.

3. Open your browser and go to http://localhost:3000 to use the VK Post Analytics tool.


## Technologies Used
- **React.js**
- **Node.js**
- **Express.js**
- **VK API**
- **Chart.js**


## Project Structure
```
VK-Post-Analytics/         (Root directory created by create-react-app)
|-- public/                (Public assets like HTML, images, etc.)
|-- src/                   (Source code for the React frontend)
|   |-- components/        (React components)
|   |-- styles/            (CSS or styling files)
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- server/                (Node.js server directory)
|   |-- node_modules/      (Node.js dependencies - created after npm install)
|   |-- src/               (Server-side source code)
|   |   |-- index.js       (Entry point for the server)
|   |   |-- routes/        (API routes)
|   |   |-- controllers/   (Route controllers)
|   |   |-- ...
|   |-- package.json       (Server dependencies and configurations)
|   |-- ...
|-- package.json           (Root project dependencies and configurations)
|-- README.md              (Project documentation)
|-- LICENSE                (License)
```
