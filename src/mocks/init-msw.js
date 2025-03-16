if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  import("./browser")
    .then(({ worker }) => worker.start())
    .catch((error) => console.error("MSW failed to start:", error));
}
