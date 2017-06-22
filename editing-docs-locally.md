# Contribute by editing articles locally on your computer

## Install Git for revision control
1. Download and install Git from [here](https://git-scm.com/downloads). Optional: Install a Git GUI Client. Click [here](https://git-scm.com/downloads/guis) for a list of GUI Clients.
2. In Windows 10, we recommend adding the Git installation folder (_c:\program files\git\cmd_) to your PATH variable by following the steps [here](#how-to-add-a-folder-to-your-windows-10-path-environment-variable).

## GitHub
1. If you do not have a GitHub user account, create one at [GitHub](https://www.github.com).
2. If you are a Genus employee, ask the docs editors group to add you to the Genus organization on GitHub. This will allow you to commit directly (to the master branch).

## DocFX
1. DocFX requires Microsoft Build Tools 2015 (not 2017), so download and install from [here](https://www.microsoft.com/en-us/download/details.aspx?id=48159).
2. Download "docfx.zip" from [here](https://github.com/dotnet/docfx/releases).
3. Unzip to d:\ (or c:\ or whereever you prefer to install it), which will create the d:\DocFX folder (NB! Make sure you do not create d:\DocFX\DocFX…)
4. We recommend adding d:\DocFX (or your choice of path) to your Windows PATH environment variable following the steps [here](#how-to-add-a-folder-to-your-windows-10-path-environment-variable).

## Markdown editor
1. Install your favorite editor for markdown files, like [Visual Studio Code](https://code.visualstudio.com/download).
2. Associate md files to your favorite editor.

## Connect your local repos to GitHub "Genus docs" repos.
1. Create a docs project folder on your computer, like "d:\Git\Docs" or similar.
2. Open a cmd shell at d:\git\docs.
3. Run the command "git init" to create a local repos on your computer. This should produce something like "Initialized empty Git repository in d:/git/docs/.git/".
4. Run the command "git remote add origin https://github.com/GenusAS/docs.git" to connect your local repos to the github repos.

## Using Git
1. To fetch repos and/or latest changes from the Genus docs GitHub.com to your computer

   a. Open a cmd shell at d:\git\docs.
   
   b. Run **git pull origin master** (in command line Git, origin is always the remote repos, while master is the local repos).
   
2. To do a change locally (like editing an index.md article) and push it to GitHub

   a. Edit the file using your favorite Markdown editor
   
   b. In the cmd shell, run "git add index.md"
   
   c. Then "git commit -m "I changed something"
   
   d. Then "git push -u origin master"

## Build and preview the documentation on your computer
1. Open a cmd shell at d:\git\docs and type "docfx --serve"
2. Open your browser on url http://localhost:8080 to view the documentation.
3. Later, use Ctrl+C i in your cmd shell to exit "docfx --serve".

## Use movearticles.js for moving articles updating all references in all articles
1. Download and install Node.js on your computer from [nodejs.org](https://nodejs.org/).
2. Open a command line window, and go to d:\git\docs (or whatever you chose above as your docs project folder).
3. In the command line window, run "npm install fs-extra". This will install a library required by movearticles.js.
4. If you have used Git to pull from the Genus docs repos above, you will find a file named movearticles.js in your docs project folder.
5. You are now ready to use movearticles.js in your command line window. Examples:

   a. Move an article from a folder to another.
      ```
      node movearticles.js developers/security-and-privacy.md developers/defining-the-application-model
      ```
   b. Move an article from a folder to another, including renaming the article. In this case the article is moved to the docs project folder.
      ```
      node movearticles.js developers/defining-the-application-model/glossary.md terminology.md
      ```
   c. Renaming an article without moving it.
      ```
      node movearticles.js developers/defining-the-application-model.md developers/defining-the-app-model.md
      ```
   d. Move all articles in a folder (including subfolders).
      ```
      node movearticles.js developers/security-and-privacy developers/define-an-app-model/security
      ```
If you open movearticles.js you will find further comments and a TODO list of issues and feature requests. Note that the code is written specifically for Genus AS (www.genus.no) style of use of DocFX markdown files, and may not suit other usage. For instance, the code assumes media files are in a local 'media' folder for each article. But feel free to contribute.

---

### How to add a folder to your Windows 10 PATH environment variable
1. In the Windows start menu, search for and open "View advanced system settings".
2. In the Advanced tab, click the "Environment variables…" button in the lower right corner.
3. In the "User variables" or the "System variables" section (your choice), edit the path variable and add a path to your folder.
