# rn-gzip
 Gzip compression and decompression

## Installation Guide

```
yarn add rn-gzip
or
npm install rn-gzip
```

## Usage
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