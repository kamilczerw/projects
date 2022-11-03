# <i class="fa-solid fa-meteor"></i> Intro

Hello reader.

Have you ever wondered how to run a Kubernetes cluster on your own home network? If the answer is yes, look no further.
If on the other hand, you have not considered running your own K8S cluster, after reading all the good reasons, you will hopefully order an Intel NUC to try it out yourself.


I have decided to document all of the steps I took to have my own K8S cluster, in a form of a markdown book.
If I ever need to redo it, I can go back and hopefully save some time while figuring out how things should be set up.


You may also wonder, why would anyone want to run their own Kubernetes cluster. Well, there are a few reasons:
- It's much easier to run your applications that way (as opposed to [Vagrant](https://www.vagrantup.com/) or [Proxmox](https://www.proxmox.com/en/)). Nowadays the whole internet runs on Docker and you can find any container you need.
- Less manual steps (once the cluster is up and running). There are tools for provisioning Kubernetes that are as easy to use as Docker itself. [Helm](https://helm.sh/) is one of them.
- It's a lot of fun!

> ℹ️  **Note**
>
> **Keep in mind**, I'm no expert in that field and this is my attempt to get more familiar with networking and Kubernetes.
> `If you find anything I do completely wrong` <- `TODO: fix this sentence, please let me know`.

I would also like to mention, this whole book is about my personal set up, so some things might not be relevant to you.
In each chapter, I will try to include all the details about any hardware or software I use which is relevant to that chapter.

## Goals

There are few things I want to achieve.

- Have a separate network (Homecloud) for running Kubernetes and other internal applications like Home Assistant.
- Only selected devices on the main LAN should be able to access Homecloud.
- Have an internal DNS server for local applications.
- Expose some applications on my routers public IP.

I will touch on each of the points in further chapters, and try to make a point of why I want it that way. I will also explain how you can buid it in another way.
