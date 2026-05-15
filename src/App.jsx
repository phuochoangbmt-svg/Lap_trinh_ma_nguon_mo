import { Card } from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Open Source Project
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="React" desc="JavaScript library for building UI" />

        <Card title="Vite" desc="Fast frontend build tool" />

        <Card title="Tailwind CSS" desc="Utility-first CSS framework" />
      </div>
    </div>
  );
}

export default App;
