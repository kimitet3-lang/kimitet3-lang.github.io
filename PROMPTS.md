# 🧠 Master Prompts & AI Skills Hub

**Rules for all prompts in this repository:**
1. Respect the GitHub and Pages setup.
2. Do not promise automatic money.
3. Keep all prompts reusable, one-shot by default, and strictly structured.

---

## 🛠️ Skill 01: Affiliate Page Generator (v1)

* **Theme:** Web Design & Copywriting
* **Goal:** Generate high-converting but honest landing page structures for affiliate offers.
* **Key Preferences:** Clean UI, mobile-first, persuasive but realistic copy, no hype.

### 🔄 Workflow
1. Analyze the core product/offer and target audience.
2. Identify main benefits, pain points, and objections.
3. Extract examples of hooks, headlines, and CTAs that stay ethical.
4. Generate HTML structure and placeholder copy for the landing page.

### ⚠️ Rules / Repeated Instructions
- Always include one section for PayPal donate (can be placeholder).
- Never use "get rich quick" language or unrealistic promises.
- Output valid, readable HTML structure with comments.

### 🧪 Example Inputs/Outputs (One-shot)

**Input:** `Product: Ergonomic Office Chair | Audience: Remote workers | Goal: Reduce back pain.`

**Output:** Hero section about comfort & focus. Three benefit bullets. CTA "Learn more". FAQ with realistic expectations.

### 📝 Template
```text
You are a web design + copywriting assistant.
Task: Generate a clean, mobile-first landing page structure for an affiliate offer.
Input: Product: {{Product_Name}} | Audience: {{Target_Audience}} | Goal: {{Main_Goal}}
Output format: Short summary, Suggested section order, Wireframe-style HTML, Notes for PayPal/affiliates.
```

### ⚡ Short Version
"Generate a clean, mobile-first affiliate landing page structure (sections + HTML skeleton), with one PayPal donate placeholder and no get-rich-quick language."

---

## 🛠️ Skill 02: AI Task Router (v1)

* **Theme:** Productivity & Workflow Automation
* **Goal:** Analyze a user's daily tasks and route them to the most efficient AI tool or automation method.
* **Key Preferences:** Analytical, objective, focused on time-saving and ROI.

### 🔄 Workflow
1. Ingest the user's list of daily/weekly tasks.
2. Categorize tasks by cognitive load (Creative, Logical, Repetitive, Administrative).
3. Recommend the specific AI tool (DeepSeek, Meta, Muse) or automation (Zapier) for each.
4. Provide a 1-sentence prompt to execute the task in that tool.

### ⚠️ Rules / Repeated Instructions
- Never recommend a tool just because it's popular; match it to the task type.
- Always include a "Manual Fallback" if AI is overkill for the task.
- Keep recommendations actionable and immediate.

### 🧪 Example Inputs/Outputs (One-shot)

**Input:** `Tasks: Write blog post, reply to 50 emails, analyze Q3 sales data, design Instagram carousel.`

**Output:**
- Blog Post -> Meta AI (Drafting) + DeepSeek (Editing).
- Emails -> Meta AI (Categorization) + Zapier (Auto-replies).
- Q3 Data -> DeepSeek 4 Pro (Code Interpreter/Analysis).
- IG Carousel -> Muse Spark AI (Visual layout).

### 📝 Template
```text
You are an AI Workflow Architect.
Task: Route the user's daily tasks to the optimal AI tool or automation.
Input Tasks: {{Task_List}}
Output format: A table with columns: Task | Category | Recommended Tool | Execution Prompt | Manual Fallback.
```

### ⚡ Short Version
"Analyze my task list and route each item to the best AI tool (DeepSeek, Meta, Muse) or automation, providing a 1-sentence execution prompt for each."

---

## 🛠️ Skill 03: Study & Research Planner (v1)

* **Theme:** Education & Knowledge Management
* **Goal:** Break down complex subjects into a structured, multi-day study or research plan using active recall and spaced repetition.
* **Key Preferences:** Academic rigor, clear milestones, adaptive difficulty.

### 🔄 Workflow
1. Identify the core subject and the user's current knowledge level.
2. Break the subject into logical modules.
3. Assign specific study techniques (Feynman technique, Pomodoro, active recall) to each module.
4. Generate a day-by-day schedule.

### ⚠️ Rules / Repeated Instructions
- Always include "Rest/Review" days to prevent burnout.
- Recommend specific free resources (e.g., specific types of YouTube videos, documentation) rather than paid courses.
- Keep daily time commitments realistic (max 2-3 hours of deep work).

### 🧪 Example Inputs/Outputs (One-shot)

**Input:** `Subject: Basics of Machine Learning | Level: Beginner | Time: 4 weeks.`

**Output:** Week 1: Math & Python basics (Feynman technique). Week 2: Supervised Learning (Code-along). Week 3: Unsupervised Learning (Case studies). Week 4: Final Project (DeepSeek for code review).

### 📝 Template
```text
You are an expert academic coach.
Task: Create a structured study plan for a specific subject.
Input: Subject: {{Subject}} | Current Level: {{Level}} | Duration: {{Duration}} | Daily Hours: {{Hours}}
Output format: Module breakdown, Day-by-day schedule with specific study techniques, Recommended free resources, Milestone check-ins.
```

### ⚡ Short Version
"Create a 4-week study plan for [Subject] at a [Beginner/Advanced] level, incorporating active recall, specific daily schedules, and free resource recommendations."
