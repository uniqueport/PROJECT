import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card to="/summary" img="https://images.unsplash.com/photo-1581090700227-4c4e6f0a85d3" title="Professional Summary" />
      <Card to="/experience" img="https://images.unsplash.com/photo-1554774853-b414d2a2fc46" title="Experience" />
      <Card to="/skills" img="https://images.unsplash.com/photo-1519389950473-47ba0277781c" title="Technical Skills" />
      <Card to="/projects" img="https://images.unsplash.com/photo-1581090700227-4c4e6f0a85d3" title="Projects & Process Improvements" />
      <Card to="/education" img="https://images.unsplash.com/photo-1523240795612-9a054b0db644" title="Education & Certifications" />
      <Card to="/contact" img="https://images.unsplash.com/photo-1596495577886-d920f8cbddec" title="Contact Info" />
    </div>
  );
}

function Card({ to, img, title }) {
  return (
    <Link to={to} className="group relative">
      <img
        src={img}
        alt={title}
        className="rounded-2xl shadow-lg w-full h-64 object-cover group-hover:scale-105 transition"
      />
      <span className="absolute bottom-4 left-4 text-white text-xl font-bold">{title}</span>
    </Link>
  );
}
