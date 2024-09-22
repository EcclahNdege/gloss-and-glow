### Requirements Document

#### 1. **Purpose**
   - Create a platform where hairdressers can advertise their services.
   - Allow clients to view services, request appointments, chat with hairdressers, and manage bookings.
   - Implement appointment scheduling, rescheduling, and status management for hairdressers and clients.
   - Enable communication through WhatsApp and secure authentication with JWT.

#### 2. **Key Features**
   - **User Roles**:
     - **Hairdresser**: Can create services, view and manage appointments.
     - **Client**: Can view services, request appointments, and communicate with hairdressers.
   - **Authentication**: Use JWT-based token authentication (via cookies).
   - **Appointment Scheduling**:
     - Clients can request appointments.
     - Hairdressers can accept/reject requests and set the appointment time.
     - Clients can confirm appointments or request rescheduling.
   - **WhatsApp Communication**: Clients can initiate a chat with hairdressers via WhatsApp.
   - **Notifications**: Notify users on appointment updates (e.g., via email or SMS).
   
#### 3. **System Architecture**
   - **Frontend**: React.js
   - **Backend**: Node.js, Express, MongoDB
   - **Authentication**: JWT Token (stored in cookies)
   - **Database**: MongoDB

#### 4. **Functional Requirements**
   - **Hairdresser Management**:
     - Create profile and list services.
     - Manage appointments (accept/reject/set time).
   - **Client Functionality**:
     - View services and make appointment requests.
     - Confirm or reschedule appointments.
     - Start WhatsApp chat with hairdresser.
   - **Authentication**:
     - Register/login via email and password.
     - JWT-based authentication.
   - **Appointment Management**:
     - Schedule, reschedule, and cancel appointments.
     - Track appointment status (pending, confirmed, completed, canceled).

#### 5. **Non-Functional Requirements**
   - **Scalability**: Support multiple hairdressers and clients concurrently.
   - **Security**: Secure JWT-based authentication, protect sensitive data.
   - **Performance**: Optimize API performance for quick response times.
   - **Reliability**: Ensure the system handles edge cases like invalid appointment times.
