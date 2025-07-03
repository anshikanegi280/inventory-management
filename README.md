# Inventory Management System

## Description
This project is an Inventory Management System designed to help businesses manage their inventory efficiently. It allows users to track stock levels, manage orders, and generate reports. Users can view stock quantities, place orders for restocking, and access detailed inventory reports.

## Technologies Used
- **Backend Framework:** Express.js
- **Runtime:** Node.js
- **Database:** MongoDB

## Features
- View current inventory levels
- Add, update, and delete inventory items
- Create and manage orders
- Generate inventory and order reports

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB account and connection string

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd inventory-management-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Update the MongoDB connection string in `src/config/database.js` with your own credentials.

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The application will be running on `http://localhost:3000`.

## API Endpoints
- **Inventory**
  - `GET /api/inventory` - Retrieve all inventory items
  - `POST /api/inventory` - Add a new inventory item
  - `PUT /api/inventory/:id` - Update an existing inventory item
  - `DELETE /api/inventory/:id` - Delete an inventory item

- **Orders**
  - `POST /api/orders` - Create a new order
  - `GET /api/orders` - Retrieve all orders
  - `PUT /api/orders/:id` - Update the status of an order

- **Reports**
  - `GET /api/reports/inventory` - Generate inventory report
  - `GET /api/reports/orders` - Generate order report

## Testing
A Postman collection is included in the `tests/postman` directory for testing the API endpoints. Import the `inventory-management.postman_collection.json` file into Postman to get started with sample data.

## License
This project is licensed under the MIT License.