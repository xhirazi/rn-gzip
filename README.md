# rn-gzip
 (binary) Gzip compression and decompression

## Why I forked

I initially tried to use this package to compress binary data. I spent days troubleshooting encoding bugs until I finally discovered that rn-gzip uses `String.fromCharCode`, which only encodes in ASCII or something, and so my precious binary data was getting destroyed in compression/decompression.

I decided to fork and public this version of rn-gzip so that others can use this library to compress and decompress data, even if it is in binary.

This package uses the "buffer" package instead of the original "text-decoding" one.

## Installation Guide

```
yarn add rn-gzip
or
npm install rn-gzip
```

## Usage
Usage is the exact same as the original package...

```javascript
import Gzip from 'rn-gzip';

let data="Hi I am Sherazi"
// compression
let compressed = Gzip.zip(data);

console.log(compressed); // eJzzyFTwVEjMVQjOSC1KrMoEACQGBP8=

// decompression
let decompressed = Gzip.unzip(compressed); 

console.log(decompressed); // Hi I am Sherazi

```

## Base64 
```javascript
import { Base64 } from 'rn-gzip';

let string="Best tourist places in Pakistan";

let base64 = Base64.btoa(string); // QmVzdCB0b3VyaXN0IHBsYWNlcyBpbiBQYWtpc3Rhbg==

let normal = Base64.atob(base64); // Best tourist places in Pakistan

```