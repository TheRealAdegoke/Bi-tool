# Business Intelligence (BI) Tool

A simple BI tool built with Next.js, Tailwind CSS, and MUI. It has user login/register and a dashboard with business data.

## Links
- **Live Demo**: [Insert your deployed URL here]

## Features
- **Login**: Email/password with "Keep me logged in" option. Logs out after 1 minute if unchecked.
- **Register**: Sign up with email, password, full name. Shows errors if invalid.
- **Dashboard**: 
  - Cards: Total Users, Active Sessions, Sales Revenue.
  - Charts: Line (sales), Bar (users), Pie (categories) using Recharts.
  - Table: User data with sorting and filtering (MUI DataGrid).
  - Protected: Only for logged-in users.
- **Bonus**: Dark mode.

## Tech Used
- Next.js, Tailwind CSS, MUI
- Recharts for charts
- React Context for state
- MSW for mock APIs

## Setup
1. **Clone**: `git clone && cd bi-tool`
2. **Install**: `npm install`
3. **MSW**: `npx msw init public/`
4. **Run**: `npm run dev` (visit `http://localhost:3000`)

## Deployment
- Hosted on Vercel.
- Push to GitHub, connect to Vercel, deploy.

## Notes
- Designed without Figma using my frontend skills.
- Responsive and clean UI.
- MSW runs in dev and prod.

## Submission
- **URL**: [Insert deployed URL]

Thanks for reviewing!