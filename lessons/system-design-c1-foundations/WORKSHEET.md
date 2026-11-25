# L01 · Design an order report export

Before you start, look at the [complete video upload design and its timeline](public/result.html). Use the same five steps and the component table from P13. Work in groups for 15 minutes, then spend 5 minutes reviewing another group's drawing.

## Brief

Operations staff click *Export this month's orders* in an admin console. The system builds an Excel file and, a few minutes later, gives the operator a download link. At the weekday peak there are 600 exports per hour. Each export takes about 2 minutes and produces a file of about 20 MB. Operators sometimes click the button twice, and files must stay downloadable for 7 days.

## 1 · Clarify the requirements · 3 minutes

- List the functional requirements: who starts an export, what they receive and how they find it again.
- List at least three non-functional requirements, such as response time, availability, who may download a file and how long files are kept.

## 2 · Estimate · 3 minutes

- How many exports run at the same time during the peak hour?
- How much new file storage does one peak hour create? What does that suggest about where the files belong?

## 3 · Draw the high-level design · 5 minutes

- Draw boxes and arrows from the operator's click to the download link.
- Label the load balancer, web service, database, object storage, message queue and workers. Explain why each one is there.

## 4 · Deep dive · 2 minutes

- An operator clicks Export twice within a second. Show how your design creates only one export job and one file.

## 5 · Failures and bottlenecks · 2 minutes

- A worker stops halfway through an export. What does the operator see, and how does the job finish?
- The database is slow during month-end. Which part of your design is affected first?

## Peer review · 5 minutes

- Can you follow every arrow from the click to the download?
- Does each component on the drawing solve a problem the group can name?
- Does a second click, or a repeated message, still produce exactly one file?

## Reference design

Requirements. An operator starts an export and immediately receives a job ID. The page shows queued, processing, ready or failed. A ready job offers a short-lived download link that only that operator's organization can use. Files are deleted after 7 days.

Estimate. 600 / 3,600 is about 0.17 exports per second. At 120 seconds each, about 20 exports run at the same time. One peak hour creates 600 × 20 MB = 12 GB. Generated files belong in object storage, while the database stores only job records.

High-level design. The browser calls the web service through a load balancer. The service saves an export job in the database and puts a message on a queue, then returns the job ID. Workers take messages, read the orders, write the Excel file to object storage, mark the job ready and then acknowledge the message. The browser checks the job by ID and receives a signed download URL when it is ready.

Deep dive. The browser sends a request key with the export request. The database stores one job per user and request key, so a second click returns the existing job. Each job writes to a fixed file path, so a repeated message overwrites or reuses the same file instead of creating another one.

Failures. If a worker stops, the message is not acknowledged and the queue delivers it again. The next worker checks whether the file already exists and is complete, then finishes the job. A slow database first delays the workers that read orders. Run exports against a read replica, cap the number of workers and let the queue absorb the backlog while the status page keeps showing processing.
