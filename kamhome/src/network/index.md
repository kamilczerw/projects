# <i class="fa-solid fa-network-wired"></i> Network

Let's start with the network, because it's the foundation for our kubernetes setup. It's better to decide how we our network to be constructed before we start configuring Kubernetes.

> ℹ️ **Note**
>
> You can skip this whole chapter if you just want to play with Kubernetes. It is ok to run your cluster on the same network as other devices. You might not even need to be able to access it from other devices on your LAN.

## Prerequirements

- You should have admin access to your router.
- Extra points if you run any of the open source OS on your router. That is not a requirement as long as you can configure `VLAN` network on your router.

## Router

I personally use [**OPNsense**](https://opnsense.org/), so all the configuration will be provided for `OPNsense`. If you use something else, you will need to figure out how to configura your router yourself[^routerOS].

If you can't configure `VLAN` on your router, you should check if it can be flashed and is capable of running `OPNsense`, or [OpenWrt](https://openwrt.org/) which can run on more types of hardware.

You can also buy a new router. There are plenty of articles about routers capable of running `OPNsense`. If you ask me, I would recommend one of these: <https://teklager.se/en/products/routers/>[^teklager].

## VLAN

You may be wondering what the hell is `VLAN` and why do I need it. Don't worry about it now, everything will be clarified in the [VLAN chapter](vlan.md). But let's have a look the network topology first.



[^routerOS]: If you do that, and you want to share how, please let me know so we can update the book.

[^teklager]: These guys are really passionate about routers, and they build very well made hardware.
