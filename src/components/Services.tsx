import {
  FiLayers,
  FiBox,
  FiSettings,
  FiGitBranch,
  FiPenTool,
  FiClipboard,
} from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    icon: FiLayers,
    code: "01",
    title: "Structural Steel Detailing",
    description:
      "Fabrication-ready detailing for structural steel frameworks, connections, platforms and support structures, built to standards.",
  },
  {
    icon: FiBox,
    code: "02",
    title: "Steel Modeling",
    description:
      "Accurate 3D structural steel models coordinated across disciplines, ready for fabrication, erection and clash detection.",
  },
  {
    icon: FiSettings,
    code: "03",
    title: "Mechanical Design",
    description:
      "Machine enclosures, safety guards and mechanical components designed for manufacturability, safety and performance.",
  },
  {
    icon: FiGitBranch,
    code: "04",
    title: "Piping Design",
    description:
      "Piping layouts, isometrics and support design for industrial plants, engineered for accuracy and code compliance.",
  },
  {
    icon: FiPenTool,
    code: "05",
    title: "CAD Drafting",
    description:
      "Precise 2D and 3D CAD drafting for assembly drawings, general arrangements and manufacturing documentation.",
  },
  {
    icon: FiClipboard,
    code: "06",
    title: "Engineering Documentation",
    description:
      "Complete documentation packages — fabrication drawings, BOMs and specifications — organised for review and delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="What We Deliver"
          title="Engineering Design Services for Industrial Australia"
          description="From concept to fabrication-ready documentation, every deliverable is drafted to precise tolerances and international engineering standards."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
