import { simulateTransient } from "./simulation";
self.onmessage = async (event) => {
  try {
    self.postMessage({ result: await simulateTransient(event.data) });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : "Simulation failed",
    });
  }
};
