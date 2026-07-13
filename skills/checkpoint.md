# Checkpoint Skill

## Purpose

`CHECKPOINT.md` is the current work save point for an active project.

It is not a design document, construction manual, changelog, or retrospective.
It answers one question:

> If a human or Agent takes over now, what must they know to continue without reconstructing the whole project?

Checkpoint protects both human and Agent continuity when:

- a phase ends
- work pauses for the day
- the conversation or context is becoming too long
- an Agent, workspace, device, or project path changes
- several projects are being worked on at the same time

## Core Rule

Every active project should keep one root-level file:

```text
CHECKPOINT.md
```

Read order for active work:

```text
README.md
→ CHECKPOINT.md
→ the documents listed under Read First
→ continue work
```

## Update Timing

Update `CHECKPOINT.md`:

1. after validation and review at the end of every meaningful phase
2. before changing conversation, Agent, workspace, device, or repository path
3. before a long pause
4. whenever the current state or next action materially changes

Do not wait until context is already lost.

## Required Fields

```md
# CHECKPOINT

## Current Phase
What phase is active now?

## Completed
What is confirmed complete?

## Verified
What was actually tested or reviewed?

## In Progress
What is currently open?

## Next
What should happen next, in priority order?

## Do Not Touch
What boundaries, frozen decisions, or risky areas must not be changed?

## Read First
Which files are necessary for the next person or Agent?

## Last Updated
YYYY-MM-DD
```

## Writing Rules

- Record the real state, not the intended state.
- Only mark work complete after validation.
- Keep it short enough to restore work quickly.
- Link to detailed documents instead of copying the whole project history.
- Replace outdated current-state information; history belongs in construction logs, retrospectives, decision logs, or changelogs.
- If nothing is in progress, say so explicitly.

## Relationship to Other Files

```text
README        = What is this project?
Architecture  = How is it structured?
Workflow      = How should work be done?
Retrospective = What did the phase teach us?
CHECKPOINT    = Where are we now, and what happens next?
```

## One-line Rule

> README tells you where you are. CHECKPOINT tells you where to continue.
