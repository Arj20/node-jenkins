console.log("🚀 Jenkins + GitHub test started");

const now = new Date().toISOString();
console.log("Time:", now);

setTimeout(() => {
  console.log("✅ Script ran successfully");
  process.exit(0);
}, 1000);
