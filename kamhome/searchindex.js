Object.assign(window.search, {"doc_urls":["intro.html#intro","intro.html#goals","network/index.html#network","network/index.html#todo","network/firewall.html#firewall","network/firewall.html#notes","configuration/zfs.html#zfs","about-me.html#about-me"],"index":{"documentStore":{"docInfo":{"0":{"body":129,"breadcrumbs":2,"title":1},"1":{"body":24,"breadcrumbs":2,"title":1},"2":{"body":27,"breadcrumbs":2,"title":1},"3":{"body":8,"breadcrumbs":2,"title":1},"4":{"body":5,"breadcrumbs":3,"title":1},"5":{"body":10,"breadcrumbs":3,"title":1},"6":{"body":7,"breadcrumbs":4,"title":1},"7":{"body":21,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"Hello reader. Have you ever wondered how to run a Kubernetes cluster on your own home network? If the answer is yes, look no further. If on the other hand, you have not considered running your own K8S cluster, after reading all the good reasons, you will order Intel NUC to try it out. I hope you can find something valuable here. I have decided to document all of the steps in a form of a markdown book. If I ever need to redo it, I can go back and hopefully save some time while figuring out how things should be set up. You may also wonder, why would anyone want to run their own Kubernetes cluster. Well, there are a few reasons: It's much easier to run your applications that way (as opposed to Vagrant or Proxmox ). Nowadays the whole internet runs on Docker and you can find any container you need. Less manual steps (once the cluster is up and running). There are tools for provisioning Kubernetes that are as easy to use as Docker itself. Helm is one of them. It's a lot of fun! Keep in mind: I'm no expert in that field and this is my attempt to get more familiar with networking and Kubernetes. If you find anything I do completely wrong <- `TODO: fix this sentence, please let me know. I would also like to mention, this whole book is about my personal setup, so some things might not be relevant to you. In each chapter, I will try to include all the details about any hardware or software I use which is relevant to that chapter.","breadcrumbs":"Intro » Intro","id":"0","title":"Intro"},"1":{"body":"Have a separate network (Homecloud) for running Kubernetes and other internal applications like Home Assistant. Only selected devices on the main LAN should be able to access Homecloud. Have an internal DNS server for local applications. Expose some applications on my public IP.","breadcrumbs":"Intro » Goals","id":"1","title":"Goals"},"2":{"body":"Let's start with the network, because it's the foundation for ther rest of what we are going to do. ℹ️ Note You can skip this whole chapter if you just want to play with Kubernetes. It is ok to run your server on the same network as other devices. Bla bla bla, Opnsense , bla bla.","breadcrumbs":"Network » Network","id":"2","title":"Network"},"3":{"body":"Explain what is the difference between LAN vs VLAN vs XVLAN","breadcrumbs":"Network » TODO","id":"3","title":"TODO"},"4":{"body":"Warning Fill this section with useful information.","breadcrumbs":"Network » Firewall » Firewall","id":"4","title":"Firewall"},"5":{"body":"To be able to access forwarded port from local LAN, the Outbound NAT is required. image https://forum.opnsense.org/index.php?topic=22890.0","breadcrumbs":"Network » Firewall » Notes","id":"5","title":"Notes"},"6":{"body":"⚠️ TODO Add something about how to configure LVM https://linuxhandbook.com/lvm-guide/","breadcrumbs":"Server » Configuration » ZFS » ZFS","id":"6","title":"ZFS"},"7":{"body":"My name is Kamil, bla bla bla, Software, bla. 🦀 Rust bla bla. :leopard: ⚠️ Warning Warning test, hmm. fn bla(); ℹ️ Note Note test, hmm.","breadcrumbs":"About me » About me","id":"7","title":"About me"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"a":{"df":2,"docs":{"2":{"tf":2.23606797749979},"7":{"tf":2.6457513110645907}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":2.0}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"p":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"=":{"2":{"2":{"8":{"9":{"0":{".":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"'":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"'":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"k":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"w":{"a":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.0},"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"u":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"x":{"df":0,"docs":{},"v":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"z":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"l":{"a":{"df":2,"docs":{"2":{"tf":2.23606797749979},"7":{"tf":2.6457513110645907}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":2.0}}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"f":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"x":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"p":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"=":{"2":{"2":{"8":{"9":{"0":{".":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"'":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"'":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"k":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":2.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"c":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":6,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":2.23606797749979},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}},"w":{"a":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.0},"2":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"6":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"u":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}}},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"x":{"df":0,"docs":{},"v":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"z":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"title":{"root":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});