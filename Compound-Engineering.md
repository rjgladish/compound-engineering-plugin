# Claude Code Skill Pack: Compound Engineering Usage Guide

## Introduction
Welcome to the **Compound Engineering Skill Pack** for Claude Code! This skill pack transforms your development workflow by turning every pull request, bug fix, code review, and failure into permanent, automated lessons. Claude Code learns from your past work, applying those insights automatically to make your coding faster, safer, and more efficient over time.

Unlike one-off AI prompts that provide short-term gains, Compound Engineering builds self-improving systems with memory. Each iteration compounds on the last, ensuring that lessons from today accelerate tomorrow's work. This guide will walk you through setup, usage, real-world examples, and best practices to get started.

By the end, you'll shift from writing code to designing systems that evolve independently—much like creating an AI teammate that grows sharper with every task.

## What is Compound Engineering?
Compound Engineering leverages Claude Code to create "compounding" effects in your development tools:
- **Memory and Learning**: Claude stores preferences, patterns, and lessons in files like `CLAUDE.md` or `llms.txt`, applying them automatically to new code.
- **Automation of Routines**: It reviews code, suggests fixes, and iterates on prompts without manual intervention.
- **Self-Improvement Loops**: Failures trigger upgrades, turning bugs into one-time events and reviews into reusable standards.

This isn't just faster coding—it's building systems that build better systems. For instance, Claude might rename variables based on patterns from PR #234, reduce test bloat from PR #219 feedback, or add error handling inspired by PR #241—all before you even open your editor.

## Getting Started
### Prerequisites
- Install Claude Code in your terminal (via your preferred IDE or CLI integration).
- Create a dedicated repository or workspace for your project.
- Prepare context files:
  - `CLAUDE.md`: For Claude-specific prompts, preferences, and workflows.
  - `llms.txt`: For high-level architectural decisions and system rules.

### Activation
1. Enable the Compound Engineering Skill Pack in Claude Code settings (or via prompt: "Activate Compound Engineering mode").
2. Initialize with a baseline prompt: "Set up compounding workflow based on my past PRs and reviews."
3. Claude will scan your Git history (with permission) to bootstrap lessons.

## Core Features and How to Use Them
Compound Engineering operates through iterative loops, parallel agents, and codified knowledge. Here's how to leverage its key capabilities.

### 1. Teaching Through Work
Capture decisions in real-time to build Claude's knowledge base.
- **Usage**:
  - During a code review or fix, prompt: "Codify this variable naming pattern from PR #234 into CLAUDE.md."
  - For architectural rules: "Add this design principle to llms.txt: Prefer guard clauses over nested ifs."
- **Tips**:
  - Keep entries concise (e.g., "Flag excessive tests if coverage > 80% without justification. Reference: PR #219").
  - Update files regularly—Claude pulls them for context in every session.
- **Example Output**: Claude generates an automated reviewer that flags issues like "too many tests" or "overly complex logic" based on your preferences.

### 2. Turning Failures into Upgrades
Transform bugs and errors into permanent safeguards.
- **Usage**:
  - When a bug occurs: "Investigate this crash from logs, reproduce it, generate a fix, add tests, and update rules in CLAUDE.md to prevent similar issues."
  - For evaluations: "Run this test 10 times and iterate the prompt until it passes 9/10 runs."
- **Example**: In building a "frustration detector":
  1. Provide a sample frustrated conversation.
  2. Prompt: "Write a test for frustration detection."
  3. If it fails: "Iterate the prompt based on failure logs (e.g., add checks for hedged language like 'Hmm, not quite')."
  4. Codify: "Add this workflow to CLAUDE.md for future emotion detectors."
- **Benefits**: Failures become one-time events; e.g., a missed email delivery leads to new monitoring rules and pipeline verifications.

### 3. Orchestrating in Parallel
Scale AI agents like a mission control setup.
- **Usage**:
  - Set up multiple terminals or lanes:
    - **Planning Lane**: "Read this issue, research approaches, and write an implementation plan."
    - **Delegating Lane**: "Implement the plan: Write code, create tests."
    - **Reviewing Lane**: "Review against CLAUDE.md and suggest improvements."
  - Prompt for specialization: "Create a 'Rails expert reviewer' agent" or "Spin up a 'performance optimizer'."
- **Example Setup**:
  - Use tools like Warp CLI for multi-pane views.
  - For feedback: "Create parallel agents for each review comment to resolve issues simultaneously."
- **Tips**: Start with 3 lanes; costs are minimal (compute-based, not headcount).

### 4. Automating Specialized Tasks
Apply compounding to specific workflows.
- **Error Handling**: "Auto-investigate production errors, generate fixes, and add preventive tests."
- **Documentation**: "Detect interface changes, capture screenshots, and generate visual docs."
- **Architecture Extraction**: "From this design discussion transcript, document decisions and add to llms.txt."
- **Usage Prompt**: "Use compounding mode to [task], pulling from CLAUDE.md."

### 5. Keeping Context Lean
Maintain effective, personalized knowledge.
- **Usage**:
  - Review and prune: "Audit CLAUDE.md for outdated rules and suggest deletions."
  - Avoid generics: Customize to your codebase (e.g., "In Cora, always check for user frustration in repeated queries").
- **Tips**: Aim for 10-20 specific rules over broad ones. If it doesn't reflect your philosophy, it won't guide Claude well.

## The Compound Engineering Playbook
Follow these steps to integrate the skill pack into your workflow:

1. **Teach Through Work**: Codify decisions in context files during daily tasks.
2. **Turn Failures into Upgrades**: Add tests, rules, and evals for every issue.
3. **Orchestrate in Parallel**: Use multi-agent setups to compress timelines.
4. **Keep Context Lean but Yours**: Prune and personalize regularly.
5. **Trust the Process, Verify Output**: Let systems run, but spot-check with tests. When wrong, teach why.

## Real-World Impact
At projects like Cora (an AI email assistant), this skill pack has:
- Reduced feature ship time from weeks to 1-3 days.
- Increased pre-production bug catches.
- Turned reviews from days to hours via parallel agents.
- Automated docs, saving 30+ minutes per change.

Users report shifting mindsets: Every function teaches the system, every fix prevents categories of errors, and reviews extract reusable lessons.

## Best Practices and Tips
- **Start Small**: Begin with one experiment, like codifying a single preference.
- **Metrics to Track**: Monitor time-to-ship, bug rates, and review cycles.
- **Common Pitfalls**: Avoid micromanaging—trust but verify. Don't copy generic templates; build your own.
- **Scaling**: For teams, share context files via Git for collective learning.
- **Open-Source Plans**: Watch for our upcoming prompt testing framework to enhance your workflows.

## Conclusion
Stop coding manually—start compounding with Claude Code's Compound Engineering Skill Pack. Invest 10 minutes today to capture a lesson, and watch it pay dividends forever. Experiment in your next PR: Open terminals, prompt for plans, and let the system bloom. Over time, your tools will handle routines autonomously, freeing you to innovate.

For support, prompt Claude: "Help with Compound Engineering setup." Happy compounding!
