# FlowForge AI - Full-Stack SaaS

FlowForge AI is an advanced, AI-powered workflow automation platform designed with a stunning pastel glassmorphic UI, Next.js 15, Tailwind CSS, and a powerful backend architecture.

## Features Currently Implemented
- **Landing Page**: Fully responsive marketing page with gradients and animations matching the Stitch UI prototype.
- **Dashboard**: Stats cards with glassmorphism and stubbed Activity/Charts layout.
- **Workflow Builder**: Interactive React Flow integration replacing standard canvas boards.
- **Dependencies Installed**: Ready for `firebase`, `mongoose`, `stripe`, `@xyflow/react`, `recharts`, `framer-motion`, `openai`, `twilio`, and `socket.io-client`.
- **Database/Auth Stubs**: `src/lib/mongoose.ts` and `src/lib/firebase.ts` configured for environment variables.

## Getting Started

1. Clone or clone-and-download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file at the root of the project with your API keys:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Firebase Auth
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Payments
   STRIPE_SECRET_KEY=your_stripe_secret
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Next Steps for Production
1. Configure Stripe webhook endpoint in `app/api/webhooks/stripe/route.ts`.
2. Connect OpenAI and Twilio to the `Action` nodes in React Flow.
3. Deploy to Vercel via GitHub integration.

### Testing and CI/CD
To integrate tests, install: `npm i -D jest cypress @testing-library/react`. 
Check `cypress` test configuration based on your deployed URLs.
