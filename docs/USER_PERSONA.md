# Target User Personas — NGO Template Engine

This document defines the primary target user personas for the Crowdera NGO template engine. These personas represent the administrators who configure the sites and the end-users (donors, volunteers) who interact with them.

---

## 1. Persona 1: The NGO Administrator

### "Priya Sharma — Executive Director at RuralHealth India"
* Priya manages a growing healthcare non-profit with limited staff and zero budget for custom web agencies.

* **Demographics**:
  - Age: 36
  - Technical Skill: Beginner (uses Google Docs, WhatsApp Business, Canva)
  - Location: Pune, India
  - Goals: Launch an online presence in under 10 minutes to support a fundraising campaign.

* **Core Needs & Goals**:
  - Needs to showcase impact statistics (e.g. "45K patients treated") dynamically to secure trust.
  - Wants a site that matches her organization's green-cross branding without touch-coding styling.
  - Requires mobile-responsive editing since she does most admin work on her tablet.

* **Pain Points**:
  - Web developers are expensive and take weeks to make simple text updates.
  - Standard templates look too corporate or aren't tailored to non-profit sections (e.g., testimonials, impact stats).

* **How the Template Engine Resolves Her Needs**:
  - **9 Pre-Configured Presets**: She starts with the `healthcare` preset which pre-loads appropriate copy and layouts.
  - **Live Customizer (`/templates/demo`)**: She can swap HSL color schemes, switch from a standard Grid to a Slider Carousel, and customize copy, witnessing changes live before deploying.

---

## 2. Persona 2: The High-Intent Donor

### "David Chen — Tech Lead & Active Philanthropist"
* David donates a percentage of his monthly income to community-driven causes but expects high transparency.

* **Demographics**:
  - Age: 29
  - Technical Skill: Advanced
  - Location: San Francisco, USA
  - Goals: Rapidly evaluate an NGO's legitimacy and make a secure, 30-second mobile donation.

* **Core Needs & Goals**:
  - Demands high-quality mobile responsiveness (he browses links from newsletters on the train).
  - Expects verifiable data: impact stories, clear program goals, and photo/video evidence.
  - Requires absolute accessibility (contrast, keyboard-focusable forms).

* **Pain Points**:
  - Clunky donation flows that redirect to third-party form pages that feel untrustworthy.
  - Slow page loads and layout shifts (CLS) on mobile data.

* **How the Template Engine Resolves His Needs**:
  - **Performance Optimization**: Next.js App Router, Tailwind, and local optimized images yield near-perfect page loads and zero layout shifts.
  - **Impact-First Structure**: Every layout is structured around an "Impact Story" panel section and a "Stats Band" to put proof of work first.
  - **A11y AA Compliance**: Screen-reader and high-contrast color styling reassure him of the NGO's professional standards.

---

## 3. Persona 3: The Grassroots Volunteer

### "Aisha Diallo — Environmental Advocate & Youth Organizer"
* Aisha wants to sign up for reforestation events and share campaign updates on her social media networks.

* **Demographics**:
  - Age: 22
  - Technical Skill: Intermediate (social-media native)
  - Location: Nairobi, Kenya
  - Goals: Stay informed about local planting drives and easily coordinate with organizers.

* **Core Needs & Goals**:
  - Wants a clean, visual event calendar/news timeline to check upcoming project locations.
  - Needs to easily download or share impact photo highlights from campaigns.

* **Pain Points**:
  - Hard-to-navigate media galleries that lack captions or responsive video support.
  - Outdated news sections with wall-of-text articles.

* **How the Template Engine Resolves Her Needs**:
  - **Dynamic Gallery Section**: Interactive gallery supporting both images and video overlays with focus trapping.
  - **Flexible News Layouts**: Swaps seamlessly between Timeline, Magazine, and Cards layouts depending on the cause preset.
