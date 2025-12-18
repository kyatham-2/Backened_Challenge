# design.md – Backend Challenge (Reporting API)

This document explains the architecture, data models, authentication, concurrency handling, file storage decisions, and improvements for the Reporting API project.

====================================================
1. SCHEMA & DATA MODEL
====================================================

The project uses in-memory storage (no database). Three main data structures are used.

-------------------------
1.1 Report Model
-------------------------
Required fields:
• title

Optional fields:
• description

Final structure:
{
  id: number,
  title: string,
  description?: string,
  createdAt: Date,
  updatedAt: Date
}

-------------------------
1.2 Entry Model
-------------------------
The challenge mentions nested entries.  
A simplified version is implemented:

{
  id: string,
  message: string,
  createdAt: number
}

Entries are stored per-report but not fully integrated into API responses.

-------------------------
1.3 Attachment Model
-------------------------
Each file uploaded to a report has:

{
  filename: string,
  original: string
}

Files are stored locally in /uploads via Multer.

====================================================
2. AUTHENTICATION & AUTHORIZATION
====================================================

JWT-based authentication is used with a static secret.

Token payload:
{
  "userId": "...",
  "role": "editor" | "reader"
}

--------------------------------------
ROLES
--------------------------------------
EDITOR (full access)
• create
• update
• upload attachment
• get report

READER (limited access)
• get report only

NOTE:
Authorization middleware is a stub (it allows all) but structure is in place.

====================================================
3. CONCURRENCY CONTROL
====================================================

Because data lives in memory:
• Only one process handles requests
• No risk of concurrent writes
• Updates replace previous objects immediately

In a real system, concurrency would require:
• Optimistic locking (versioning)
• Atomic DB transactions
• Idempotency keys for PUT

====================================================
4. FILE STORAGE & ACCESS SECURITY
====================================================

File uploads use Multer:
• Upload directory: /uploads
• Only metadata stored in memory

Missing features (future work):
• No signed URLs for secure downloads
• No file access permissions
• No virus scanning

This is acceptable for an in-memory challenge.

====================================================
5. ASYNCHRONOUS SIDE EFFECT STRATEGY
====================================================

A stub async job is implemented to simulate:
• Notifications
• Metrics calculation
• Background indexing

Example:
runAsyncJob(reportId) → resolves in 1 second.

Not automatically triggered, but shows intended design.

====================================================
6. CODE QUALITY PRACTICES
====================================================

Implemented:
• TypeScript strict mode
• Modular folder structure
• Controllers / services separation
• Zod validation for request bodies
• Clear naming and code readability

Not implemented but recommended:
• ESLint + Prettier
• Unit tests (Jest)
• Central logging service

====================================================
7. SCALING & OBSERVABILITY
====================================================

To scale in production, system would need:
• A real database (PostgreSQL, DynamoDB)
• S3 for file storage
• Load balancers for multiple instances
• Redis for distributed locks + caching
• Monitoring dashboards (CloudWatch, Datadog)
• Structured logs (JSON logs)
• Rate limiting + WAF for security

Currently implemented:
• Basic console logging
• Simple folder structure

====================================================
8. OPTIONAL FEATURES NOT IMPLEMENTED
====================================================

The challenge lists optional enhancements.  
These remain unimplemented but can be added easily:

• Pagination (entriesPage, entriesSize)
• Sorting (entriesSort)
• Filtering (entriesFilter)
• Compact view
• include=entries, include=metrics
• Idempotency key support
• Role enforcement (reader must NOT update)
• Signed URLs for attachments
• Metrics calculation
• Audit logs
• Retry logic for async jobs

====================================================
9. SUMMARY
====================================================

The Reporting API demonstrates:
• CRUD operations for reports
• File upload support
• Basic auth structure with roles
• Clear TypeScript architecture
• In-memory data handling
• Structured controllers, services, middleware

This solution satisfies the core requirements of the challenge and provides clear pathways for expanding into a production-grade system.

