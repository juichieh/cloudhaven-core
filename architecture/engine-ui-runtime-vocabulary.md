# Cloudhaven Engine / UI Runtime Vocabulary

> Status: Core architecture note
> Date: 2026-07-03
> Scope: Cloudhaven Core / Runtime / Studio UX

## Why this exists

Cloudhaven has been growing from a simple AI assistant idea into a mothership-style AI operating system.

During architecture discussions, several terms started to blur together:

- Skill
- Tool
- Workflow
- Decision
- Judge
- Verification
- Review
- Action

The confusion did not come from bad design.

The real issue was that **UI / Presentation** and **Engine / Runtime** were being mixed in the same mental model.

This document defines the separation.

---

## Core principle

> **Cloudhaven UI shows what the AI is doing.**
>
> **Cloudhaven Engine handles how the AI actually does it.**

Users should see the current mission and action, not the internal implementation details.

Example:

```text
Good UI:
🔍 Searching for current AI news
⚖️ Comparing which items matter
📝 Writing the morning brief

Bad UI:
Browser tool called
Parser running
Regex cleanup
MCP fetch
Verification node retrying
```

Human-facing status should describe **intent and progress**, not low-level tool usage.

---

## Layer model

```text
Cloudhaven
│
├── UI / Presentation Layer
│   ├── Mothership
│   ├── Studios / Rooms
│   ├── Mission View
│   ├── Progress / Action Display
│   └── Persona / Avatar surface
│
└── Engine / Runtime Layer
    ├── Mission
    ├── Decision
    ├── Workflow
    ├── Action
    ├── Skill
    ├── Tool
    ├── Verification
    ├── Judge
    ├── Review
    ├── Curator
    └── Memory
```

The UI layer is the world humans live in.

The Engine layer is the world Cloudhaven uses to work, verify, loop, recover, and learn.

---

## UI / Presentation Layer

The UI layer answers:

> **What is Cloudhaven doing right now?**

It should show readable, human-scale states:

- Mission
- Current action
- Progress
- Waiting points
- Completion state
- Warnings that require human attention

Example:

```text
📋 Mission: Make today's AI Weird Things Brief

Current progress:
✓ Searching sources
✓ Filtering interesting cases
⏳ Writing the show-style brief
□ Final review
```

The UI layer should not expose every internal call unless the user is explicitly debugging the system.

---

## Engine / Runtime Layer

The Engine layer answers:

> **How does Cloudhaven complete the mission?**

It may run many internal loops:

```text
Mission
↓
Decision
↓
Workflow
↓
Action
↓
Verification
↓
Decision
↓
...
↓
Review
↓
Curator
↓
Memory / Skill / Workflow update
```

This loop is allowed to be complex.

The user-facing UI should remain simple.

---

## Runtime vocabulary

### Mission

A mission is the user-facing goal.

It answers:

> **What are we trying to complete?**

Examples:

- Make today's AI Weird Things Brief
- Compare Italy tour candidates
- Triage the latest game news
- Review a brand positioning draft

A mission may contain multiple workflows and many actions.

---

### Decision

Decision means **flow decision**.

It answers:

> **Where should the runtime go next?**

Examples:

- Continue to the next step
- Retry search
- Switch workflow
- Ask the user
- Stop and report failure
- Escalate to a stronger model or human confirmation

Decision should not be used as a generic word for judging quality.

If the question is "which option is better?", that is **Judge**, not Decision.

---

### Workflow

A workflow is the route map for completing a mission or sub-mission.

It answers:

> **What sequence of actions should happen?**

Example:

```text
Travel comparison workflow:
1. Search candidate tours
2. Extract structured facts
3. Verify required fields
4. Judge against scoring rules
5. Summarize recommendation
6. Review quality
```

Workflow is not a single ability.

Workflow arranges actions and skills into a path.

---

### Action

An action is the currently visible unit of work.

It answers:

> **What is Cloudhaven doing right now?**

Examples:

- Searching
- Comparing
- Summarizing
- Ranking
- Verifying
- Writing
- Waiting for confirmation

Action is the best term for UI progress display.

The user does not need to see every internal tool call.

---

### Skill

A skill is a reusable capability module.

It answers:

> **What capability can Cloudhaven reuse?**

Examples:

- Search current sources
- Summarize article
- Compare candidates
- Rank travel tours
- Detect prompt drift
- Validate table format

A skill may contain prompts, model calls, tool calls, retry rules, parsers, and verification logic.

Important rule:

> **Skill may contain Tool.**

Tool is usually an implementation detail inside a skill, not a peer concept at the user-facing level.

