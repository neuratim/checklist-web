/** Fills `{name}` placeholders in a translated string, so word order stays the translator's call. */
export function formatCopy(template: string, values: Readonly<Record<string, string | number>>): string {
    return Object.entries(values).reduce(
        (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
        template,
    );
}
