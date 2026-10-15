/** Keep prerendered content readable when selected-language startup cannot finish. */
export function retainStaticPage(root: Element): void {
    for (const element of root.querySelectorAll<HTMLElement>(".reveal, [data-reveal]")) {
        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.visibility = "visible";
    }
    root.setAttribute("data-static-fallback", "true");
}
