
# New Computer Set up for a Mac

**Install:**

  - Text Editor: [Atom](https://atom.io/)
  - [Zoom](https://zoom.us/)
  - [Slack - Desktop version highly recommended](https://slack.com/)
  - [node.js](https://nodejs.org/en/) - version LTS or Current is fine
    - NPM comes with `node.js` installation
  - git should be preinstalled but may need to run x-code to accept license terms
    - [Configure git](Initial-Git-Setup)
    - [Setting up SSH Key](https://help.github.com/articles/connecting-to-github-with-ssh/) - optional can use `https` instead
    - Get the class repo by using `git clone url-to-class-repo`
      - More info in instructor notes in Week 1 Day 2
  - [Homebrew](https://brew.sh/)
    - Use Homebrew to Install Mongo (see details below)
  - Install `nodemon`: `npm install -g nodemon` (might need to do `sudo npm install -g nodemon` and enter your computer password when prompted)
  - [Postman](https://www.getpostman.com/)
  - Ruby/Rails/Postgres Installation info will be detailed in the first day of Unit 4 instructor notes


---


# Install Mongo

---

Created: Matt Huntington <br>
Updated: Thom Page <br>

---

## Install with Homebrew

*Check if homebrew is installed: `brew`

	* If not, install [Homebrew](https://brew.sh/)
	* If brew is already installed `brew upgrade`.

***Install Mongodb on Mac OS X:** `brew install mongodb`

## Set data location

In terminal type `mongod` to run the mongo server.

You will probably get an error saying
> "Data directory `/data/db` not found., terminating"
	- if so, you will need to make the directories in your **root** directory as follows (do these commands anywhere):

*Create data directories (at the root level)
	* `sudo mkdir /data`
	* `sudo mkdir /data/db`

*Next, set root permissions
	* `sudo chmod -R 777 /data`

Run the mongo server again: `mongod`.

Should see: "waiting for connections on port 27017"

## Open and close mongo

*Open another terminal tab `cmd + T` and type `mongo`

*To quit `mongo`, type `exit` or `quit()`.  

*To quit `mongod` hit `control+c`

Finished!


## Errors

If at some point you get an error with `mongod`:

1.`ps -A | grep mongod`
1. find the line that just mentions `mongod`, but not `grep`
1. take note of the number on the left
1. type `kill 1774` or whatever that number is.  Try `mongod` again.
1. If that doesn't work, go to `/data/db` and `rm mongod.lock`.  Try `mongod` again.


---


# Install Ruby and Rails

---

## &#x26A0; Uninstall rvm

If you have RVM already set up you will need to decide whether you want to continue using RVM or if you'd prefer to switch to rbenv. We won't be supporting RVM.

To check if you have RVM installed simply run the command `rvm`. If it is not intalled you'll see the message `command not found: rvm`

To uninstall follow these instructions: [uninstall rvm](https://richonrails.com/articles/uninstalling-rvm)

RVM and RBENV do NOT work well together, so having both installed will cause _weirdness_ .

## Homebrew

1. See if brew is already installed (type `brew` and hit enter to see if it is). You should get a message about example usage, etc.

1. If you haven't install Homebrew, do so by going to http://brew.sh/
	- copy and paste this into the terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and hit return
	

1. If brew is installed, run `brew upgrade` to upgrade to the latest version of homebrew
	* Might take a while, might upgrade stuff for postgres, node, heroku, etc. 
1. Run `brew update` to update the list of installable programs by homebrew
	* Might say Already up-to-date

## Install rbenv

rbenv is a version manager for Ruby. We don't want to use our system Ruby because we can mess with it. Instead, let's get an up to date version of Ruby that is safe to mess with.

0. Check if rbenv already installed: `rbenv`
1. If already exists, upgrade with `brew upgrade rbenv ruby-build`
 
Otherwise

1. `$ brew install rbenv ruby-build`

## View Possible Ruby Versions
**See which versions of Ruby you can download**

1. `$ rbenv install --list`

There will be stuff like `rbx` and `jruby`, we are only interested in the ones that start with numbers.

## Install Latest Ruby
**Install the latest version of Ruby**

Get the version of Ruby before `-dev`

1. `$ rbenv install 2.4.3` 

* There is no way within rbenv just to get the latest stable version
* You **must** install Ruby 2.2.2 or greater for Rails 5.
* Install might take a long time -- Terminal could just look like it's hanging

> ruby-build: use readline from homebrew
> 
> Installed ruby-2.4.3 to /usr/local/var/rbenv/versions/2.4.3

## View Installed Versions of Ruby

1. Run `rbenv versions`

![](https://i.imgur.com/k4F34DP.png)

* system is your system Ruby
* asterisk is next to the version that you are using

## View Currently Running Version of Ruby

1. Run `rbenv version`

## Switch RBENV to a different Version of Ruby

1. `$ rbenv global 2.4.3`
	* Check with `rbenv versions`. Asterisk should be next to 2.4.3
1. `$ rbenv rehash` to tell computer we've switch versions of ruby
	* Confirm switch again with `rbenv versions` `* 2.4.3`


**CLOSE AND RESTART TERMINAL**

## Update Environment to use new Ruby

1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.4.3p111` or somesuch

IF NOT

1. `$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile` 
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. `$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile` 
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.4.3p301` or somesuch

## Install a gem

Gems are like NPM packages for Ruby, but they're installed globally, as opposed to multiple times for each application that you build

1. List gems with `gem list`
1. Run `gem install pry` to install a gem called pry.  It's a ruby REPL command
1. Run `rbenv rehash` to tell computer we've installed a new gem
1. List gems with `gem list` look for `pry`
1. Rub `pry` to start pry command
1. Inside pry type `2 + 2`
1. If that works, type quit

Note: Might need to update the gem manager with `gem update --system`


## Install Rails 5.2 beta

1. Run `gem install rails --pre` to install the rails commands
2. `rbenv rehash`
3. `rails -v`

Note: if Rails already installed, might need to run `bundle update rails`

## Test Rails
3. Run `rails new blog` to create a new app
4. `cd blog`
5. Run `rails s` to start the server
6. Go to `http://localhost:3000`

---


# Install Postres ( and test with Rails)

---

## Postgres.app
Install [Postgres.app](https://postgresapp.com) and run it. 

## Install the `pg` gem

From the terminal, install the `pg` gem. This is a little irregular for a gem install. 

- `sudo ARCHFLAGS="-arch x86_64" gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/9.6/bin/pg_config`

# GNU/Linux Postgres Install Instructions

You'll need to use your package manager (`apt` or similar) to install postgres. This might be something like `apt-get install postgresql postgresql-contrib`. 

Your distribution will vary. Untested [instructions for Ubuntu 14.x here](https://www.godaddy.com/garage/how-to-install-postgresql-on-ubuntu-14-04/).

Make sure you do the appropriate actions in your distro to make Postgres start on boot time. 

At the end, do `gem install pg`, which will hopefully just work out of the box. 

# BOTH: Test Rails with Postgres
You'll learn later what all these commands do. For the moment, don't worry about them and just see if there's an error. 

3. Run `rails new postapp --database=postgresql --api --skip-git` to create a new app that uses Postgres and skips git init.
4. `cd postapp`
4. `rails g scaffold Post title body:text`
5 `rake db:create db:migrate`
5. Run `rails s` to start the server, browse to [http://localhost:3000/posts](http://localhost:3000/posts), and you should seen an empty array on screen. 
5. Alternately run `curl http://localhost:3000/posts`, which will also return `[]`

### Additional resources

- [Installing postgres with brew](http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/)
- [Another install of postgres with brew](https://gist.github.com/sgnl/609557ebacd3378f3b72)
- [Installing rbenv, ruby, rails, and postgres](https://gorails.com/setup/osx/10.12-sierra)
