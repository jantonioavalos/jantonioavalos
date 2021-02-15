---
template: portfolio-post
slug: /portfolio/designing-a-search-experience
date: 2021-01-01
time: "7 min"
title: "Designing a search experience"
description: "I redesigned the search experience of our corporate website"
featuredImage: /assets/portfolio-3/portfolio-cover-video-center.png
type: "Case Study"
private: false
---

**Summary:** This how I led the UX design of our search experience by redesigning the customers journey from the search bar to product's pages so they could find specifications, files or content related to their needs.

## About my process

This case study simplifies all the non-linear progress in these project's phases:

1. [Strategy](#1-strategy)
2. [Research](#2-research)
3. [Analysis](#3-analysis)
4. [Design](#4-ui-design)
5. [Development](#5-development)
6. [Testing](#6-testing)
7. [Results](#7-results)

---

# 1. Strategy

I worked for a global semiconductors company. They manage a wide portfolio of electronics supplies, entire product solutions and professional services. Redesigning the search experience improved the website's findability and customers journey.
![Old search bar experience](/assets/portfolio-4/old-search-bar.png "Old search bar experience")

We had migrated to a robust search engine to enable enhanced search capabilities into our website. So users could get detailed information on our products, applications and services directly from the search bar and give the first step to a personalized experience in the future.

## Electronics engineers as our key users

They look for product specifications and downloadable resources associated so that they work on their design and continue the development cycle. But there are certain profiles to highlight over this audience:

### Embedded Systems Engineers

They work mostly in "the Lab" surrounded by chips, boards, cables and equipment to test out their prototypes. But they're normally in a hurry while solving component's integration problems. So they hate unexpected issues or wasting time in activities that won’t represent progress.

### Applications Engineers

They are on charge of the emulation and testing of prototypes. They work in a multi-disciplinary group switching from status and design meetings to the tests' laboratory. Even they are the center of suggestions to analyze, they usually prefer doing some own research.

### Research & Development Managers

They coordinate product projects with teams from the Hardware, Software, Mechanical and Marketing groups. They abstract needs to generate a Proof-Of-Concept, negotiate for resources, schedule, and features with management so they normally lead the technology discussions.

### Audience's common goals

- Understand the technology they work with
- Find products that fit their project needs
- Get all the component info in one place
- Have the correct tools to evaluate a product
- Build something that works at the first try
- Know the reason as soon as an issue is presented
- Get manufacturer's support easy and fast

## Business goals

We were turning from a company that sells to big companies (75% of our revenue) into a company that sells to the Mass-market by our website. In terms of the search experience we had to:

- Reduce the time-on-screen at the search results page.
- Increase the bounce rate in navigational pages
- Increase the time-on-screen at end-pages.
- Maximize the conversions from search to download or buy

## Project’s team

**React Dev Team:** They developed the user interface, interactions and functionality.

**IT Department:** They contributed with all the search engine infrastructure and CMS enablement.

**Me, UX Design Lead:** I worked in the information architecture, wireframes, and mockups. Besides, I led the communication with the stakeholders.

**UX/UI Team:** They helped me with design reviews and facilitated some components from our growing design system.

**Our Digital Experience Manager:** At Austin, but traveling often to Guadalajara. He managed UX/UI, web development and content publishing teams. So he was the final approver.

## Constraints

[Environment description] {Make a stages diagram}

- Features related to personalization were out of the scope but listed for the next year
-

---

# 2. Research

## Information Architecture and Heuristics

According to the "Polar Bear's Book", there are 4 types of search:

{make infographic}

So we had to satisfy most of the cases to welcome new mass-market users and facilitate their conversions on buying parts, downloading files or hiring services.

Futhermore, according to the Nielsen Norman Group, Search success at 1st query is expected.

### Heuristics recommendations for a search experience

- **Display a Standard Search box.** A not hidden, large empty space suggesting search with a magnifying glass minimalistic icon aside. Submitting when Enter or on icon click.
- **Standard results journey.** Use the search box, then Suggestions appear, later a list of results that can be filtered or sorted, and showing total results with pagination to look further.
- **Avoid Advanced or Scoped Searches.** They confuse new users.
- **Robust search engine.** It avoids typos with autocomplete and suggestions.
- **An user-based ranking algorithm.** Personalized results help users get previous queries or similar based on them.
- **Smart use of empty results cases.** This is an opportunity to offer similar options to their request.

## Benchmarking

I usually look for standard or expected features and trends over 3 or 4 industry layers. So I analized the journey or search experience of:

1. **Direct competitors:** Texas Instruments, Qualcomm, Intel and ST.
2. **Our main distributors:** Avnet, Digikey, Mouser, and Newark.
3. **Top resellers (appliances) companies:** Samsung, Huawei, Sony and Apple.

![Collage to illustrate all the consulted websites](/assets/portfolio-4/benchmark-collage.png "Some of the sites that were examinated")

### Recommended patterns

- Suggested and autocompleted queries
- Assistive search hint text
- Recommended and Suggested results
- Categorized query suggestions and results
- Highlighting of query in scope and context

### Not recommended patterns

- Images in suggestions. It requires clearly differentiated product imagery we don't have.
- Result counts. Not useful, unless displayed at a results' page.
- Immediate filtering options. We have hundreds of categories that may confuse users.
- Show past searches and popular searches. Out of the scope.

---

# 3. Analysis

## Current Analytics Data

I requested a funnel analysis, from our Adobe analytics platform. This is an screenshot from one page of the analytics report.

![image from adobe dashboad](/assets/portfolio-4/analytics-fragment.JPG "Fragment of an Analytics Report")

In syntesis, users search directly the product's family, then they look for the pages that summarizes and link resources, so they could get specifications, guidance or support information. In other words, they came to the site for specific documents, tools, support or complements to their solutions.

{Draw journey map}

Considerations to measure and improve the search experience:

- User Analytics Site usage behavior (pages viewed, products followed, content interacted with) Past searches User profile information (industry worked in, currently held position, etc.)
- Industry Analytics Larger trends within industry (hot areas of technology, tech products, innovation, etc.) Future predictions (for recommends)
- Site/Business Analytics Search and purchase trends based on industry and user job positions

## Wireframes

Considering the insights from the research and the current analytics, I used [Balsamiq](https://balsamiq.com) to illustrate those concepts into wireframes:

### 1. Pre-search (Empty state)

![Search bar - Empty state without session](/assets/portfolio-4/wireframe-unlogged.png "Search bar - Empty state without session")
![Search bar - Empty state once logged in](/assets/portfolio-4/wireframe-logged.png "Search bar - Empty state once logged in")

- Expandable search box with autocomplete, autosuggest and history.
- Encourage log in for more detailed results
- Taking advange of the empty state

### 2. Results list

![Search results with suggestions and special content area](/assets/portfolio-4/wireframe-special-content.png "Search results with suggestions and special content area")

- Scope search as suggested category filters
- Special section for shortcuts to the top requested content

After team review, I used some HTML/CSS to explore the layout.

### 1. Pre-search (Empty state)

![Search results with special content area](/assets/portfolio-4/wireframe-special-area.jpg)

### 2. Results List

![Search results with personal suggestions](/assets/portfolio-4/wireframe-complex-results.jpg)

## Customer Journeys

By the time, I met the customer support team and after an interview they facilitated some information to map 3 journeys people navigate when looking for something in our website:

### Research

On exploration of technology, evaluating or comparing specifications.

[journey map doodle version]

### Buy

On the need of a product, tools or service.

[journey map doodle version]

### Support

On a running project, critical issues or special relationship.

[journey map doodle version]

---

# 4. UI Design

## Design Tradeoffs

Back then, the website had a global menu redesign. Besides updating the UI, IT guys converted that global javascript into a React component.

![Old and new menu](/assets/portfolio-4/old-and-new-menu.png "Old and new menu")

That upgrade allowed me to introduced two concepts into the Search bar.

[images from onebox redesign with red annotations]

- **Focus mode.** Facilitating the primary action, we would use the whole screen for search results that would change as the user types. Instead of using a formal results page.
- **The "Parts box".** We'd offer direct links to resources associated to the family's products. Saving at least 2 steps in the search process and addressing the insights from the analytics team.

For this we had two options: Table and Cards.

[Results w cards image w red annotations]

[Results w table image w red annotations]

## States

### 1. Pre-search (Empty state)

[image]

### 2. Results list

[image]

### 3. Zero results

[image]

## Code Snippets

I provided some html and css to build those views and test later wich could be better.

---

# 5. Development

## Features, User Stories, Acceptance Criteria

I coordinated the preplanning stage. It meant to integrate the team with recurrent meetings to synch on the progress and allign similar projects in the company. I transformed the discussions into features to explore and agreements into user stories.

I delivered mockups, a list of components, code snippets, design guidelines and a table with features, user stories and acceptance criteria.

---

# 6. Testing

## A/B Test

We tested the cards and the table. Even we thought cards could have a better acceptance they didn't. People found easier to scan a table pattern. We knew that because they opened multiple links from one or two elements of the table.

---

# 7. Results

[For the business]

We reduced 38% of the support requests. People were able to find easy and fast the resources they needed.

We increased

[For the user]

[For the team]

## Lessons from leading this project

- **Research changed the game.** We were used to receive a list of features that managers wanted in a screen or application so we could provide the "UI" to Developers. This was my first project as UX Design Lead, so I introduced research and analysis activities into the backlog. That changed the course of the project several times and we learned to use UX process into a Scrum workflow.
- **Communication was key to avoid rework.** At the same time of this project, a UI Designer was working in the Header redesign. Since we were part of the same UX/UI Team we could share insights and files to keep our mockups proposals updated.
-

---

This project was delivered by January 2019. The current and updated implementation can be found at the search bar on [nxp.com](https://www.nxp.com/)

---
