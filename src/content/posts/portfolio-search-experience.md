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
3. [Wireframes](#3-wireframes)
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

- We ran the project under the [SAFe Framework](https://www.scaledagileframework.com/#) during 4 sprints.
- This project was tracked into our UX/UI [Kanban Board](https://youtu.be/iVaFVa7HYj4). So we had daily stand-up's, regular team's feedback sessions, and a weekly status meeting with stakeholders.
- As Lead, I had to reach agreements on my design with developers and marketing people.

---

# 2. Research and Analysis

## Analytics Data

The former startegy is based on a funnel report, from our Adobe analytics platform.

I saw how our customers searched by product's family number, then looked for links to specifications, guidance or support. So they came for specific data, complementary tools and support for their designs.

![Fragment of an Analytics Report](/assets/portfolio-4/analytics-fragment.JPG "Fragment of an Analytics Report")

We had to help them get those elements in less steps and avoid confussions on the way, so we could reduce the chats and calls to support.

![Search cases](/assets/portfolio-4/search-cases.png "Customers browse, search or ask for help during their Research and Testing phases")

## Information Architecture and Heuristics

We knew how customers find information, now we had to understand new _mass-market users_. Our design had to cover [the 4 kinds of information needs](https://oreilly.com/library/view/information-architecture-4th/9781491913529/ch03.html#information-seeking_behaviors):

![Information needs: refinding, exaustive research, explorative and kwon-item seeking](/assets/portfolio-4/info-needs.png "Information needs: refinding, exaustive research, explorative and kwon-item seeking")

- **Exhaustive research.** Looking for everything available on a particular topic.
- **Explorative seeking.** It's open-ended, without an expected "right" answer.
- **Known-item seeking.** Looking for an expected, perfect thing.
- **Refinding.** Returning to something highlighted, saved or recalled.

Futhermore, [people expect a successful search at the 1st query](https://www.nngroup.com/articles/site-search-suggestions/). Then, _auto-complete_, _term suggestions_ and _search-scopes_ should be available while users are typing.

![Auto-complete search tools](/assets/portfolio-4/auto-complete-search.png "Auto-complete search tools")

### Heuristics: A proffesional search experience

- **Display a Standard Search box.** A not hidden, large empty space suggesting search with a magnifying glass minimalistic icon aside. Submitting when Enter or on icon click.
- **Standard results journey.** Use the search box, then Suggestions appear, later a list of results that can be filtered or sorted, and showing total results with pagination to look further.
- **Hide/Avoid Advanced or Scoped Searches.** They may confuse new users.
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

---

# 3. Wireframes

Considering the strategy constraints (and research recommendations later), I used [Balsamiq](https://balsamiq.com) to illustrate them into:

- A pre-search or empty state
- The results list

### 1. Pre-search (Empty state)

![Search bar - Empty state without session](/assets/portfolio-4/wireframe-unlogged.png "Search bar - Empty state without session")
![Search bar - Empty state once logged in](/assets/portfolio-4/wireframe-logged.png "Search bar - Empty state once logged in")

- Expandable search box with autocomplete and suggestions
- Adding history and bookmarks if people were logged
- Encourage to log in for better results

### 2. Results list

![Search results with suggestions and special content area](/assets/portfolio-4/wireframe-special-content.png "Search results with suggestions and special content area")

- Using the product categories as _scoped search_
- Display special content as shortcuts (i.e. files, training, tools, etc.)

Later, I injected some HTML/CSS to the browser so we could explore some layout options:

### 1. Pre-search (Empty state)

![Search results with special content area](/assets/portfolio-4/wireframe-special-area.jpg)

### 2. Results List

![Search results with personal suggestions](/assets/portfolio-4/wireframe-complex-results.jpg)

---

# 4. UI Design and Tradeoffs

Back then, the website had a global menu redesign. Besides updating the UI, IT guys converted that module script into a React component.

![Old and new menu](/assets/portfolio-4/old-and-new-menu.png "Old and new menu")

That upgrade allowed me to introduced two concepts into the Search bar design: Focus mode and the resources box.

## Focus mode

The search bar will take the whole screen to display results as users type. This facilitates the primary action: search, and get people directly to the item suggested.

### 1. Pre-search (Empty state)

![Search bar - Empty state once logged in](/assets/portfolio-4/mockup-empty-state.png "Search bar - Empty state once logged in")

It displays recent results and recently visited pages. Besides, it offers direct links to our specialized search applications as the "Product Selector" (tool to compare specifications, sizes and prices).

### 2. Results list

![Search results with special content area](/assets/portfolio-4/mockup-results.png "Search results with special content area")

Besides suggestions and results as users type, this state offers the category filters and curated items from our Marketing team (right side).

### 3. Zero results

![No results view](/assets/portfolio-4/mockup-zero-results.png "No results view")

This state had to be clear and simple. It shows, without noise, suggestions to improve the query and let the auto-complete help the user. Similar to 404-page's designs.

## The "Resources box"

When user types a product number, the search bar results area expands (focus mode) and at the top offers direct links to special content associated.

This saves 2+ steps in the finding journey. I tried two options: cards and table. They show different options for the links, to be discussed in design reviews.

### Cards

![Cards with direct links to products and their popular resources](/assets/portfolio-4/mockup-cards-resources.png "Cards with direct links to products and their popular resources")

- Link to see all the products matching the query
- Display 3 cards with the products with higher traffic
- Link to the product family (product number), product type, and parts asociated
- Product description
- Links to documents, tools, training and more

### Table

![Table with direct links to popular products resources](/assets/portfolio-4/mockup-table-resources.png "Table with direct links to popular products resources")

- Link to see all the products matching the query
- Display 3 rows with the products with higher traffic
- Product type, Product family (link), product description, status and resources columns
- Links to documents, tools, training and more

---

# 5. Development

## Features as User Stories with Acceptance Criteria

As UX Design Lead, I transformed the business needs into requirements, I validated them on the research phase, and designed the UI. So I coordinated the (stakeholders) teams to create the user stories.

![User stories within the product backlog](/assets/portfolio-4/features-user-stories.png "User stories within the product backlog")

I also added a list of components, labeled within the mockups. So I delivered this to the Business Analyst (BA) on the IT team, so she could coordinate the Product Increment's sprints.

![States and components labeled](/assets/portfolio-4/user-stories-components.png "States and components labeled")

## Code Snippets

I provided some guidance and code (HTML and CSS) to build those views. But I also requested to the UI Developer to create new components for our future [Design System](/work/creating-a-new-design-system), so developers could use them.

## A/B Test

I requested an A/B test to the Analytics team. We tested a final version of the Cards and the Table within the search results.

Even we thought cards could have a better acceptance they didn't. People were used to explore multiple options and compare browser's tabs and by some reason (maybe _cognitive load_) they found it easier to interact with the table.

---

# 6. Results

Two months after the release, we got these results:

> Users found it easier to get to the resources they needed. Support requests were reduced by 38%.

1. People found useful links within the top items. The search results page registered 20% less _time-on-screen_.
2. Direct links (downloads, trainings, etc.) increased 60% by _conversions_ from search.
3. The end-pages (product details) register a 12% more _time-on-screen_.

> People preffered to search instead of navigate, so the _bounce rate_ through navigational pages increased.

## Lessons from leading this project

### Research justifies design and corrects business requirements

We used to receive a list of screen's features from management to provide the _design_ to Developers. But I introduced research activities into the backlog. That adjusted the design several times as we were learning from insights.

### Communication was key to avoid rework

At the same time, another UX Design Lead was working in the Header's redesign. Since we were part of the same UX/UI Team, we could share insights and files to keep our designs updated.

---

This project was delivered by the end of 2018. The current and updated implementation can be found at [nxp.com](https://www.nxp.com/)'s search bar.

---
