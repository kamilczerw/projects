build-kamhome:
	mdbook build kamhome --dest-dir "${PWD}/public/kamhome"

build: build-kamhome