---

### Tool

A tool is an external capability or API used by the engine.

It answers:

> **What outside system or technical function is being used?**

Examples:

- Browser
- Web search
- GitHub
- Gmail
- Google Drive
- Python
- MCP server
- File system

Tools do not choose goals by themselves.

A tool can have capability, but it does not decide what mission should be done next.

Tool should usually stay inside Engine details.

---

### Verification

Verification checks whether requirements were satisfied.

It answers:

> **Did this step meet the required condition?**

Examples:

- Did we find at least five sources?
- Does the table have all required columns?
- Is the JSON valid?
- Did the file write succeed?
- Are citations present?

Verification is closer to a pass/fail check.

It is not the same as Review.

---

### Judge

Judge compares and evaluates options.

It answers:

> **Which option is better, and why?**

Examples:

- Which Italy tour is best?
- Which AI news item deserves the top slot?
- Which game deal is worth mentioning?
- Which brand direction fits the positioning?

Judge is content evaluation.

Decision is runtime flow control.

---

### Review

Review happens after work is completed or near completion.

It answers:

> **How good was the result, and what should improve next time?**

Examples:

- Was the brief too long?
- Did the ranking feel right?
- Did the output drift from the expected style?
- What would we change if we repeated this task?

Review is retrospective quality evaluation.

It is not just pass/fail verification.

---

### Curator

Curator decides what should be preserved.

It answers:

> **What should Cloudhaven learn from this run?**

Examples:

- Save a successful workflow pattern
- Update a skill
- Add a prompt rule
- Store a recurring failure mode
- Archive a useful research source
- Remove or merge outdated skill notes

Curator turns experience into reusable structure.

---

### Memory

Memory stores persistent knowledge, preferences, events, and lessons.

It answers:

> **What should remain available after this mission ends?**

Memory may include:

- User preferences
- Project decisions
- System milestones
- Failure patterns
- Stable facts
- Studio-specific knowledge

Memory is not the same as Skill.

Memory stores context.

Skill stores reusable capability.

---

## Skill and Tool relationship

The preferred Cloudhaven model is:

```text
Workflow
└── Action
    └── Skill
        └── Tool / Model / Parser / Prompt / Retry / Verification
```

Tool should not usually appear as a top-level concept in the UI.

Example:

```text
Search Skill
├── Web search tool
├── Browser tool
├── Query expansion prompt
├── Source parser
├── Retry rule
└── Verification check
```

The user sees:

```text
🔍 Searching sources
```

Not:

```text
Calling search API
Opening browser
Parsing HTML
Running regex
```

---

## Design rule: show intent, hide implementation

Cloudhaven should follow this principle:

> **Show the human what work is being done.**
>
> **Hide how many tools, calls, retries, checks, and parsers were required.**

Exception:

Internal details can be shown when the mode is explicitly:

- Debug
- Audit
- Development
- Safety review
- Failure explanation

---

## Studio implication

Studios and rooms are primarily part of the UI / Presentation layer.

Examples:

- AI Studio
- Travel Studio
- Game Studio
- Finance Studio
- Brand Studio

A studio should feel like a human-readable workspace.

Internally, each studio may have its own workflows, skills, memory, review rules, and curator patterns.

Example:

```text
Travel Studio UI
├── My Trips
├── Candidate Pool
├── Comparison Table
├── Saved Tours
└── Current Mission

Travel Studio Runtime
├── TravelSearch workflow
├── TripRank judge
├── Price verification
├── Fatigue scoring
├── Source extraction skill
└── Curator updates
```

---

## Practical naming guidance

Use these terms carefully:

| Term | Use for | Do not use for |
|---|---|---|
| Mission | overall goal | individual tool call |
| Action | current visible work | hidden implementation detail |
| Workflow | sequence / route map | single ability |
| Skill | reusable capability module | raw API call only |
| Tool | external API / mechanism | user-facing task state |
| Verification | pass/fail requirement check | subjective quality review |
| Judge | compare / rank / evaluate options | runtime flow routing |
| Decision | runtime next-step routing | content ranking |
| Review | retrospective quality evaluation | simple validation |
| Curator | preserve and update reusable knowledge | execute normal work |

---

## Short version

```text
UI says:
I am searching, comparing, writing, or reviewing.

Engine runs:
Decision → Workflow → Action → Skill → Tool → Verification → Decision loop.

After completion:
Review → Curator → Memory / Skill / Workflow update.
```

The UI is the deck of the mothership.

The Engine is the machinery below it.

Both matter, but they should not be mixed in the same diagram.
