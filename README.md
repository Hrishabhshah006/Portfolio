# Welcome to your Lovable project

[![CI](https://github.com/Hrishabhshah006/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Hrishabhshah006/Portfolio/actions/workflows/ci.yml)

## Project info

**URL**: https://lovable.dev/projects/fea6ebaf-9fff-4f11-8721-d1289a3ff4b2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fea6ebaf-9fff-4f11-8721-d1289a3ff4b2) and start prompting.

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

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
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

Simply open [Lovable](https://lovable.dev/projects/fea6ebaf-9fff-4f11-8721-d1289a3ff4b2) and click on Share -> Publish.

## Running on Kubernetes (local `kind` cluster)

The `k8s/` folder contains manifests (Deployment, Service, Ingress, HPA) to run the
containerized app on Kubernetes. You can try it locally with a free
[kind](https://kind.sigs.k8s.io/) cluster — no cloud account required.

**Prerequisites:** [Docker](https://docs.docker.com/get-docker/),
[kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation), and
[kubectl](https://kubernetes.io/docs/tasks/tools/).

```sh
# 1. Create a local cluster
kind create cluster --name portfolio

# 2. Install the NGINX ingress controller (needed for the Ingress)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

# 3. Deploy the app (applies everything via kustomization.yaml)
kubectl apply -k k8s/

# 4. Check that it is running
kubectl get all -n portfolio
kubectl get ingress -n portfolio
```

Map the ingress host to localhost, then open the site:

```sh
echo "127.0.0.1 portfolio.local" | sudo tee -a /etc/hosts
# visit http://portfolio.local
```

**Tear down when done:**

```sh
kind delete cluster --name portfolio
```

> Note: the image `ghcr.io/hrishabhshah006/portfolio:latest` must be public for the
> cluster to pull it (GitHub → Packages → portfolio → make public), or configure an
> image pull secret.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
