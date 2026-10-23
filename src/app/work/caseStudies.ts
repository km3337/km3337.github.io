export type CaseStudyTag = "creative" | "product" | "event" | "engineering";

export interface CaseStudyImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface CaseStudyDecision {
    heading: string; // e.g. "Why a Dekopon editorial instead of a lookbook"
    body: string;
}

export interface CaseStudyMetric {
    value: string; // e.g. "48 hrs"
    label: string; // e.g. "to sell out"
}

export interface CaseStudy {
    slug: string;
    draft?: boolean; // drafts only show during `npm run dev`
    title: string;
    year: string;
    tags: CaseStudyTag[];
    summary: string;
    result: string; // one-line result for the home page tile, e.g. "Sold out in 48 hrs"
    role: string;
    collaborators?: string[];
    heroImage?: CaseStudyImage;
    challenge: string;
    decisions: CaseStudyDecision[];
    outcome: {
        summary: string;
        metrics?: CaseStudyMetric[];
    };
    images?: CaseStudyImage[];
}

// Real case studies go here. Order is the order they show on the site.
export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "instant-ads",
        draft: true,
        title: "Instant Ads",
        year: "2026",
        tags: ["engineering"],
        summary: "A lightweight, modular way for organizers to launch Eventbrite ads from anywhere in the organizer workspace.",
        result: "+19% event-to-ad conversion",
        role: "Senior Software Engineer, Ads Creator Experience",
        collaborators: [],
        challenge: "Organizers had a hard time getting from core event management to the ad creation platform. Engineering was on a holiday time crunch and needed a solution that was quick, stable, and worked with both the legacy organizer pages and the new rebrand.",
        decisions: [
            {
                heading: "Bring the ad flow to the organizer",
                body: "Rather than forcing users to navigate back and forth between separate experiences, and rebuilding multiple components, I reused components from our new design system and integrated a smaller, portable version of our ad creation workflow.",
            },
            {
                heading: "A lightweight, modular form",
                body: "A lightweight module creates a smaller version of our existing form object, paired with validations from our Stripe integration. Entry points use the organizer's existing ad creation history to change the experience they see.",
            },
            {
                heading: "Budget suggestions from real spend",
                body: "We updated older endpoints to include a suggested budget bucket based on each organizer's annual spend. Organizers who ran more ads were recommended a budget based on their average spend. Organizers new to the ad platform were recommended budget and duration combinations statistically shown to raise their chances of event success.",
            },
        ],
        outcome: {
            summary: "Shipped before the holidays. Conversion from event creation to ad creation went up 19%.",
            metrics: [
                { value: "+19%", label: "conversion from event creation to ad creation" },
                { value: "On time", label: "shipped before the holiday rush" },
            ],
        },
    },
    {
        slug: "the-children",
        draft: true,
        title: "The Children",
        year: "TODO",
        tags: ["engineering", "creative"],
        summary: "Legally distinct versions of Reddit, Google Search, Google Maps and an iPhone call, built as web apps to run live on set for the film The Children.",
        result: "TODO: one-line result",
        role: "Lead Playback Animator",
        challenge: "The production needed screen content running on phones, laptops and desktop computers while filming, with several shots of the apps running directly on those devices. Showing the real apps on screen wasn't an option.",
        decisions: [
            {
                heading: "Real web apps instead of video feeds",
                body: "I proposed building web applications that render natively on each device, simulating the apps the scenes needed while avoiding potential lawsuits.",
            },
            {
                heading: "WroteIt, a legally distinct Reddit",
                body: "TODO: how you built it and what made it read as Reddit on camera without being Reddit.",
            },
        ],
        outcome: {
            summary: "TODO: what happened on set.",
        },
    },
];

// Placeholder so the template can be previewed at /work/example during `npm run dev`.
// It is never included in production builds.
const EXAMPLE_CASE_STUDY: CaseStudy = {
    slug: "example",
    title: "Example Case Study",
    year: "2026",
    tags: ["creative"],
    summary: "Placeholder summary: one or two sentences on what the project was and why it mattered.",
    result: "Placeholder result",
    role: "Creative Director",
    collaborators: ["Photographer", "Stylist"],
    heroImage: { src: "/direction/Bliss capture.png", alt: "Placeholder hero image" },
    challenge: "Placeholder: what problem or goal kicked off the project.",
    decisions: [
        { heading: "Why I chose X", body: "Placeholder: the call, the alternatives, and the reasoning." },
        { heading: "Why I chose Y", body: "Placeholder: another key decision." },
    ],
    outcome: {
        summary: "Placeholder: what happened after launch.",
        metrics: [
            { value: "00", label: "placeholder metric" },
            { value: "00", label: "placeholder metric" },
        ],
    },
    images: [
        { src: "/direction/EndOfAnError.jpg", alt: "Placeholder process image", caption: "Placeholder caption" },
        { src: "/direction/cherie.png", alt: "Placeholder process image" },
    ],
};

export const getCaseStudies = (): CaseStudy[] =>
    process.env.NODE_ENV === "development"
        ? [...CASE_STUDIES, EXAMPLE_CASE_STUDY]
        : CASE_STUDIES.filter((study) => !study.draft);

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
    getCaseStudies().find((study) => study.slug === slug);
