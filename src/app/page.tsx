import SimulateButton from "components/SimulateButton";
import Canvas from "components/Canvas";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">SimuStack MVP</h1>
      <Canvas />
      <SimulateButton />
    </main>
  );
}
