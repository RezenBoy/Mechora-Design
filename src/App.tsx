import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessTimeline from "./components/ProcessTimeline";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Industries />
        <WhyChooseUs />
        <ProcessTimeline />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
