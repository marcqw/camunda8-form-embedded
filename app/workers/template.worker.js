export const templateWorker = async () => {
  console.log("Starting worker...");
  zeebe.createWorker({
    taskType: "template-worker",
    taskHandler: (job) => {
      console.log(`[Zeebe Worker] handling job of type ${job.type}`);
      return job.complete({
        serviceTaskOutcome: "We did it!",
      });
    },
  });
}