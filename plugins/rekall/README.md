# Rekall

> "We can remember it for you wholesale." - Total Recall

Durable memory through pre-compaction exports. Rekall ensures your conversations are archived and indexed before context compaction occurs, preventing memory loss.

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    Context Compaction                        │
├─────────────────────────────────────────────────────────────┤
│  1. Context fills up OR user runs /compact                  │
│  2. PreCompact hook fires (rekall activates)                │
│  3. rekall runs: episodic-memory sync                       │
│     → Archives conversation to episodic-memory store        │
│     → Indexes with embeddings for semantic search           │
│     → Generates summary                                     │
│  4. Compaction proceeds (context summarized)                │
│  5. Conversation remains searchable via episodic-memory     │
└─────────────────────────────────────────────────────────────┘
```

## Requirements

- **episodic-memory plugin** - Rekall depends on episodic-memory for storage and indexing

```bash
/plugin install episodic-memory@superpowers-marketplace
```

## Installation

```bash
/plugin install rekall@compound-engineering
```

## What Gets Preserved

When compaction triggers, rekall ensures:

1. **Full conversation transcript** - Copied to episodic-memory archive
2. **Semantic embeddings** - Generated for vector search
3. **Conversation summary** - Created for quick reference
4. **Session metadata** - Compact count, timestamps, project info

## Session Tracking

Rekall tracks session state in `~/.claude/.current-session`:

```json
{
  "session_id": "abc-123-def",
  "started": "2025-01-11 14:45:34",
  "project": "my-project",
  "name": "refactoring-auth-module",
  "compact_count": 2
}
```

## Searching Past Conversations

After compaction, use episodic-memory to search:

```
/search-conversations "authentication refactoring"
```

Or use the MCP tools directly:
- `episodic_memory_search` - Semantic search
- `episodic_memory_show` - View full conversation

## Why "Rekall"?

The SciFi movie "Total Recall" featured a company "Rekall Incorporated" - The technology recorded
memories for later recall - it preserves conversation memories before they are diminished due to compaction.

## License
MIT
