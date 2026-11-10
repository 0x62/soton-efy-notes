import { calculate } from "./rc";
self.onmessage = async (event) => {
  try {
    self.postMessage({ result: await calculate(event.data) });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : "Simulation failed",
    });
  }
};
