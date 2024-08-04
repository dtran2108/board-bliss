'use client'

import { todoMachine } from "@/machines/todoAppMachine";
import { useMachine } from "@xstate/react";

export default function Home() {
  const [state, send] = useMachine(todoMachine);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(state.value)}
      <button onClick={() => {
        send({type: "Todos loaded"})
      }}>todo loaded</button>
      <button onClick={() => {
        send({type: "Loading todos failed"})
      }}>todo error</button>
    </main>
  );
}
