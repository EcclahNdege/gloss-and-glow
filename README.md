### API Documentation

---

#### **1. User Authentication**

##### **1.1 Register User**
- **Endpoint**: `POST /auth/register`
- **Description**: Register as a client or hairdresser.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string",
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
- **Endpoint**: `GET /auth/logout`
- **Description**: Log out the user (clear JWT token).
- **Response**:
  - `200 OK`: Successfully logged out.

---

#### **2. Hairdresser Services**

##### **2.1 Create Service**
- **Endpoint**: `POST me/services`
- **Description**: Hairdresser can add a new service.
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number"
    "image": "file" //Should be a 1:1 aspect ratio image, less than 10 mbs
  }
  ```
- **Response**:
  - `201 Created`: Service created successfully.
  - `403 Forbidden`: User is not authenticated, or verified

##### **2.2 Get All Services**
- **Endpoint**: `GET /services`
- **Description**: Get a list of services. Is paginated
- **Response**:
  - `200 OK`: List of services, 10 at a time.

##### **2.2 Get User Services**
- **Endpoint**: `GET me/services`
- **Description**: Get a list of personal services. Is paginated
- **Response**:
  - `200 OK`: List of services belonging to logged in user, 10 at a time.

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
    "clientId": "string",
    "preferredTime": "string"
  }
  ```
- **Response**:
  - `201 Created`: Appointment request sent.
  - `400 Bad Request`: Invalid data.

##### **3.2 View Appointments**
- **Endpoint**: `GET me/appointments/`
- **Description**: View all appointment requests.
- **Response**:
  - `200 OK`: List of appointment requests.
  - `403 Forbidden`: Something went wrong with validation.

##### **3.3 Accept/Reject Appointment**
- **Endpoint**: `PATCH me/appointments/:appointmentId`
- **Description**: Hairdresser accepts or rejects an appointment.
- **Request Body**:
  ```json
  {
    "status": "accepted" | "rejected",
    "preferredTime": "string"
  }
  ```
- **Response**:
  - `200 OK`: Appointment updated.
  - `403 Forbidden`: Error with authorization

##### **3.4 Reschedule Appointment (Client)**
- **Endpoint**: `PATCH me/appointments/:appointmentId/reschedule`
- **Description**: Requests to reschedule the appointment.
- **Request Body**:
  ```json
  {
    "preferredTime": "string"
  }
  ```
- **Response**:
  - `200 OK`: Appointment rescheduled.
  - `403 Forbidden`: Authorizaton error

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
- **Endpoint**: `GET /me/profile`
- **Description**: Retrieve user profile (both client and hairdresser).
- **Response**:
  - `200 OK`: User profile data.
