# update.md

## Portfolio architecture update

The previous redesign direction was too focused on making the entire portfolio a long-form landing page.

The new structure is:

> Homepage = sell the person
> Solution pages = sell the capability
> Project pages = prove the capability
> About = explain the person
> Contact = convert

The homepage must stay short.

## 1. Homepage

The homepage is the front door, not the entire portfolio.

It should contain only enough information to make a visitor understand:

1. Who Tanisha is
2. What she builds
3. Whether she can solve their problem
4. A small amount of proof
5. How to start a conversation

Recommended homepage flow:

### Navigation

Tanisha Pritha
AI + Software Builder

Solutions
Work
How I Work
About

CTA:
Let's Talk / Book a Call

Keep navigation compact.

### Hero

Use:

AI + SOFTWARE BUILDER

I turn business problems into working software.

Short supporting sentence only.

Example:

"AI agents, apps, automation and intelligent systems built around how your business actually works."

Primary:
Tell me what you're building

Secondary:
See my work

Availability should appear once, not repeatedly.

Do not repeat the same positioning elsewhere in the hero.

### Capabilities

Short clickable list:

AI Agents
Web Apps
AI Systems
Automation
Backend
Integrations

Do NOT explain every capability on the homepage.

Each item links to its dedicated solution page.

### Selected Work

Show approximately 3 strong existing projects.

Use large visuals and short descriptions.

CTA:

View all work

### Workflow statement

A very short section communicating:

"Already have a workflow? Keep it. I'll build around it."

Show a simple visual involving tools such as:

Excel
CRM
Notion
WhatsApp
APIs

Do not create a giant architecture diagram.

### Final CTA

Have something to build?

Tell me what you're trying to solve.

Let's talk.

Email / X / LinkedIn.

Then stop.

## 2. Solution pages

Each major capability gets its own page.

Routes:

/solutions/ai-agents
/solutions/web-apps
/solutions/ai-systems
/solutions/automation
/solutions/backend
/solutions/integrations

These pages are where the detailed selling happens.

The homepage should NOT contain all of this information.

## 3. Solution page template

Every solution page should have a consistent but editorial structure.

### Hero

Large headline explaining the capability in plain English.

Example:

AI Agents

"AI agents that actually do the work."

Then one short explanation.

CTA:

Talk about this build

### What I can build

List relevant real capabilities.

For AI Agents:

Voice agents
Chat agents
Lead qualification
Appointment booking
Customer support
Follow-up
Internal assistants
Action-taking agents

For Web Apps:

Customer-facing applications
Internal tools
Dashboards
MVPs
Admin systems
Mobile/web products

For AI Systems:

RAG
Document intelligence
Knowledge systems
Semantic search
Extraction
Evaluation
Grounded generation

For Automation:

Workflow automation
Data movement
Notifications
Lead workflows
Back-office automation
Scheduled jobs
Human handoffs

For Backend:

APIs
Databases
Authentication
Queues
Workers
Async processing
Integrations
Infrastructure

For Integrations:

CRM
Excel
Google Sheets
Notion
WhatsApp
Email
Slack
External APIs
Existing databases

Keep these lists concise.

### What the client gets

Explain outcomes rather than only technologies.

Examples:

Working software
Connected workflows
Clear user interface
Database and API layer
Automation
AI intelligence where useful
Deployment
Monitoring where appropriate

Do not promise things that are not actually offered.

### Build depth

Where relevant, distinguish:

Fast build

A focused working version built quickly.

Full system

A complete system with the required backend, data, memory, RAG, tools, integrations, dashboard, monitoring and other infrastructure.

This is especially useful for AI agents and AI systems.

### Existing workflow

Explain how the solution can work with tools the customer already uses.

Keep this visual and simple.

### Relevant work

Only show projects that demonstrate this capability.

Do not dump the entire project portfolio onto every solution page.

### Technical depth

Include a deeper technical section for technical visitors.

Show actual architecture and stack where relevant.

