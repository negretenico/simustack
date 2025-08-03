"use client";

import ReactFlow, { Background, Controls } from "reactflow";

export default function Canvas() {
  return (
    <div style={{ height: "600px", border: "1px solid #ccc" }}>
      <ReactFlow elements={[]} onLoad={(instance) => instance.fitView()}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
