// `app/work/[slug]/page.tsx` is the long-form case study template for `/work/<slug>`
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import homeStyles from "../../page.module.scss";
import { getCaseStudies, getCaseStudy, type CaseStudyImage } from "../caseStudies";
import { DEMOS } from "../demos";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
    return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) return {};

    return {
        title: `${study.title} — NULL INSIDE`,
        description: study.summary,
        openGraph: {
            title: `${study.title} — NULL INSIDE`,
            description: study.summary,
            images: study.heroImage
                ? [{ url: study.heroImage.poster ?? study.heroImage.src, alt: study.heroImage.alt }]
                : undefined,
        },
    };
}

const Media = ({ media }: { media: CaseStudyImage }) => (
    <figure className={media.wide ? "md:col-span-2" : undefined}>
        {media.type === "video" ? (
            <video
                className="w-auto max-w-full max-h-[80vh] mx-auto"
                src={media.src}
                poster={media.poster}
                aria-label={media.alt}
                autoPlay
                muted
                loop
                playsInline
            />
        ) : (
            <img className="w-full h-auto" src={media.src} alt={media.alt} />
        )}
        {media.caption && <figcaption className="mt-2 text-sm opacity-70">{media.caption}</figcaption>}
    </figure>
);

export default async function CaseStudyPage({ params }: { params: Params }) {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) notFound();
    const Demo = DEMOS[study.slug];

    return (
        <main className="w-full flex flex-col items-center px-4 md:px-8 pt-28 pb-40">
            <article className="w-full max-w-4xl flex flex-col gap-12">
                <header className="flex flex-col gap-6 text-center">
                    <p className="text-sm uppercase tracking-widest opacity-70">
                        {study.year} · {study.tags.join(" / ")}
                    </p>
                    <h1 className={`${homeStyles.heading} text-4xl md:text-6xl`}>{study.title}</h1>
                    <p className="text-lg md:text-xl">{study.summary}</p>
                </header>

                {Demo ? (
                    <Demo />
                ) : study.heroImage && (
                    <Media media={study.heroImage} />
                )}

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <dt className="text-sm uppercase tracking-widest opacity-70">Role</dt>
                        <dd className="mt-1">{study.role}</dd>
                    </div>
                    {study.collaborators && study.collaborators.length > 0 && (
                        <div>
                            <dt className="text-sm uppercase tracking-widest opacity-70">Team</dt>
                            <dd className="mt-1">{study.collaborators.join(", ")}</dd>
                        </div>
                    )}
                </dl>

                <section className="flex flex-col gap-4">
                    <h2 className={`${homeStyles.subHeading} text-md md:text-lg`}>The challenge</h2>
                    <p>{study.challenge}</p>
                </section>

                {study.decisions.length > 0 && (
                    <section className="flex flex-col gap-6">
                        <h2 className={`${homeStyles.subHeading} text-md md:text-lg`}>Key decisions</h2>
                        {study.decisions.map((decision) => (
                            <div key={decision.heading} className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">{decision.heading}</h3>
                                <p>{decision.body}</p>
                            </div>
                        ))}
                    </section>
                )}

                {study.images && study.images.length > 0 && (
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {study.images.map((image) => (
                            <Media key={image.src} media={image} />
                        ))}
                    </section>
                )}

                <section className="flex flex-col gap-6">
                    <h2 className={`${homeStyles.subHeading} text-md md:text-lg`}>Results</h2>
                    {study.outcome.metrics && study.outcome.metrics.length > 0 && (
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {study.outcome.metrics.map((metric, index) => (
                                <li key={index} className="flex flex-col">
                                    <span className={`${homeStyles.subHeading} text-2xl md:text-3xl`}>{metric.value}</span>
                                    <span className="text-sm opacity-70">{metric.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p>{study.outcome.summary}</p>
                </section>
            </article>
        </main>
    );
}
