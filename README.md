### API Documentation

#### Base URL: `/api`

---

#### **1. User Authentication**

##### **1.1 Register User**
- **Endpoint**: `POST /auth/register`
- **Description**: Register as a client or hairdresser.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string" // either 'client' or 'hairdresser'
  }
  ```
- **Response**:
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: Validation errors.

##### **1.2 Login User**
- **Endpoint**: `POST /auth/login`
- **Description**: Log in to the system and receive a JWT token.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`: JWT token set in cookie.
  - `401 Unauthorized`: Invalid credentials.

##### **1.3 Check Login Status**
- **Endpoint**: `GET /auth/status`
- **Description**: Check if a user is logged in.
- **Response**:
  - `200 OK`: User is logged in.
  - `401 Unauthorized`: No valid JWT token.

##### **1.4 Logout User**
- **Endpoint**: `POST /auth/logout`
- **Description**: Log out the user (clear JWT token).
- **Response**:
  - `200 OK`: Successfully logged out.

---

#### **2. Hairdresser Services**

##### **2.1 Create Service**
- **Endpoint**: `POST /services`
- **Description**: Hairdresser can add a new service.
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number"
  }
  ```
- **Response**:
  - `201 Created`: Service created successfully.
  - `403 Forbidden`: Only hairdressers can create services.

##### **2.2 Get All Services**
- **Endpoint**: `GET /services`
- **Description**: Get a list of all services.
- **Response**:
  - `200 OK`: List of services.

---

#### **3. Appointments**

##### **3.1 Request Appointment**
- **Endpoint**: `POST /appointments`
- **Description**: Client requests a new appointment.
- **Request Body**:
  ```json
  {
    "serviceId": "string",
    "hairdresserId": "string",
    "preferredTime": "string"
  }
  ```
- **Response**:
  - `201 Created`: Appointment request sent.
  - `400 Bad Request`: Invalid data.

##### **3.2 View Appointments (Hairdresser)**
- **Endpoint**: `GET /appointments/hairdresser`
- **Description**: Hairdresser views all appointment requests.
- **Response**:
  - `200 OK`: List of appointment requests.
  - `403 Forbidden`: Only hairdressers can view this data.

##### **3.3 Accept/Reject Appointment**
- **Endpoint**: `PATCH /appointments/:appointmentId`
- **Description**: Hairdresser accepts or rejects an appointment.
- **Request Body**:
  ```json
  {
    "status": "accepted" | "rejected",
    "scheduledTime": "string" // Optional, set if accepted
  }
  ```
- **Response**:
  - `200 OK`: Appointment updated.
  - `403 Forbidden`: Only hairdressers can perform this action.

##### **3.4 Reschedule Appointment (Client)**
- **Endpoint**: `PATCH /appointments/:appointmentId/reschedule`
- **Description**: Client requests to reschedule the appointment.
- **Request Body**:
  ```json
  {
    "newTime": "string"
  }
  ```
- **Response**:
  - `200 OK`: Appointment rescheduled.
  - `403 Forbidden`: Only clients can perform this action.

##### **3.5 Cancel Appointment (Both)**
- **Endpoint**: `DELETE /appointments/:appointmentId`
- **Description**: Cancel the appointment.
- **Response**:
  - `200 OK`: Appointment canceled.

---

#### **4. WhatsApp Chat**

##### **4.1 Initiate WhatsApp Chat**
- **Endpoint**: `GET /whatsapp/chat`
- **Description**: Initiate a WhatsApp chat with the hairdresser.
- **Query Parameters**:
  - `hairdresserId`: The ID of the hairdresser.
- **Response**:
  - `302 Redirect`: Redirects to WhatsApp chat link with the hairdresser.

---

#### **5. User Profile**

##### **5.1 Get Profile**
- **Endpoint**: `GET /users/:userId`
- **Description**: Retrieve user profile (both client and hairdresser).
- **Response**:
  - `200 OK`: User profile data.
