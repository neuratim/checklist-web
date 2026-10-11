import type { ReactNode } from "react";
import type { ShowcaseProps } from "../types/components";
import { Reveal } from "./Reveal";
import "./Showcase.css";

/**
 * A section that explains one capability with the app's own screen beside it.
 *
 * Four sections now have this shape — conditional items, getting a list in,
 * statistics and security — and each of them is a claim that reads as abstract
 * in prose and obvious in a screenshot. `children` is the phone frame; the
 * caller owns which mockup goes in it.
 */
export function Showcase({
    children,
    elevated = false,
    eyebrow,
    heading,
    id,
    intro,
    note,
    points,
    reversed = false,
}: ShowcaseProps): ReactNode {
    return (
        <section className={elevated ? "section section-elevated" : "section"} id={id}>
            <div className="container">
                <Reveal>
                    <p className="eyebrow">{eyebrow}</p>
                    <h2 className="section-heading">{heading}</h2>
                    <p className="section-intro">{intro}</p>
                </Reveal>

                <Reveal className={reversed ? "showcase showcase-reversed" : "showcase"}>
                    <div className="showcase-visual">{children}</div>

                    <div>
                        <ul className="showcase-points">
                            {points.map((point) => (
                                <li className="showcase-point" key={point.title}>
                                    <h3 className="showcase-point-title">{point.title}</h3>
                                    <p className="showcase-point-body">{point.body}</p>
                                </li>
                            ))}
                        </ul>

                        {note && <p className="showcase-note">{note}</p>}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
