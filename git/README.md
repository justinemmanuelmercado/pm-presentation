# How to use Git

[In-depth blog post on how to think about 'git'](https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html)
[Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## Basic use cases for git

Here are some basic use cases for git, and if everything works out in the project these are probably the only uses you'll have for git


### Prerequisite

Make sure you have git installed locally on your machine and the `git` command is executable from your command line

### Tracking, uploading, sharing code through github

1. Create the repository in your github account
2. Clone the repository locally by running `git clone <URL copied from GH>`
3. Make changes to your repository
4. Make sure git knows you changed some files by running `git add --all`.
   1. `--all` just means to add all changed, deleted and added files in the repository, the alternative is listing out the specific files you want `git` to know has changed
5. "Commit" the changes by running `git commit -m "<custom message>"`. You can also omit `-m` and git will open your default CLI text editor and have you enter your message there
   1. Think of committing as saving the exact state your project is in. When you commit your changes, you're essentially telling git that the state the project is in now is a state worth remembering. In the future you can rollback your changes to this point in time
6. When you commit you're saving your repository's current state locally. You can push your local changes to the remote repository by running `git push origin master`
   1. `git push` to where? the `origin`. At what branch? The `master` branch

### Pulling changes
1. If someone else `push`es changes to the remote repository, you're going to have to `pull` the changes. Pull the chages by running `git pull origin master`
2. If you encounter merge conflicts (someone edited the same file you recently edited) I recommend using VS Code to help resolve the conflicts.

### Branching out

<img src='./branching.png'></img>

You can create branches in git, if you plan to work on your "own thing" without having to disturb the "master" branch.

1. Create a new branch by running `git checkout -B <branch-name>`
2. Create the code changes for you new branch
3. To commit and push all your changes follow step 4 onwards from the [Tracking, uploading, sharing code through github](#tracking-uploading-sharing-code-through-github) section and replace `master` with `<branch-name>`

### Merging

1. You can manually merge branches by checking out the branch you want to merge the changes into, and then running `git merge <branch-to-merge>`
2. So if I were to run `git checkout master` and then `git merge branch-1`, that means the `master` branch gets the changes from `branch-1` branch
   1. Note, if you want to merge your local branch to a remote branch, you're going to have to run `git fetch origin` so that your local `git` gets updated with all the available remote branches and instead of `git merge <branch-name>` you're going to have to run `git merge origin/<branch-name>` to make sure git knows that the branch you're merging is going to come from the remote origin

### Pull requests
1. Pull requests are mostly on the actual UI itself and not really reliant on `git`, but basically PRs enable the team to interact with each other with regards to a branch  through a sort of forum interface
2. You can do this manually through the GH website and all it needs is a `branch` pushed to the remote repository with the changes you want to "merge" back to master