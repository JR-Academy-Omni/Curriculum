# Classroom worksheet

language=en

## Task 0 · Classify the stack

Classify HTML, CSS, JavaScript, React, Node.js, Express or NestJS, Nginx and AWS by responsibility and execution location. Distinguish building frontend resources from executing them in the browser.

## Task 1 · Trace the application

Open the completed record. Identify the browser, API, backend and persistence layer. Explain where each component runs. Save a new record and reopen it after a reload.

Evidence: ____________________

## Task 2 · Inspect the API

Capture one POST /api/notes request. Record the method, path, body fields, status, response ID and X-Request-ID. Remove cookies and other credentials from shared evidence.

Evidence: ____________________

## Task 3 · Verify independently

Use the API request panel. Send GET, then a valid POST, then GET the returned note ID. Compare the result with the record page.

Evidence: ____________________

## Task 4 · Diagnose one failure

Choose Invalid field name, Missing session, Read-only role or Incorrect API path. Submit once. Record the first failing boundary, evidence and expected correction. Restore Normal request and verify a successful save and reread.

Evidence: ____________________

## Task 5 · Map to AWS

Map the browser, ALB, ECS/Fargate, RDS and S3. Add DNS, certificate, IAM, secret management, logs and the outbound network path. Separate request flow from supporting services.

Evidence: ____________________

## Task 6 · Transfer to your project

Identify your actual API contract, data location, runtime environment and current blocker. State which claims you verified and which remain unresolved.

Evidence: ____________________

Printable responsive HTML: public/materials/worksheet.html
Answers: public/materials/answers.html


## Task 7 · Design an AI job workflow

Separate a short synchronous save from long document generation. Identify Producer, Message Queue, Worker, Job status, Result store, latency boundary, timeout/retry/idempotency, cache scope and capacity controls.


## Task 9 · Design the delivery pipeline

Draw the React, Node.js/Docker and IaC paths. Define checks, artifacts, environment configuration, release decisions, readback and rollback, including database compatibility.
