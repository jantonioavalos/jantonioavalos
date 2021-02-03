---
template: blog-post
slug: ui-and-findability-redesign-of-a-video-platform
date: 2019-07-22
time: "9 min"
title: "UI and findability redesign of a video platform"
description: "I redesigned the UI and search journey at our corporate video platform. It reduced findability issues and increased users' video consumption."
featuredImage: /assets/portfolio-3/portfolio-cover-video-center.png
type: "Case Study"
private: false
extlink: null
---

**Summary:** I redesigned the UI and search experience at our corporate video platform. It reduced findability issues and increased users' video consumption.

## Table of contents

1. [Creative Strategy Brief](#1-creative-strategy-brief)
2. [Benchmark Research](#2-benchmark-research)
3. [UI Design](#3-ui-design)
4. [Results](#4-results)

---

# 1. Creative Strategy Brief

I had some interviews with the Technical Support Department about the main issues and users profiles. Then a stakeholders review, so we could agree on the following points:

## Why this project

<figure>
  <img src="assets/portfolio-3/video-vault-old-home-1907.png" alt="UX Startegy on Trello Board">
  <figcaption>Homepage screenshot (2018)</figcaption>
</figure>

This semiconductors company, produces lots of training and promotional videos for trendy products. Storage, classification and reproduction were suported by a legacy platform called "Video Vault".

<figure>
  <img src="assets/portfolio-3/video-vault-old-search-1907.png" alt="UX Startegy on Trello Board">
  <figcaption>"NFC" Search results screenshot (2018)</figcaption>
</figure>

It daily served hundreds of engineers, who struggled to find technical reviews and demos about our products used into their projects. So redesigning this platform meant an increase on users and bring customers into our funnel.

<figure>
  <img src="assets/portfolio-3/video-vault-old-player-1907.png" alt="UX Startegy on Trello Board">
  <figcaption>Video player page screenshot (2018)</figcaption>
</figure>

## Audience

### Electronics Engineers

They need quick answers about design constraints and features enablement. So they watch product tests videos to jump to specific cases and explanations as well as following tutorials or highlights on certain products as part of benchmarking.

When using the platform, they normally are at:

- **The laboratory,** in a test bench with the equipment connected. At the middle of an issue to solve.
- **At a desk,** working on a Bill of materials or supply catalogs.

## Business goals

- Redesign the findability so customers could get to the correct video, increasing the time on page.
- Give accurate suggestions, reflected on a higher click rate in the suggestions section.
- Reduce the bounce rate during a video search.

## Team & responsibilities

This was a 2 months project that implied collaboration with: React Developers, IT Department and a Video SME. I followed this methodology:

**React Developer:** He was in charge of the front-end. UI, interaction and functionality development.

**IT Department:** They contributed with all the setup for the new web application into our corporate website.

**Video Expert (SME):** He was my primary contact to the video technology -brightcove- implemented into our servers.

**Me, as UX/UI Designer:** I designed the new UI and defined the interaction for all the new platform. Besides I provided some markup and styles for the new components.

**Our Digital Experience Manager:** At Austin, but traveling often to Guadalajara. He managed UX/UI, web development and content publishing teams. So he was the final approver of the project.

## Constraints

- Re-build the platform using our new development stack based on React.
- Changes in our video technology framework were out of discussion.
- We should offer something visually similar to the _"YouTube experience"_.
- Features related to personalization were out of the scope.
- 4 sprints (2 months) to release. Besides the team was working on 2 or more projects at the same time.

---

# 2. Benchmark Research

## Analyzing video experiences

<figure>
  <img src="assets/portfolio-3/benchmarking-features.png" alt="UX Startegy on Trello Board">
  <figcaption>UI, Interactions and Findability were analized over the top platforms</figcaption>
</figure>

During the first sprint, I analized several video platforms. I looked for trendy features, acostumed interactions and journeys. These are some of the insights:

- **Personalized suggestions were key on engagement and consumption.** We had to produce a similar effect without involving profile information due to legal constraints by the time.
- **UI focused on content preview.** We were limited by technology to offer "hover autoplay". But there are other ways to communicate users about the video's content.
- **Short search journey.** Based on two steps: Type some keywords, pick a category or channel. We had to exploit our video labels implementation. It was hidden in navigation and UI.
- **Popular content highlighted based on time.** Stakeholders had had problems with Marketing requests to highlight videos. Now we had the opportunity to define rules for hand-picked spaces, time sensitive and popularity.
- **Advertising spaces.** Suggested by stakeholders, sometimes we had to highlight business partners' content. We needed something not intrusive but complementary to the video content. [We all hate ads](https://wistia.com/learn/marketing/the-psychology-behind-why-people-dislike-ads).

---

# 3. UI Design

## Wireframes

I drew several options to arrange the information into spaces. Besides they helped to illustrate the user journey.

### Step 1: Homepage

- Global header and footer, plus the Hero App Banner were mandatory
- Left bar for categories navigation. Using the known product classification
- Using a search bar with basic error handling
- Clear content hierachy for hand-picked content to allow stakeholders to curate a premium space
- List of top seen videos (algorythm) in curated categories, with a label to display more items

<figure>
  <img src="assets/portfolio-3/video-center-wireframe-homepage.jpg" alt="UX Startegy on Trello Board">
  <figcaption>Homepage wireframe</figcaption>
</figure>

### Step 2: Search results

- Active filters section, above categories to display the modifiers of the list of results
- Results list with pagination and sorting options for time and popularity
- Result items as a thumbnail with name, description and metadata

<figure>
  <img src="assets/portfolio-3/video-center-wireframe-search-results.jpg" alt="UX Startegy on Trello Board">
  <figcaption>Search results wireframe</figcaption>
</figure>

### Step 3: Video player page

- Video player with description and metadata
- Recommendations optional space at the right column
- Bottom section for promotion of partners' content

<figure>
  <img src="assets/portfolio-3/video-center-wireframe-video-player.jpg" alt="UX Startegy on Trello Board">
  <figcaption>Video player page wireframe</figcaption>
</figure>

## High-fidelity Mockups

After some design feedback, I prepared several options in mid-fidelity mockups to discuss with stakeholders the best solution.

<figure>
  <img src="assets/portfolio-3/video-center-content-options-1-2.png" alt="UX Startegy on Trello Board">
  <figcaption>Options for the homepage</figcaption>
</figure>

> Simplicity wins over abundance of choice. Explicitly state the difference between options
> **— Nielsen Norman Group**

<figure>
  <img src="assets/portfolio-3/video-center-content-options-3-4.png" alt="UX Startegy on Trello Board">
  <figcaption>More evolved options for the homepage</figcaption>
</figure>

## Design Tradeoffs

### Primary action over variety of options

Stakeholders wanted spaces to fill according their different agendas. But we couldn't design something to allow dozen of minimal updates, we needed the algorythm. So I advocated for having 3 categories which could be updated with analytics data to reflect popularity and time sensitive content.

### We're not YouTube

Our users don't come to watch trends or latest product's news to this hidden platform. They come with a problem to solve. Besides they might not be familiar with our product's classification. So I added a section with lists of applications per industry segments so people could find content related to their job.

### Less clicks doesn't mean intuitive design

I added the "View all" label to show more items on demand. Once clicked, it was a category filter applied into the search page. Then, people could refine their search in the list view, instead of scanning dozens of thumbnails at the homepage.

## Final Design

### Step 1: Homepage

I prioritized a clear search journey over fancy interactions. And persuaded stakeholders to keep minimal options even they saw every white space as a wasted opportunity to conversions.

<figure>
  <img src="assets/portfolio-3/video-center-homepage-final.png" alt="UX Startegy on Trello Board">
  <figcaption>Video player page wireframe</figcaption>
</figure>

- I added the first section for recent content to prove stakeholders this was not a valuable parameter or filter for the users.
- I kept Demo and How to's sections to place the most popular videos. Besides, the "View all" label directed to those filtered results.
- I introduced a section to browse by application category. It allowed stakeholders to curate the most important filters per business line.

### Step 2: Search results

I used a list of items instead of cards to scan faster the content and show a decent portion of the description.

<figure>
  <img src="assets/portfolio-3/video-center-results-final.png" alt="UX Startegy on Trello Board">
  <figcaption>Video player page wireframe</figcaption>
</figure>

- Using the faceted navigation as category filters was very useful to go deeper into the area of interest: product families to comapare specs or application type to explore solutions.

### Step 3: Video player page

I was limitated by the technology into the player. So we offered better selected suggestions, according to the previously selected filters and products related to the video. So they gave the sensation of personalized content.

<figure>
  <img src="assets/portfolio-3/video-center-player-final.png" alt="UX Startegy on Trello Board">
  <figcaption>Video player page wireframe</figcaption>
</figure>

- The bottom section was optional to offer some partners' products to complement the solutions on the video.

## UI Code Documentation

By the time I was also <a href="/creating-a-new-design-system" target="_blank">working on building our design system</a>. So I created a [demo page]() as placeholder to document the code.

<figure>
  <img src="assets/portfolio-3/video-center-markup.png" alt="UX Startegy on Trello Board">
  <figcaption>Some snippets of code for the UI Components (August 2019)</figcaption>
</figure>

This short demo could be still available at: [Video Center Code](https://ux.nxp.com/examples/video-vault). But it was replaced by our new design system guidelines.

---

# 4. Results

## Before redesign

According to our analytics team's report, these were our numbers on July 1 month before release:

- **~83%.** Homepage and results bounce -abandon- rate (no video played)
- **4:12 min.** The average time between arriving the page and playing a video
- **< 8%.** Average click rate on Recommendations
- **Search bar.** It was the most often used interaction

<figure>
  <img src="assets/portfolio-3/video-vault-old-design.png" alt="UX Startegy on Trello Board">
  <figcaption>Video platform, before redesign</figcaption>
</figure>

> People were spending almost 5 minutes to find a video useful to their needs. Moreover, they often left the platform before playing a video. And they rarely clicked on the random recommendations, aside the video player.

## After redesign

Later by December, 3 months after the release:

- **~53% (-30%).** Homepage bounce -abandon- rate
- **1:33 min (-2:39).** The average time between arriving the page and playing a video.
- **~23% (+15%).** Average click rate on Recommendations
- **Category filters.** They were the most often used interaction

<figure>
  <img src="assets/portfolio-3/video-vault-new-design.png" alt="UX Startegy on Trello Board">
  <figcaption>New video platform redesigned</figcaption>
</figure>

> People found a useful video to their needs after a minute, so they stayed more at the platform. Besides they got something useful from the category filtered recommendations around the video player.

## Lessons from this project

### Standardizing labels and metadata

I failed on providing clear guidance on metadata. It was weird for developers to display the timestamp in the format I proposed. When to show time in hours or days? Why? At the beginning it was just a nice idea from other websites. But later, we noticed how easier was to read "_2 months ago_" than "_05/05/2019 4:53 P.M._". Besides it's shorter.

### Very detailed content into mockups wasn't necessary

I would've used that time to create a better guide on how to use the UI instead of looking for examples and placing the real data into hi-fid mockups.

### Start with a creative strategy saves meeting time

Clarity on the audience and goals, helped me during design tradeoffs. I just had to remaind stakeholders to read our Brief to make them focus. It helps to deliver each stage on time.

---

This project was finished by August 2019. The current site is live at: [Videos—Solve problems and stay informed with quick how-to and demo videos](https://www.nxp.com/design/training/videos:VIDEO-VAULT#/)

---
