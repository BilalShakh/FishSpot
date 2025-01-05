
# Fish Spot 🎣

A full-stack application that enables fishing enthusiasts to discover and share fishing locations. Fish Spot allows users to create profiles, mark fishing spots on an interactive map, and share photos or videos with the community. Built with a scalable architecture leveraging AWS services for seamless performance.


## 🏗️ Architecture Evolution

### Current Architecture (Cloud-Enabled)
- **AWS EC2** for hosting the backend
- **AWS S3** for secure media storage
- **React** for dynamic frontend interfaces
- **Node.js** with Express for backend REST APIs
- **MySQL** for structured data storage

### Initial Architecture
- Local deployment setup for development
- Limited scalability and media storage
- Manual environment management

---

## 🚀 Features

### API Endpoints
#### 1. `/api/spots` (GET, POST)
- Fetches and adds fishing spots to the database
- Includes media links and spot details

#### 2. `/api/user` (POST)
- Handles user authentication and registration

#### 3. `/api/uploads` (POST)
- Manages secure media uploads to AWS S3

---

## 🛠️ Technical Stack

### Core Technologies
- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express, MySQL
- **Cloud:** AWS EC2, AWS S3

### Key Dependencies
- `express` for API creation
- `mysql2` for database interaction
- `aws-sdk` for AWS S3 integration
- `react-router-dom` for frontend routing

---

## 🚀 Deployment

### Prerequisites
1. AWS Account with S3 and EC2 permissions
2. MySQL database setup
3. Node.js and npm installed locally

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/BilalShakh/FishSpot.git
   cd FishSpot
   ```

2. Install dependencies:
   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Backend:
     ```bash
     cd ../server
     npm install
     ```

3. Configure environment variables:
   - Backend `.env` file:
     ```env
     DB_HOST=your-db-host
     DB_USER=your-db-user
     DB_PASSWORD=your-db-password
     AWS_ACCESS_KEY=your-aws-access-key
     AWS_SECRET_KEY=your-aws-secret-key
     S3_BUCKET_NAME=your-s3-bucket
     ```

4. Deploy the backend to AWS EC2 and set up the S3 bucket.

5. Run locally for testing:
   - Backend:
     ```bash
     cd server
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

---

## 📊 Performance Metrics

- **Media upload time:** < 1 second for typical image files
- **API response time:** < 200ms for CRUD operations
- **Scalability:** Supports 150+ concurrent users with current configuration

---

## 🔒 Security

- User authentication with hashed passwords
- AWS S3 for encrypted media storage
- Secure API endpoints with input validation

---

## 💰 Cost Optimization

### AWS EC2
- Scales compute resources based on demand
- Pay-per-use pricing model

### AWS S3
- Optimized for low-cost, secure storage
- Pay-per-storage and retrieval operations

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

Project Link: [https://github.com/BilalShakh/FishSpot](https://github.com/BilalShakh/FishSpot)
