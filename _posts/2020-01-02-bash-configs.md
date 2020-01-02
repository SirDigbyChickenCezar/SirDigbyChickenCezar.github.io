---
layout: post
title: "Bash configs"
---

I keep having to re-write my bash configs and aliases every time I spin up a new instance of WSL, or start work 
on a new machine. So I'm going to try and collate configs that are common across machines that I use pretty 
much every time. 

Top stuff. 

Aliases file: 
```bash
# config files
alias aliases="vim ~/.bash_aliases"
alias bashrc="vim ~/.bashrc"
alias loadbash="source ~/.bashrc"

# directories
alias home="cd ~/"

# python
alias python="python3"
alias pip="pip3"

# programs
alias vscode="code"
```

bash_rc config: 
```bash
# Change the title of a console window
title() {
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}$1\a\]\[\033[01;34m\]\w\[\033[00m\]> "
}
```
