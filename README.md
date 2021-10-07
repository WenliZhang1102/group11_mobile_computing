# Wasteless | Group 11
This app is used for reducing your food waste by generating your own wasteless meal plan.

It comprises of a frontend and a backend app. The frontend app is based on the VueJS framework, while the backend is a REST API based on the Express.js framework.

## Environments
### Production
Frontend: http://vuejs.se

Backend: http://vuejs.se/api

### Stage
Frontend: http://develop.vuejs.se

Backend: http://develop.vuejs.se/api

## Getting started
### Requirements
* [Backend Requirements](./backend/README.md#Requirements)
* [Frontend Requirements](./frontend/README.md#Requirements)

```bash
# Clone repository
git clone git@git.

# Change into the directory
cd platform

# Setup backend
cd backend && npm install
npm run dev

# Setup frontend
cd frontend && npm install
npm run serve
```

## Way of Working
### Implementing an issue
The issues (e.g. user stories) to be implemented for the active sprint are listed in the **Sprint** column in the [Kanban Board](https://git.chalmers.se/courses/eda397/2021/team-5-operator-app/-/boards). Follow the guidelines below in order to implement an issue:
- The issues are listed based on their priority so start always with the top most issue in the **Sprint** column
- Move the issue to the **In Progress** column, and click on the issue to open it
- Assign the issue to yourself by cliking on the **assign-yourself** link in the menu to the right
- Create a branch for the issue by clicking on the green dropdown button and choosing **Create Branch**, and then clicking on the green **Create Branch** button. Note that the source branch must always be **develop**, so don't change it
- You can now checkout the branch in your dev environment using Git and start coding
- As soon as you push code to the Git repo, the CI/CD pipeline will build and deploy your changes. You can find the deployed version of your branch under [Operations -> Environments](https://git.chalmers.se/courses/eda397/2021/team-5-operator-app/-/environments) in the left menu
- Once you are done implementing the issue and pushed everything to the Git repo, check that the CI/CD pipeline successfully passes for your issue in the left menu [CI/CD -> Pipelines](https://git.chalmers.se/courses/eda397/2021/team-5-operator-app/-/pipelines)
- If the CI/CD pipeline passes, create a Merge Request for your issue. Note that the target branch for the merge branch should always be **develop**, so don't change it
- Now that you are done implementing the issue, someone else in the team needs to review and test it, so unassign yourself from the issue and move the issue to the **Review/Test** column 
- Done

### Reviewing an issue
Todo
