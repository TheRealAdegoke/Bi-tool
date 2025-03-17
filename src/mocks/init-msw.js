if (typeof window !== "undefined") {
  import("./browser")
    .then(({ worker }) => worker.start())
    .catch((error) => console.error("MSW failed to start:", error));
}
