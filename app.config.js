export default {
  expo: {
    name: "FinPortApp",
    slug: "finportapp",
    version: "1.0.0",
    extra: {
      API_URL: process.env.API_URL || "http://localhost:3001",
    }
  }
}
