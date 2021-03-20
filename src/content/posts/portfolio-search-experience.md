---
template: portfolio-post
slug: /portfolio/designing-a-search-experience
date: 2021-01-01
time: "7 min"
title: "Designing a search experience"
description: "I redesigned the search experience of our corporate website"
featuredImage: /assets/portfolio-4/cover-search-experience.png
type: "Case Study"
private: false
---

**Summary:** I led the redesign of the customer's journey from the search bar to the product's assets. That helped users to find specifications, files or more content related to their search.

## About the process

For this case study, I simplified the non-linear progress using these product phases:

1. [Strategy](#1-strategy)
2. [Research and analysis](#2-research-and-analysis)
3. [Wireframes and mockups](#3-wireframes-and-mockups)
4. [UI Design and tradeoffs](#4-ui-design-and-tradeoffs)
5. [Development](#5-development)
6. [Results](#6-results)

---

# 1. Strategy

I worked for a global semiconductors company. They manage a wide portfolio of electronics supplies, entire product solutions and professional services.

![Old search bar experience](/assets/portfolio-4/old-search-bar.png "Old search bar experience")

We had a search bar to match the user's query with a list of keywords and product pages. Then, we showed a results list with tabs, as categories to refine the search.

That experience was primitive compared to our competitors' websites. So we migrated to a more robust search engine. That would enable users to get detailed information on our products, applications and services directly from the search bar.

## Our target audience: Electronics engineers

They look for product specifications and downloadable resources associated to their designs. According to user's research these are their goals:

- Find products that fit their project needs 
- Get all the product's details in one place 
- Understand the technology they work with 
- Have the correct tools to evaluate a product 
- Know the reason as soon as an issue is presented 
- Get manufacturer's support easy and fast 

## Business goals

We were turning from a company that sells to big companies (75% of our revenue) into a company that wanted to sell to the Mass-market from our website. So, in terms of the search experience we had to:

1. Display search results with more accurate and specific content
2. Offer one-stop-shops for each product or service 
3. Promote training, downloads and purchases
4. Make easier to navigate towards the end–product–pages 
5. Reduce support time on chats and calls

So I proposed tracking those by:

1. Reduction of the _time-on-screen_ at the search results page
2. Increase the _conversions_ from search to training, download or buy
3. Increase the _time-on-screen_ at end-pages
4. Reduction of the _bounce rate_ through navigational pages
5. Decrease _support requests_ to get details, assets or advice

## Project’s team

- **Me as UX Design Lead** worked in the information architecture, wireframes, and mockups. Besides, I led the communication with the stakeholders.

- **UX/UI Team** provided me with feedback based on [our design system](/work/creating-a-new-design-system).

- **React Dev Team** developed the UI, interactions and functionality.

- **IT Department** contributed with the search engine infrastructure and CMS enablement.

- **Digital Experience Manager** was the final approver being responsible of the Content, Design, and Development teams.

## Methodology

- We ran the project under the SaFE Framework, during 4 sprints.
- This project was tracked into our UX/UI KanBan board. So we had daily stand-up's, regular team's feedback sessions, and a weekly status meeting with stakeholders.
- As Lead, I had to reach agreements on my design with developers and marketing people.

---

# 2. Research and Analysis

## Information Architecture and Heuristics

How do users find information? [They browse, they search, or they ask for help](https://www.amazon.com/Louis-Rosenfeld-dp-1491911689/dp/1491911689/). Sometimes, they do all. It depends on their context and the information they see during their quest.

![Information needs: refinding, exaustive research, explorative and kwon-item seeking](/assets/portfolio-4/info-needs.png "Information needs: refinding, exaustive research, explorative and kwon-item seeking")

- **Exhaustive research.** Looking for everything available on a particular topic.
- **Explorative seeking.** It's open-ended, without an expected "right" answer.
- **Known-item seeking.** Looking for an expected, perfect thing.
- **Refinding.** Returning to something highlighted, saved or recalled.

We had to satisfy new mass-market users. So we had to design our search experience to cover the four scenarios, as you'll see ahead in the [wireframes](#wireframes) section.

Futhermore, [people expect a successful search at the 1st query](https://www.nngroup.com/articles/site-search-suggestions/). Then, auto-complete, suggestions and search-scope should be available while users are typing.

### Summary of a proficient search experience, according to heuristics

- **Display a Standard Search box.** A not hidden, large empty space suggesting search with a magnifying glass minimalistic icon aside. Submitting when Enter or on icon click.
- **Standard results journey.** Use the search box, then Suggestions appear, later a list of results that can be filtered or sorted, and showing total results with pagination to look further.
- **Avoid Advanced or Scoped Searches.** They confuse new users.
- **Robust search engine.** It avoids typos with autocomplete and suggestions.
- **An user-based ranking algorithm.** Personalized results help users get previous queries or similar based on them.
- **Smart use of empty results cases.** This is an opportunity to offer options according to their previous request or marketing-based content.

## Benchmarking

Competitors have already implemented some of those insights. So I analized the search experience and trends over 3 industry layers:

1. **Direct competitors:** Texas Instruments, Qualcomm, Intel and ST.
2. **Our main distributors:** Avnet, Digikey, Mouser, and Newark.
3. **Top appliances' companies:** Samsung, Huawei, Sony and Apple.

![Collage to illustrate all the consulted websites](/assets/portfolio-4/benchmark-collage.png "Some of the sites that were examinated")

### Popular patterns we could adopt

- Suggested and autocompleted queries
- Assistive search hint text
- Recommended and Suggested results
- Categorized query suggestions and results
- Highlighting of query in scope and context

### Not recommended patterns for our company

- Images in suggestions. They require clearly differentiated product imagery we don't have. Most are chips.
- Result counts. Not useful, unless displayed at a results' page with pagination.
- Immediate filtering options. We have hundreds of categories that may confuse users.
- Show popular searches. Useless for our diverse audience with different projects.

## Current Analytics Data

I requested a funnel analysis, from our Adobe analytics platform. This is an screenshot from one page of the analytics report.

![image from adobe dashboad](/assets/portfolio-4/analytics-fragment.JPG "Fragment of an Analytics Report")

In syntesis, users search directly the product's family, then they look for the pages that summarizes and link resources, so they could get specifications, guidance or support information. In other words, they came to the site for specific documents, tools, support or complements to their solutions.

{Draw journey map}

Considerations to measure and improve the search experience:

- User Analytics Site usage behavior (pages viewed, products followed, content interacted with) Past searches User profile information (industry worked in, currently held position, etc.)
- Industry Analytics Larger trends within industry (hot areas of technology, tech products, innovation, etc.) Future predictions (for recommends)
- Site/Business Analytics Search and purchase trends based on industry and user job positions

---

# 3. Wireframes and Mockups

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

During a team reviews, I injected some HTML/CSS to the browser so we could explore some layout options:

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

# 4. UI Design and Tradeoffs

Back then, the website had a global menu redesign. Besides updating the UI, IT guys converted that global script into a React component.

![Old and new menu](/assets/portfolio-4/old-and-new-menu.png "Old and new menu")

That upgrade allowed me to introduced two concepts into the Search bar: Focus mode and resources box.

## Focus mode

Facilitating the primary action, we would use the whole screen for search results that would change as the user types. Instead of using a formal results page.

### 1. Pre-search (Empty state)

![Search bar - Empty state once logged in](/assets/portfolio-4/mockup-empty-state.png "Search bar - Empty state once logged in")

Now I could use all the space to display recent results and recently visited pages. Besides offering direct links to our specialized applications as the "Product Selector".

### 2. Results list

![Search results with special content area](/assets/portfolio-4/mockup-results.png "Search results with special content area")

Separating the logic from getting a query and getting results. This state will sustitute our search page, offering the category filters and curated items from our Marketing team.

### 3. Zero results

![No results view](/assets/portfolio-4/mockup-zero-results.png "No results view")

Since getting to this state was hard, due to autocomplete and auto suggestions. This state had to be clear and simple. Not offering noise but suggestions to improve the query and let the work to our search engine.

## The "Resources box"

We'd offer direct links to resources associated to the family's products. Saving at least 2 steps in the search process and addressing the insights from the analytics team.

For this we had two options: Table and Cards.

### Table

![Table with direct links to popular products resources](/assets/portfolio-4/mockup-table-resources.png "Table with direct links to popular products resources")

text explanation

### Cards

![Cards with direct links to products and their popular resources](/assets/portfolio-4/mockup-cards-resources.png "Cards with direct links to products and their popular resources")

text explanation

## Final UI Design

text explanation

![Empty state image]()

![Results image]()

text explanation

---

# 5. Development

## Features, User Stories, Acceptance Criteria

I coordinated the preplanning stage. It meant to integrate the team with recurrent meetings to synch on the progress and allign similar projects in the company. I transformed the discussions into features to explore and agreements into user stories.

I delivered mockups, a list of components, code snippets, design guidelines and a table with features, user stories and acceptance criteria.

## Code Snippets

I provided some html and css to build those views and test later wich could be better.

## A/B Test

We tested the cards and the table. Even we thought cards could have a better acceptance they didn't. People found easier to scan a table pattern. We knew that because they opened multiple links from one or two elements of the table.

---

# 6. Results

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

This project was delivered by January 2019. The current and updated implementation can be found at [nxp.com](https://www.nxp.com/)'s search bar.

---
