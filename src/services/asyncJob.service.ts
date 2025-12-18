export async function runAsyncJob(reportId: string) {
  console.log("Async job triggered for report:", reportId);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async job finished for report:", reportId);
      resolve(true);
    }, 1000);
  });
}
