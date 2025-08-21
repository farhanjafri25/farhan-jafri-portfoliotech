# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7e1e074d-4452-421e-8094-516505651758

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7e1e074d-4452-421e-8094-516505651758) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables
cp .env.example .env
# Edit .env and add your Resend API key

# Step 5: Start both frontend and backend servers
npm run dev:full

# Or run them separately:
# Backend server (for email functionality):
npm run server

# Frontend development server:
npm run dev
```

## Environment Setup

This project uses Resend for sending emails from the contact form. To set up:

1. Create a [Resend account](https://resend.com)
2. Get your API key from the [Resend dashboard](https://resend.com/api-keys)
3. Copy `.env.example` to `.env`
4. Add your Resend API key to the `.env` file:
   ```
   VITE_RESEND_API_KEY=your_actual_api_key_here
   ```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7e1e074d-4452-421e-8094-516505651758) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
