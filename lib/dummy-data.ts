export interface Folder {
    id: string;
    name: string;
    description: string;
    tags: string[];
    isStarred: boolean;
}

export const DUMMY_FOLDERS: Folder[] = [
    {
        id: "folder-1",
        name: "Marketing Campaigns",
        description: "Assets, copy, and analytics for Q3/Q4 marketing campaigns. Assets, copy, and analytics for Q3/Q4 marketing campaigns.",
        tags: ["marketing", "q3", "active"],
        isStarred: true,
    },
    {
        id: "folder-2",
        name: "Financial Reports 2025",
        description: "Quarterly earnings, tax documents, and budget plans.",
        tags: ["finance", "confidential", "audit"],
        isStarred: false,
    },
    {
        id: "folder-3",
        name: "Design System & UI Assets",
        description: "Figma exports, icon sets, and component documentation.",
        tags: ["design", "ui-ux", "branding"],
        isStarred: true,
    },
    {
        id: "folder-4",
        name: "HR & Onboarding",
        description: "Employee handbooks, onboarding checklists, and policy docs.",
        tags: ["hr", "internal", "docs"],
        isStarred: false,
    },
    {
        id: "folder-5",
        name: "Product Roadmap",
        description: "Strategic planning, feature specs, and quarterly goals.",
        tags: ["product", "planning", "strategy"],
        isStarred: true,
    },
    {
        id: "folder-6",
        name: "Customer Research",
        description: "User interview transcripts, survey results, and personas.",
        tags: ["research", "ux", "feedback"],
        isStarred: false,
    },
    {
        id: "folder-7",
        name: "Legal Contracts",
        description: "NDAs, vendor agreements, and client service contracts.",
        tags: ["legal", "contracts", "important"],
        isStarred: false,
    },
    {
        id: "folder-8",
        name: "Website Redesign v2",
        description: "Wireframes, copywriting, and staging links for the new site.",
        tags: ["web", "design", "v2"],
        isStarred: true,
    },
    {
        id: "folder-9",
        name: "Sales Decks & Pitches",
        description: "Presentation decks, sales battlecards, and case studies.",
        tags: ["sales", "pitch", "client-facing"],
        isStarred: false,
    },
    {
        id: "folder-10",
        name: "Engineering Architecture",
        description: "Database schemas, API specs, and system diagrams.",
        tags: ["dev", "backend", "docs"],
        isStarred: true,
    },
    {
        id: "folder-11",
        name: "Social Media Assets",
        description: "Banners, reel templates, and scheduled post graphics.",
        tags: ["marketing", "social-media", "content"],
        isStarred: false,
    },
    {
        id: "folder-12",
        name: "Q1 OKRs & KPIs",
        description: "Departmental goals, tracking sheets, and performance metrics.",
        tags: ["management", "goals", "kpi"],
        isStarred: false,
    },
    {
        id: "folder-13",
        name: "Event Planning 2026",
        description: "Schedules, speaker contacts, and venue booking files.",
        tags: ["events", "planning"],
        isStarred: false,
    },
    {
        id: "folder-14",
        name: "Brand Guidelines",
        description: "Logo packages, typography rules, and color palettes.",
        tags: ["branding", "design", "official"],
        isStarred: true,
    },
    {
        id: "folder-15",
        name: "Invoices & Receipts",
        description: "Monthly vendor invoices and outgoing client billings.",
        tags: ["finance", "invoices", "accounting"],
        isStarred: false,
    },
    {
        id: "folder-16",
        name: "API Documentation",
        description: "Public and internal REST API guides and Postman collections.",
        tags: ["dev", "api", "integration"],
        isStarred: true,
    },
    {
        id: "folder-17",
        name: "Competitor Analysis",
        description: "Market research reports and feature comparison tables.",
        tags: ["strategy", "research", "market"],
        isStarred: false,
    },
    {
        id: "folder-18",
        name: "Security Audits",
        description: "Penetration test results, compliance checks, and ISO docs.",
        tags: ["security", "audit", "confidential"],
        isStarred: false,
    },
    {
        id: "folder-19",
        name: "Video Production",
        description: "Raw footage, b-roll, scripts, and final video exports.",
        tags: ["media", "video", "content"],
        isStarred: false,
    },
    {
        id: "folder-20",
        name: "Archived Projects",
        description: "Legacy codebases, old client files, and completed projects.",
        tags: ["archive", "old", "storage"],
        isStarred: false,
    },
]



