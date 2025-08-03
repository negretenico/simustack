"use client";

import { useState } from "react";
import { simulateTraffic } from "lib/fakeSimulation";

export default function SimulateButton() {
  const [running, setRunning] = useState(false);

  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      onClick={async () => {
        setRunning(true);
        await simulateTraffic(100000);
        setRunning(false);
      }}
      disabled={running}
    >
      {running ? "Simulating..." : "Simulate 100K Users"}
    </button>
  );
}
