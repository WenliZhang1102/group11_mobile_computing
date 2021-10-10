# Wasteless | Group 11
This app is used for reducing your food waste by generating your own wasteless meal plan.

It comprises of a frontend and a backend app. The frontend app is based on the VueJS framework, while the backend is a REST API based on the Express.js framework.

# Backend and Frontend Template

## Requirements

You can also use alternative tools if you know how to configure them (e.g., Firefox instead of Chrome).

  * [Setup SSH key with Github]
    * Create an SSH key pair `ssh-keygen -t ed25519 -C "email@example.com"` (skip if you already have one)
    * Add your public SSH key to your Github profile.
* [Git](https://git-scm.com/) (v2) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
  * [Add your Git username and set your email]
    * `git config --global user.name "YOUR_USERNAME"` => check `git config --global user.name`
    * `git config --global user.email "email@example.com"` => check `git config --global user.email`
  * > **Windows users**: We recommend to use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) shell from your Git installation or the Bash shell from the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run all shell commands for this project.
* [Backend Requirements](./backend/README.md#Requirements)
* [Frontend Requirements](./frontend/README.md#Requirements)

## Getting started

```bash
# Clone repository
git clone git@github.com:WenliZhang1102/group11_mobile_computing.git

# Change into the directory
cd group11_mobile_computing

# Setup backend
cd backend && npm install
npm run dev

# Setup frontend
cd frontend && npm install
npm run serve
```

## Visual Studio Code (VSCode)

Open the `backend` and `frontend` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.