export interface Note {
    id: string;
    name: string;
    description: string;
    isStarred: boolean;
    createdAt: string;
    lastEdited: string;
    tags: string[];
    folderId: string;
    content: string;
}

export const DUMMY_NOTES: Note[] = [
    {
        id: "note-1",
        name: "Q3 Email Nurture Draft",
        description: "Draft messaging for the Q3 email nurture sequence.",
        isStarred: true,
        createdAt: "02-07-2025",
        lastEdited: "05-07-2025",
        tags: ["marketing", "email", "draft"],
        folderId: "folder-1",
        content: `# Brand Guidelines — wersja robocza

Ten dokument opisuje **podstawowe zasady** brandingu. Zobacz też [sekcję o kolorach](#kolory-brandowe) i [typografię](#typografia).

## Wstęp

To jest akapit z *kursywą*, **pogrubieniem** oraz ~~przekreślonym tekstem~~. Możesz też łączyć ***bold i italic razem***.

> Cytat: "Spójność wizualna to nie opcja, to fundament rozpoznawalności marki."

### Checklist przed publikacją

- [x] Logo w wersji kolorowej
- [x] Logo w wersji mono
- [ ] Wersja na ciemne tło

1. Sprawdź kontrast
2. Wyeksportuj do SVG
3. Zatwierdź z zespołem

## Kolory brandowe

| Nazwa | Hex | Użycie |
|---|---|---|
| Primary | \`#4F46E5\` | Przyciski, linki |
| Secondary | \`#F59E0B\` | Akcenty |
| Neutral | \`#1F2937\` | Tekst |

## Typografia

Nagłówki: \`Inter\`, waga 600-700. Tekst: \`Inter\`, waga 400.

Przykład inline code: ustaw \`font-family: 'Inter', sans-serif;\`.

Blok kodu:

\`\`\`css
.heading {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
}
\`\`\`

## Wzory (do proporcji logo)

Stosunek wysokości do szerokości: $h/w = 1{:}1.618$

Pełny wzór na skalowanie:

$$
scale(x) = \\frac{x}{\\text{baseUnit}} \\times 100\\%
$$

## Diagram przepływu zatwierdzania

\`\`\`mermaid
flowchart LR
    A[Draft] --> B{Design review}
    B -- OK --> C[Zatwierdzone]
    B -- Poprawki --> A
\`\`\`

## Linki zewnętrzne

Szop szopix szopers

- li1
- li2

Szopy są super

1. ol1
2. ol2

> blockquote

Pełny brandbook: [Figma – Brand Guidelines](https://figma.com)`,
    },
    {
        id: "note-2",
        name: "Agency Kickoff Notes",
        description: "Notes from the campaign kickoff meeting with the agency.",
        isStarred: false,
        createdAt: "08-07-2025",
        lastEdited: "08-07-2025",
        tags: ["marketing", "meeting-notes"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-3",
        name: "Q4 Ad Spend Breakdown",
        description: "Ad spend breakdown by channel for Q4 planning.",
        isStarred: false,
        createdAt: "12-09-2025",
        lastEdited: "18-09-2025",
        tags: ["marketing", "budget", "q4"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-4",
        name: "Influencer Marketing Strategy",
        description: "Outreach strategy and budget allocation for Q4 influencer partnerships.",
        isStarred: true,
        createdAt: "15-07-2025",
        lastEdited: "20-07-2025",
        tags: ["marketing", "influencer", "q4"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-5",
        name: "Campaign Creative Brief",
        description: "Creative concepts and visual directions for upcoming digital banners.",
        isStarred: false,
        createdAt: "18-07-2025",
        lastEdited: "22-07-2025",
        tags: ["marketing", "design", "brief"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-6",
        name: "SEO Copywriting Guidelines",
        description: "Target keywords and structure for Q3 landing page copy.",
        isStarred: false,
        createdAt: "25-07-2025",
        lastEdited: "26-07-2025",
        tags: ["marketing", "seo", "copywriting"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-7",
        name: "PPC Conversion Analysis",
        description: "Performance review of Google Ads vs Meta Ads for last month.",
        isStarred: false,
        createdAt: "01-08-2025",
        lastEdited: "02-08-2025",
        tags: ["marketing", "ppc", "analytics"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-8",
        name: "Product Launch Webinar Notes",
        description: "Agenda and promotional schedule for the Q4 product release webinar.",
        isStarred: true,
        createdAt: "10-08-2025",
        lastEdited: "12-08-2025",
        tags: ["marketing", "webinar", "events"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-9",
        name: "Retargeting Audience Segments",
        description: "List of custom audiences to target for black friday promo.",
        isStarred: false,
        createdAt: "15-08-2025",
        lastEdited: "18-08-2025",
        tags: ["marketing", "retargeting", "q4"],
        folderId: "folder-1",
        content: "",
    },
    {
        id: "note-10",
        name: "Q3 Campaign ROI Report",
        description: "Final performance metrics and return on ad spend breakdown.",
        isStarred: true,
        createdAt: "28-08-2025",
        lastEdited: "30-08-2025",
        tags: ["marketing", "analytics", "roi"],
        folderId: "folder-1",
        content: "",
    },

    // --- Folder 2: Financial Reports 2025 ---
    {
        id: "note-11",
        name: "Vendor Reconciliation",
        description: "Reconciliation notes for August vendor payments.",
        isStarred: false,
        createdAt: "01-09-2025",
        lastEdited: "01-09-2025",
        tags: ["finance", "reconciliation"],
        folderId: "folder-2",
        content: "",
    },
    {
        id: "note-12",
        name: "Auditor Questions",
        description: "Questions to raise with the auditor before year-end close.",
        isStarred: true,
        createdAt: "03-11-2025",
        lastEdited: "10-11-2025",
        tags: ["finance", "audit", "confidential"],
        folderId: "folder-2",
        content: "",
    },
    {
        id: "note-13",
        name: "Q3 Budget Variance",
        description: "Summary of Q3 budget variance vs. forecast.",
        isStarred: false,
        createdAt: "05-10-2025",
        lastEdited: "06-10-2025",
        tags: ["finance", "budget"],
        folderId: "folder-2",
        content: "",
    },

    // --- Folder 3: Design System & UI Assets ---
    {
        id: "note-14",
        name: "Color Token Naming",
        description: "Color token naming conventions for the new design system.",
        isStarred: true,
        createdAt: "14-06-2025",
        lastEdited: "20-06-2025",
        tags: ["design", "ui-ux", "tokens"],
        folderId: "folder-3",
        content: "",
    },
    {
        id: "note-15",
        name: "Icon Set Review",
        description: "Feedback from the design review on the new icon set.",
        isStarred: false,
        createdAt: "25-06-2025",
        lastEdited: "25-06-2025",
        tags: ["design", "feedback"],
        folderId: "folder-3",
        content: "",
    },
    {
        id: "note-16",
        name: "Accessibility Audit Checklist",
        description: "Checklist for auditing component accessibility contrast.",
        isStarred: false,
        createdAt: "01-07-2025",
        lastEdited: "15-07-2025",
        tags: ["design", "accessibility", "checklist"],
        folderId: "folder-3",
        content: "",
    },

    // --- Folder 4: HR & Onboarding ---
    {
        id: "note-17",
        name: "New Hire Deck Outline",
        description: "Draft outline for the new hire orientation deck.",
        isStarred: false,
        createdAt: "11-08-2025",
        lastEdited: "14-08-2025",
        tags: ["hr", "onboarding", "draft"],
        folderId: "folder-4",
        content: "",
    },
    {
        id: "note-18",
        name: "Remote Work Policy Update",
        description: "Notes on updating the remote work policy section.",
        isStarred: false,
        createdAt: "09-09-2025",
        lastEdited: "09-09-2025",
        tags: ["hr", "policy"],
        folderId: "folder-4",
        content: "",
    },
    {
        id: "note-19",
        name: "Exit Interview Feedback",
        description: "Feedback collected from exit interviews this quarter.",
        isStarred: true,
        createdAt: "20-09-2025",
        lastEdited: "28-09-2025",
        tags: ["hr", "feedback", "internal"],
        folderId: "folder-4",
        content: "",
    },

    // --- Folder 5: Product Roadmap ---
    {
        id: "note-20",
        name: "Prioritized Feature List",
        description: "Prioritized feature list for the next planning cycle.",
        isStarred: true,
        createdAt: "01-10-2025",
        lastEdited: "12-10-2025",
        tags: ["product", "planning"],
        folderId: "folder-5",
        content: "",
    },
    {
        id: "note-21",
        name: "Advisory Board Notes",
        description: "Notes from the customer advisory board on roadmap gaps.",
        isStarred: false,
        createdAt: "15-10-2025",
        lastEdited: "16-10-2025",
        tags: ["product", "customer-feedback"],
        folderId: "folder-5",
        content: "",
    },
    {
        id: "note-22",
        name: "Strategic Goals Draft",
        description: "Draft of the strategic goals for next quarter.",
        isStarred: false,
        createdAt: "02-12-2025",
        lastEdited: "05-12-2025",
        tags: ["product", "strategy", "draft"],
        folderId: "folder-5",
        content: "",
    },

    // --- Folder 6: Customer Research ---
    {
        id: "note-23",
        name: "User Interview Themes",
        description: "Themes from the latest round of user interviews.",
        isStarred: false,
        createdAt: "18-07-2025",
        lastEdited: "22-07-2025",
        tags: ["research", "ux"],
        folderId: "folder-6",
        content: "",
    },
    {
        id: "note-24",
        name: "Q3 Satisfaction Survey Results",
        description: "Survey results summary for the Q3 satisfaction study.",
        isStarred: true,
        createdAt: "02-08-2025",
        lastEdited: "09-08-2025",
        tags: ["research", "survey", "feedback"],
        folderId: "folder-6",
        content: "",
    },
    {
        id: "note-25",
        name: "Enterprise Customer Personas",
        description: "Draft personas for the enterprise customer segment.",
        isStarred: false,
        createdAt: "20-08-2025",
        lastEdited: "25-08-2025",
        tags: ["research", "personas", "draft"],
        folderId: "folder-6",
        content: "",
    },

    // --- Folder 7: Legal Contracts ---
    {
        id: "note-26",
        name: "Vendor Negotiation Notes",
        description: "Notes from the vendor negotiation call last week.",
        isStarred: false,
        createdAt: "05-11-2025",
        lastEdited: "05-11-2025",
        tags: ["legal", "contracts", "meeting-notes"],
        folderId: "folder-7",
        content: "",
    },
    {
        id: "note-27",
        name: "NDA Clause Review Checklist",
        description: "Checklist of clauses to review before signing the NDA.",
        isStarred: true,
        createdAt: "12-11-2025",
        lastEdited: "14-11-2025",
        tags: ["legal", "important", "checklist"],
        folderId: "folder-7",
        content: "",
    },

    // --- Folder 8: Website Redesign v2 ---
    {
        id: "note-28",
        name: "Wireframe Walkthrough Feedback",
        description: "Wireframe feedback from the stakeholder walkthrough.",
        isStarred: true,
        createdAt: "01-06-2025",
        lastEdited: "10-06-2025",
        tags: ["web", "design", "feedback"],
        folderId: "folder-8",
        content: "",
    },
    {
        id: "note-29",
        name: "Homepage Hero Copy Draft",
        description: "Draft copy for the new homepage hero section.",
        isStarred: false,
        createdAt: "15-06-2025",
        lastEdited: "18-06-2025",
        tags: ["web", "copywriting", "draft"],
        folderId: "folder-8",
        content: "",
    },
    {
        id: "note-30",
        name: "Staging Links & QA Notes",
        description: "Staging environment links and QA notes for v2.",
        isStarred: false,
        createdAt: "05-07-2025",
        lastEdited: "20-07-2025",
        tags: ["web", "v2", "qa"],
        folderId: "folder-8",
        content: "",
    },

    // --- Folder 9: Sales Decks & Pitches ---
    {
        id: "note-31",
        name: "Enterprise Pitch Points",
        description: "Talking points for the enterprise pitch on Thursday.",
        isStarred: false,
        createdAt: "22-09-2025",
        lastEdited: "22-09-2025",
        tags: ["sales", "pitch"],
        folderId: "folder-9",
        content: "",
    },
    {
        id: "note-32",
        name: "Competitor Battlecard Update",
        description: "Battlecard update comparing us to the main competitor.",
        isStarred: true,
        createdAt: "02-10-2025",
        lastEdited: "08-10-2025",
        tags: ["sales", "client-facing"],
        folderId: "folder-9",
        content: "",
    },
    {
        id: "note-33",
        name: "Retail Client Case Study",
        description: "Case study draft for the recent retail client win.",
        isStarred: false,
        createdAt: "20-10-2025",
        lastEdited: "25-10-2025",
        tags: ["sales", "case-study", "draft"],
        folderId: "folder-9",
        content: "",
    },

    // --- Folder 10: Engineering Architecture ---
    {
        id: "note-34",
        name: "Billing Service Schema",
        description: "Schema changes needed for the new billing service.",
        isStarred: true,
        createdAt: "01-08-2025",
        lastEdited: "14-08-2025",
        tags: ["dev", "backend"],
        folderId: "folder-10",
        content: "",
    },
    {
        id: "note-35",
        name: "Service Boundaries Review",
        description: "Notes from the architecture review on service boundaries.",
        isStarred: false,
        createdAt: "18-08-2025",
        lastEdited: "19-08-2025",
        tags: ["dev", "docs", "meeting-notes"],
        folderId: "folder-10",
        content: "",
    },
    {
        id: "note-36",
        name: "Event-Driven Notifications ADR",
        description: "Draft ADR for switching to event-driven notifications.",
        isStarred: false,
        createdAt: "03-09-2025",
        lastEdited: "10-09-2025",
        tags: ["dev", "backend", "draft"],
        folderId: "folder-10",
        content: "",
    },

    // --- Folder 11: Social Media Assets ---
    {
        id: "note-37",
        name: "Product Launch Reel Captions",
        description: "Caption ideas for the product launch reel series.",
        isStarred: false,
        createdAt: "11-07-2025",
        lastEdited: "13-07-2025",
        tags: ["marketing", "social-media", "content"],
        folderId: "folder-11",
        content: "",
    },
    {
        id: "note-38",
        name: "Social Content Calendar",
        description: "Content calendar draft for the next posting cycle.",
        isStarred: false,
        createdAt: "25-07-2025",
        lastEdited: "29-07-2025",
        tags: ["marketing", "social-media", "draft"],
        folderId: "folder-11",
        content: "",
    },

    // --- Folder 12: Q1 OKRs & KPIs ---
    {
        id: "note-39",
        name: "Q1 Goal-Setting Workshop",
        description: "Notes from the Q1 goal-setting workshop with leads.",
        isStarred: false,
        createdAt: "10-12-2025",
        lastEdited: "15-12-2025",
        tags: ["management", "goals", "meeting-notes"],
        folderId: "folder-12",
        content: "",
    },
    {
        id: "note-40",
        name: "Engineering KPI Format",
        description: "Draft KPI tracking format for the engineering team.",
        isStarred: false,
        createdAt: "18-12-2025",
        lastEdited: "20-12-2025",
        tags: ["management", "kpi", "draft"],
        folderId: "folder-12",
        content: "",
    },

    // --- Folder 13: Event Planning 2026 ---
    {
        id: "note-41",
        name: "2026 Kickoff Venue Shortlist",
        description: "Shortlist of venues for the 2026 kickoff event.",
        isStarred: true,
        createdAt: "20-11-2025",
        lastEdited: "28-11-2025",
        tags: ["events", "planning"],
        folderId: "folder-13",
        content: "",
    },
    {
        id: "note-42",
        name: "Speaker Outreach Message",
        description: "Draft outreach message for confirmed speakers.",
        isStarred: false,
        createdAt: "01-12-2025",
        lastEdited: "03-12-2025",
        tags: ["events", "draft"],
        folderId: "folder-13",
        content: "",
    },

    // --- Folder 14: Brand Guidelines ---
    {
        id: "note-43",
        name: "Co-Branding Logo Rules",
        description: "Logo usage rules for third-party co-branding requests.",
        isStarred: true,
        createdAt: "05-06-2025",
        lastEdited: "09-06-2025",
        tags: ["branding", "official"],
        folderId: "folder-14",
        content: "",
    },
    {
        id: "note-44",
        name: "Typography Scale Notes",
        description: "Typography scale notes for the refreshed style guide.",
        isStarred: false,
        createdAt: "22-06-2025",
        lastEdited: "26-06-2025",
        tags: ["branding", "design"],
        folderId: "folder-14",
        content: "",
    },
    {
        id: "note-45",
        name: "Brand Color Palette Approvals",
        description: "Color palette approvals from the brand committee.",
        isStarred: false,
        createdAt: "03-07-2025",
        lastEdited: "08-07-2025",
        tags: ["branding", "design", "official"],
        folderId: "folder-14",
        content: "",
    },

    // --- Folder 15: Invoices & Receipts ---
    {
        id: "note-46",
        name: "Overdue Invoices List",
        description: "List of overdue invoices to follow up on this week.",
        isStarred: false,
        createdAt: "15-09-2025",
        lastEdited: "16-09-2025",
        tags: ["finance", "invoices"],
        folderId: "folder-15",
        content: "",
    },
    {
        id: "note-47",
        name: "Expense Reporting Workflow",
        description: "Notes on the new expense reporting workflow.",
        isStarred: false,
        createdAt: "25-09-2025",
        lastEdited: "30-09-2025",
        tags: ["finance", "accounting"],
        folderId: "folder-15",
        content: "",
    },

    // --- Folder 16: API Documentation ---
    {
        id: "note-48",
        name: "v3 API Changelog",
        description: "Draft changelog entries for the v3 API release.",
        isStarred: true,
        createdAt: "05-08-2025",
        lastEdited: "12-08-2025",
        tags: ["dev", "api", "draft"],
        folderId: "folder-16",
        content: "",
    },
    {
        id: "note-49",
        name: "Auth Endpoints Postman Notes",
        description: "Postman collection notes for the auth endpoints.",
        isStarred: false,
        createdAt: "20-08-2025",
        lastEdited: "22-08-2025",
        tags: ["dev", "api", "integration"],
        folderId: "folder-16",
        content: "",
    },

    // --- Folder 17: Competitor Analysis ---
    {
        id: "note-50",
        name: "Competitor Pricing Summary",
        description: "Summary of the top three competitors' pricing models.",
        isStarred: false,
        createdAt: "10-10-2025",
        lastEdited: "14-10-2025",
        tags: ["strategy", "research", "market"],
        folderId: "folder-17",
        content: "",
    },
    {
        id: "note-51",
        name: "Competitor Demo Comparison",
        description: "Feature comparison notes from the latest competitor demo.",
        isStarred: false,
        createdAt: "22-10-2025",
        lastEdited: "23-10-2025",
        tags: ["strategy", "research"],
        folderId: "folder-17",
        content: "",
    },

    // --- Folder 18: Security Audits ---
    {
        id: "note-52",
        name: "Penetration Test Findings",
        description: "Findings summary from the latest penetration test.",
        isStarred: true,
        createdAt: "01-11-2025",
        lastEdited: "08-11-2025",
        tags: ["security", "audit", "confidential"],
        folderId: "folder-18",
        content: "",
    },
    {
        id: "note-53",
        name: "ISO Compliance Checklist",
        description: "Checklist for the upcoming ISO compliance review.",
        isStarred: false,
        createdAt: "15-11-2025",
        lastEdited: "20-11-2025",
        tags: ["security", "audit", "checklist"],
        folderId: "folder-18",
        content: "",
    },

    // --- Folder 19: Video Production ---
    {
        id: "note-54",
        name: "Product Demo Shot List",
        description: "Shot list for the upcoming product demo video.",
        isStarred: false,
        createdAt: "14-07-2025",
        lastEdited: "16-07-2025",
        tags: ["media", "video"],
        folderId: "folder-19",
        content: "",
    },
    {
        id: "note-55",
        name: "Testimonial Series Script",
        description: "Script draft for the customer testimonial series.",
        isStarred: false,
        createdAt: "28-07-2025",
        lastEdited: "01-08-2025",
        tags: ["media", "video", "draft"],
        folderId: "folder-19",
        content: "",
    },

    // --- Folder 20: Archived Projects ---
    {
        id: "note-56",
        name: "Legacy Files Cleanup Notes",
        description: "Notes on which legacy client files can be deleted.",
        isStarred: false,
        createdAt: "10-05-2025",
        lastEdited: "12-05-2025",
        tags: ["archive", "storage"],
        folderId: "folder-20",
        content: "",
    },
    {
        id: "note-57",
        name: "Codebase Archive Migration",
        description: "Migration notes for the old codebase before archiving.",
        isStarred: false,
        createdAt: "20-05-2025",
        lastEdited: "25-05-2025",
        tags: ["archive", "old", "dev"],
        folderId: "folder-20",
        content: "",
    },
]