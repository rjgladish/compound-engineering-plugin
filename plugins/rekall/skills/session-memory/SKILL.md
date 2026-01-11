---
name: rekall-session-memory
description: Preserves conversation context before compaction. USE WHEN context is filling up, user mentions memory loss, or before running /compact.
---

# Session Memory Preservation

This skill ensures conversations are durably archived before context compaction.

## When This Activates

The PreCompact hook automatically triggers when:
- Context window fills up (auto-compact)
- User runs `/compact` manually

## What Happens

1. **Session state updated** - Tracks compact count
2. **Episodic-memory sync** - Archives and indexes conversation
3. **Feedback provided** - Confirms archival to user

## Session State

Session information is stored in `~/.claude/.current-session`:

| Field | Description |
|-------|-------------|
| `session_id` | Claude Code session ID |
| `started` | Session start timestamp |
| `project` | Derived from working directory |
| `name` | User-provided session name (optional) |
| `compact_count` | Number of compactions in this session |

## Naming Sessions

For better recall, name your session:

```bash
# From terminal (if kai CLI is installed)
kai session name "feature-x implementation"
```

Or set in the session file directly.

## Searching Archived Conversations

After compaction, conversations remain searchable:

```
/search-conversations "what we discussed about authentication"
```

## Dependencies

This skill requires the `episodic-memory` plugin to be installed:

```bash
/plugin install episodic-memory@superpowers-marketplace
```

## Proactive Usage

If you notice the context is getting long and contains valuable discussion:

1. Consider naming the session for future reference
2. Run `/compact` manually to trigger controlled archival
3. Continue with preserved context

The PreCompact hook ensures nothing is lost during the transition.
