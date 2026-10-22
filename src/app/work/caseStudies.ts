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
    title: string;
    year: string;
    tags: CaseStudyTag[];
    summary: string;
    result: string; // one-line result for the home page tile, e.g. "Sold out in 48 hrs"
    role: string;
    collaborators?: string[];
    heroImage: CaseStudyImage;
    challenge: string;
    decisions: CaseStudyDecision[];
    outcome: {
        summary: string;
        metrics?: CaseStudyMetric[];
    };
    images?: CaseStudyImage[];
}

// Real case studies go here. Order is the order they show on the site.
export const CASE_STUDIES: CaseStudy[] = [];

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
    process.env.NODE_ENV === "development" ? [...CASE_STUDIES, EXAMPLE_CASE_STUDY] : CASE_STUDIES;

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
    getCaseStudies().find((study) => study.slug === slug);
