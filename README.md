# Aura - Premium Boutique

A serene e-commerce experience with an AI concierge.

## Hosting on GitHub Pages

This project is configured to be deployed to GitHub Pages using GitHub Actions.

### Steps to Deploy

1. **Push to GitHub**: Push this repository to a new GitHub repository.
2. **Set up Secrets**:
   - Go to your repository settings on GitHub.
   - Navigate to **Settings** > **Secrets and variables** > **Actions**.
   - Add a new repository secret named `GEMINI_API_KEY` with your Google Gemini API key.
3. **Enable GitHub Pages**:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. **Trigger Deployment**:
   - The deployment will automatically trigger whenever you push to the `main` branch.

### Note on API Keys
Since this is a static site, the `GEMINI_API_KEY` will be included in the client-side bundle. For production applications, it is recommended to use a backend proxy to keep your API keys secure.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
