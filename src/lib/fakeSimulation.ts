export async function simulateTraffic(count: number): Promise<void> {
  console.log(`Simulating ${count} users hitting Kafka topic...`);

  return new Promise((resolve) => {
    let processed = 0;
    const interval = setInterval(() => {
      processed += 5000;
      console.log(`Processed ${processed} users`);
      if (processed >= count) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
}
