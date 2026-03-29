# Fintech QA Dashboard

A real-time call quality audit and compliance review dashboard for financial services QA teams. Built at [Hackathon name — update this].

## The problem it solves

QA teams at banks and fintech firms manually listen to recorded agent calls to check script adherence, disclosure compliance, and customer handling. This is slow, inconsistent, and creates regulatory risk. This dashboard surfaces AI-generated transcripts with flagged issues, scores calls against configurable rubrics, and tracks reviewer status across call queues.

## Features

- Call transcript viewer with compliance violation highlights
- Configurable scoring rubrics (script adherence, disclosure checks, escalation handling)
- QA analyst assignment and review status tracking across call queues
- Audit report export for regulatory review workflows
- Real-time queue dashboard with priority filtering

## Tech stack

Next.js · TypeScript · Tailwind CSS · Firebase · ShadCN UI

## Architecture
```
Call recordings
      │
Transcription pipeline (see call-audit-pipeline)
      │
Firebase (transcript + flag storage)
      │
Next.js dashboard ──► QA analyst review interface
                  ──► Compliance report export
```

## Run locally
```bash
npm install
cp .env.example .env.local  # add your Firebase config
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Related

Backend transcription pipeline: [call-audit-pipeline](https://github.com/Arnav1343/vosk-transcription)
