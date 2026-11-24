# L01 · Design an asynchronous video job

Open the [complete job and its timeline](result.html). Inspect the completed task and the recovery trace before your group starts.

## Brief

An authenticated creator uploads a video. Processing averages 90 seconds, and a sustained workload creates 1,200 jobs per hour. The creator can close the browser and return later. A successful job exposes an authorized playback URL. The same request may be retried and a job message may be delivered again.

## Draw the design · 15 minutes

- List the actor, input object, expected output and system boundary. Identify which uploader actions must finish before a job can be created.
- Compare a request that waits for processing with an API that returns a job ID. Draw your chosen sequence, including status and playback reads.
- Name the state owner and provide a state table for queued, processing, ready and failed. Include the key your API uses to deduplicate a request.
- Estimate average in-flight processing. Distinguish demand from a capacity commitment.

## Change the constraint · 20 minutes

The worker writes a valid output, then exits before it updates the job or acknowledges the message. Show what happens when the same job is delivered again. Indicate how you would verify that the existing output is the right artifact.

## Peer review · 5 minutes

- Check whether a previously submitted job can survive a browser refresh.
- Check whether a worker can acknowledge work before the job is ready.
- Leave one observable test criterion on the drawing.

## Reference design

At steady state, 1,200 / 3,600 is about 0.33 jobs per second. At 90 seconds per job, the mean processing concurrency is about 30. Use peak arrival rate, tail latency, downstream quotas and queue age to plan headroom.

The browser obtains an authorized upload URL and sends bytes to object storage. When upload completes, POST /jobs accepts the owned object version and an idempotency key. The database transaction records the job and an outbox message. A relay publishes the message and the API returns 202 with a job ID. A conditional write records the active attempt. A worker reads the original file, writes a deterministic output, marks the job ready, then acknowledges the message. GET /jobs/{id} authorizes the caller and returns the state. A short-lived playback URL appears when the validated output is ready.

On redelivery, the worker compares the output key, source version, checksum or media metadata with the job. If they match, a conditional job update can finish the previously interrupted operation. Keep invalid partial output separate and retry under policy. A replay with the same user, key and input returns the same job. A reused key with different input is a conflict.

Validate by submitting one input twice, interrupting after the storage write, then reloading. Observe one stable job ID, one valid output and the ready-to-play UI.
