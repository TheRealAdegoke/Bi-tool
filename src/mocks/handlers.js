import { http, HttpResponse } from "msw";

let users = [];
let sessions = [];

export const handlers = [
  http.post("/api/register", async ({ request }) => {
    const { email, password, fullName } = await request.json();
    if (!email || !password || !fullName) {
      return HttpResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    if (users.some((user) => user.email === email)) {
      return HttpResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    const newUser = { email, password, fullName, id: Date.now().toString() };
    users.push(newUser);
    return HttpResponse.json(
      { message: "Registration successful", user: { email, fullName } },
      { status: 201 }
    );
  }),

  http.post("/api/login", async ({ request }) => {
    const { email, password, keepLoggedIn } = await request.json();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return HttpResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const token = `mock-jwt-${user.id}`;
    sessions.push({ userId: user.id, token, keepLoggedIn });
    return HttpResponse.json(
      { token, user: { email: user.email, fullName: user.fullName } },
      { status: 200 }
    );
  }),

  http.get("/api/dashboard", ({ request }) => {
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token || !sessions.some((s) => s.token === token)) {
      return HttpResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return HttpResponse.json({
      metrics: {
        totalUsers: users.length,
        activeSessions: sessions.length,
        salesRevenue: 12345,
      },
      salesTrends: [
        { month: "Jan", sales: 1000 },
        { month: "Feb", sales: 1500 },
        { month: "Mar", sales: 2000 },
      ],
      userGrowth: [
        { month: "Jan", users: 50 },
        { month: "Feb", users: 75 },
        { month: "Mar", users: 100 },
      ],
      categoryDistribution: [
        { name: "Electronics", value: 40 },
        { name: "Clothing", value: 30 },
        { name: "Books", value: 20 },
        { name: "Other", value: 10 },
      ],
      tableData: users.map((u) => ({
        id: u.id,
        fullName: u.fullName,
        email: u.email,
        sales: Math.floor(Math.random() * 1000),
      })),
    });
  }),
];