Do not make the entire page technical.

### CTA

End with a contextual CTA:

"Have a use case for this?"

Talk about this build

## 4. Project pages

The Work page is the proof archive.

Individual project pages should be case-study style.

Use actual projects already in the repository.

Do not invent:

Metrics
Clients
Revenue
Users
Testimonials
Results
Claims

Each project should communicate:

Problem
What was built
How it works
Important technical decisions
What it demonstrates
Links

Keep case studies visual and concise.

## 5. Work page

Route:

/work

Use an editorial project archive.

Do not use an endless grid of identical cards.

Use varied project sizes and strong visuals.

Allow filtering by useful capability if it improves navigation:

AI
Apps
Automation
Backend
RAG
Other

Keep filtering simple.

## 6. About page

Route:

/about

This should be human.

Do not duplicate the resume.

Use the resume and existing repository content for factual information.

Explain:

Who Tanisha is
What she builds
How she approaches problems
What she likes working on

Include:

X
LinkedIn
GitHub
Reddit
Email

## 7. Contact

Route:

/contact

Keep it extremely simple.

Headline:

"Have something to build?"

Allow:

Email
Social links
Booking link when one is configured

Do not invent a booking URL.

Use:

tpritha190304@gmail.com

X:
tpritha03

LinkedIn:
tanishapritha

GitHub:
tanishapritha

Reddit:
gsharpminoronly

## 8. Visual direction

The visual direction remains:

High-end personal software portfolio.

Not SaaS.
Not AI agency.
Not developer dashboard.
Not giant HTML/CSS landing page.
Not student portfolio.

Use:

Warm cream
Black
Orange-red accent
Muted gray

Strong editorial typography.

Large headlines.

High-quality spacing.

Asymmetric layouts.

Large project imagery.

Selective dark sections.

Subtle interaction.

Simple line icons.

No excessive cards.

No neon blue.

No terminal-style hero.

No giant technical dashboard above the fold.

## 9. Icons

Icons are currently missing and should be added.

Use a consistent professional icon system.

Icons should help users scan capabilities.

Do not use random emoji.

Do not overuse icons.

Use icons primarily for:

Solutions
Integrations
Technical architecture
Small navigation cues

Keep them visually quiet.

## 10. Information hierarchy

The homepage should follow:

Promise
Capabilities
Proof
Workflow compatibility
CTA

Do not repeat the same description in every section.

The detailed explanation belongs on solution pages.

The technical explanation belongs deeper on solution/project pages.

This is the biggest architectural change.

## 11. Responsive behavior

Desktop and mobile should both feel intentionally designed.

Mobile homepage should be short.

Do not stack every possible section into a huge vertical page.

Use:

Large readable type
Short copy
Large tap targets
Single-column project visuals
Simple navigation
Compact solution list
Clear CTA

Solution pages can be longer because the user intentionally chose to explore that capability.

## 12. Navigation behavior

Clicking:

AI Agents
Web Apps
AI Systems
Automation
Backend
Integrations

should navigate to the relevant solution page.

Clicking:

Selected Work / Work

goes to /work.

Clicking a project

goes to its project detail page when available.

Clicking About

goes to /about.

CTA

goes to /contact or configured booking URL.

Use normal routing.

Do not turn the entire homepage into an interactive mega-interface.

## 13. Design objective

The website should feel like a small personal software studio.

The homepage creates curiosity.

The solution pages answer "what can she build?"

The project pages answer "has she actually built things?"

The technical sections answer "does she understand serious engineering?"

The contact page answers "how do I talk to her?"

That is the complete system.

## 14. Final rule

DO NOT add more content to the homepage to make it feel complete.

A short, beautiful homepage is the goal.

Depth should exist behind clicks.

The visitor chooses how deep they want to go.

Homepage:

"Here's what I do."

Solution page:

"Here's what I can build for you."

Project page:

"Here's proof."

Technical section:

"Here's how I build it."

Contact:

"Let's talk."
