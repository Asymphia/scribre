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