
# Vehicle Tracker Application

## Objective

The goal of this project is to create a web application that displays a vehicle moving on a map in real-time. The application shows the vehicle's current location and its path using the Leaflet mapping library and a backend Node.js server for data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Backend API](#backend-api)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time vehicle tracking on a map.
- Displays vehicle's current location with a custom icon.
- Shows the vehicle's path using a polyline.
- Customizable vehicle icon that rotates to indicate the direction of movement.
- Interactive map with popups showing detailed vehicle information.
- Backend API to provide vehicle data.

## Technologies Used

- Frontend:
  - React
  - Leaflet
  - react-leaflet
  - leaflet-routing-machine
  - CSS
- Backend:
  - Node.js
  - Express

## Installation

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Steps

#### Clone the repository:

```sh
git clone https://github.com/yourusername/vehicle-tracker.git
cd vehicle-tracker
```

#### Install the dependencies:

```sh
npm install
```

#### Start the backend server:

```sh
cd backend
npm install
npm start
```

The backend server will be running at `http://localhost:5000`.

#### Start the frontend server:

Open a new terminal in the project root directory:

```sh
npm start
```

The frontend application will be available at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. The map will display the vehicle's current position and its path.
3. Click on the vehicle icon to see detailed information about the vehicle.

## Backend API

The backend server provides an API to supply vehicle data.

### Endpoints

#### GET /

Returns the current location and details of the vehicle.

**Response:**

```json
const dummyData = [
    { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
]
```

## Customization

You can customize the application by modifying the following files:

### 1. Vehicle Icon

Update the `vehicleIcon.png` file in the `public` directory to change the vehicle's icon.

### 2. Map Settings

Modify the initial map settings such as the center and zoom level in the `Map` component:

```jsx
const start = [17.385044, 78.486671]; // Change the starting point
const end = [17.388900, 78.486672];   // Change the ending point

<MapContainer center={start} zoom={13} style={{ height: "100vh", width: "100%" }}>
```

### 3. Vehicle Data

Update the `VehiclePopup` component with the relevant vehicle information:

```jsx
<VehiclePopup
  data={{
    vehicleType: "WIRELESS",
    timestamp: "Jul 20, 07:09 AM",
    location:
      "Vijay Nagar Rd, Vijay Nagar, Deolali, Nashik, Deolali, Maharashtra",
    speed: "0.00",
    distance: "0.00",
    battery: "16%",
    totalDistance: "834.89 km",
    distanceFromLastStop: "0.00 km",
    totalRunning: "00:00m",
    todayStopped: "07h:10m",
    todayIdle: "00h:00m",
    currentStatus: "STOPPED",
    todayMaxSpeed: "0.00 km/h",
    todayIgnitionOff: "00h:00m",
    todayIgnitionOn: "00h:00m",
    ignitionOffSince: "00h:00m",
    todayAcOn: "00h:00m",
    todayAcOff: "00h:00m",
    acOffSince: "00h:00m",
    customValue1: "16%",
  }}
/>
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## License

This project is licensed under the MIT License.

---

Feel free to update the repository URL and any other specific details as necessary.
