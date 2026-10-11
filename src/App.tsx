import { ConditionalItems } from "./components/ConditionalItems";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FreeAndSupport } from "./components/FreeAndSupport";
import { GetApp } from "./components/GetApp";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Insights } from "./components/Insights";
import { Nav } from "./components/Nav";
import { Privacy } from "./components/Privacy";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { QuickStart } from "./components/QuickStart";
import { Security } from "./components/Security";
import { TryApp } from "./components/TryApp";
import { ROUTE_HREFS } from "./constants/routes";
import { useHashRoute } from "./hooks/useHashRoute";

function App() {
    const hash = useHashRoute();

    if (hash === ROUTE_HREFS.tryApp) {
        return <TryApp />;
    }

    // Its own route rather than a section: the policy is reached from a link
    // or the menu, and its address is what app stores are given.
    if (hash === ROUTE_HREFS.privacyPolicy) {
        return <PrivacyPolicy />;
    }

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <HowItWorks />
                {/* Getting a list in comes before what you can do with one:
                    the first question a checklist app has to answer is how
                    much typing it costs to start. */}
                <QuickStart />
                <ConditionalItems />
                <Features />
                <Insights />
                <Security />
                <Privacy />
                <FreeAndSupport />
                <GetApp />
            </main>
            <Footer />
        </>
    );
}

export default App;
