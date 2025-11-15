# My Personal Portfolio / Website

<a href="https://joshwilkins2013.github.io/">joshwilkins2013.github.io</a>

## Hosting Locally

The website can be hosted locally by following the instructions [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll]).
Once everything is installed correctly, open git bash in the directory and run

    bundle exec jekyll serve

The site will then be hosted at http://localhost:4000

## AWS Sync

AWS images can be synced to a local directory using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions).
Must set up credentials using aws configure and then run the sync (pull or push sync):

    aws configure    
    aws s3 sync s3://joshwilkins2013 [local path] --delete  // pull
    aws s3 sync [local path] s3://joshwilkins2013 --delete  // push
