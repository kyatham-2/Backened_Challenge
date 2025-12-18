# Backend Challenge – Reporting API

This project implements a simplified reporting API using Node.js, Express, and TypeScript with in-memory storage.

===========================
=     FEATURES DONE       =
===========================
• Create report  
• Get report  
• Update report  
• Upload attachment  
• Validation using Zod  
• Auth + roles (stubbed)  
• In-memory storage  
• Async job stub  

===========================
=   FEATURES NOT DONE     =
===========================
• Pagination  
• Sorting  
• Compact view  
• include=entries, include=metrics  
• Idempotency keys  
• Real RBAC enforcement  
• Signed download URLs  
• Metrics calculation  

===========================
=    SETUP + RUN STEPS    =
===========================
1. Install dependencies:
npm install

2. Start development server:
npm run dev
Server runs at:
http://localhost:3000

3. Build TypeScript:
npx tsc

4. Run compiled build:
node dist/server.js

===========================
=     AUTHENTICATION      =
===========================
Use this header in Postman:
Authorization: Bearer <token>

EDITOR TOKEN (full access)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwicm9sZSI6ImVkaXRvciIsImlhdCI6MTc2NjA5MTY3MywiZXhwIjoxNzY2MDk1MjczfQ.TTvpUqKMM68ZUJaELvMj1jABeaxunkQWeZoTMpOLeNQ

READER TOKEN (read only)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyOTk5Iiwicm9sZSI6InJlYWRlciIsImlhdCI6MTc2NjA5MTY5MSwiZXhwIjoxNzY2MDk1MjkxfQ.g0eqWw-Oy35Ir-RxQ3OFgrH1yugzH2z9EgK3QXXRe5Q

===========================
=     POSTMAN USAGE       =
===========================

----- CREATE REPORT -----
POST /reports
Body (JSON):
{
  "title": "Road Safety Report",
  "description": "Details about road safety improvements."
}

----- GET REPORT -----
GET /reports/1

----- UPDATE REPORT -----
PUT /reports/1
Body (JSON):
{
  "title": "Updated Report Title"
}

----- UPLOAD ATTACHMENT -----
POST /reports/1/attachment
Postman → Body → form-data:
Key: file
Type: File
Value: select any file

===========================
=   PROJECT STRUCTURE     =
===========================
src/
 ├─ controllers/
 ├─ middleware/
 ├─ data/
 ├─ services/
 ├─ models/
 ├─ routes/
 ├─ utils/
 ├─ validation/
 ├─ app.ts
 ├─ server.ts

===========================
=   WHAT IS MISSING?      =
===========================
• Real authorization logic  
• Metrics calculation  
• Entry aggregation  
• Pagination + sorting  
• Signed URLs for attachments  
• Idempotency handling  
• Strong validation rules  
• Database layer  
• Production-level error handling  

===========================
=   SUMMARY               =
===========================
The API supports basic CRUD for reports, attachment upload, and stubbed authentication.  
The rest is left as future enhancements as per the challenge requirements.

