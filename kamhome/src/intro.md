# Intro

Hello reader, if you are not me, I hope you can find something valuable in here. I have decided to put all of the steps I took to setup Kubernetes cluster at my home in a form of markdown book.
If I ever need to re-do it, I can go back and hopefully save some time while figuring out how things should be setup.

Keep in mind: I'm no expert in that field and this is my attempt to get more familiar with networking and Kubernetes.
`If you find anything I do completely wrong` <- `TODO: fix this sentence`, please let me know.

I would also like to mention, this whole book is about my personal setup, so some things might not be relevant to you.
In each chapter I will include all the details about any hardware and software I use.

## Goals

- Have a separate network (Homecloud) for running Kubernetes and other internal application like Home Assistant.
- Only selected devices on the main LAN should be able to access Homecloud.
- Have an internal DNS server for local applications.
- Expose some applications on my public IP.
