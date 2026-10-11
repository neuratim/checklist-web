import { useEffect, useState } from "react";

export function useHashRoute(): string {
    const [hash, setHash] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return hash;
}
