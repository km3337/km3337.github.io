export type CaseStudyTag = "creative" | "product" | "event" | "engineering";

export interface CaseStudyImage {
    src: string;
    alt: string;
    caption?: string;
    type?: "image" | "video"; // videos autoplay muted on loop
    poster?: string; // still frame shown before a video loads
    wide?: boolean; // spans both columns in the image grid, for landscape media
    contain?: boolean; // show the whole image on home page cards instead of cropping (logos)
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
        heroImage: { src: "/work/instant-ads/key.png", alt: "Eventbrite brand mark", contain: true },
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
        year: "2025",
        tags: ["engineering", "creative"],
        summary: "Legally distinct versions of Reddit, Google Search, Google Maps and an iPhone call, built as web apps to run live on set for the film The Children.",
        result: "Saved thousands in post-production VFX",
        role: "Lead Playback Animator",
        heroImage: {
            type: "video",
            src: "/work/the-children/on-set.mp4",
            poster: "/work/the-children/on-set-poster.jpg",
            alt: "On-set camera monitor showing the simulated medical site during filming",
            caption: "On set: the simulated medical site on the camera monitor.",
        },
        challenge: "The production needed screen content running on phones, laptops and desktop computers while filming, with several shots of the apps running directly on those devices. Showing the real apps on screen wasn't an option.",
        decisions: [
            {
                heading: "Real web apps instead of video feeds",
                body: "I proposed building web applications that render natively on each device, simulating the apps the scenes needed while avoiding potential lawsuits.",
            },
            {
                heading: "One app, a route per experience",
                body: "Each experience (search, WroteIt, PinPoints maps, the medical site and the iPhone call) is its own route in a single Next.js app. Query params force redirects between the phone call and the mobile search results, so the sequence could play on cue while the live feed was recorded on a phone.",
            },
            {
                heading: "WroteIt, a legally distinct Reddit",
                body: "Stylistically, WroteIt looks just like Reddit, so it reads instantly on camera, while its own name and branding keep it legally distinct.",
            },
        ],
        outcome: {
            summary: "The apps ran live on set on phones, old laptops and desktop computers, so the screens were captured in camera instead of added in post. That saved the production thousands of dollars in editing and post-production VFX.",
            metrics: [
                { value: "$1,000s", label: "saved in editing and post-production VFX" },
                { value: "3", label: "device types: phones, laptops and desktops" },
            ],
        },
        images: [
            {
                type: "video",
                src: "/work/the-children/search-to-maps.mp4",
                poster: "/work/the-children/search-to-maps-poster.jpg",
                wide: true,
                alt: "Searching an address in the simulated search engine, then routing to it in PinPoints",
                caption: "Searching an address, then routing to it in PinPoints, the Maps simulation.",
            },
            {
                type: "video",
                src: "/work/the-children/wroteit.mp4",
                poster: "/work/the-children/wroteit-poster.jpg",
                alt: "Scrolling a thread on WroteIt, the Reddit simulation, in dark mode",
                caption: "WroteIt, the Reddit simulation, in a scene 13 thread.",
            },
            {
                type: "video",
                src: "/work/the-children/phone-call.mp4",
                poster: "/work/the-children/phone-call-poster.jpg",
                alt: "Simulated iPhone incoming call screen from Dad",
                caption: "The iPhone incoming call simulation.",
            },
        ],
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

// What the home page lists: drafts show during `npm run dev`, the example never does.
export const getListedCaseStudies = (): CaseStudy[] =>
    process.env.NODE_ENV === "development" ? CASE_STUDIES : CASE_STUDIES.filter((study) => !study.draft);

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
    getCaseStudies().find((study) => study.slug === slug);
