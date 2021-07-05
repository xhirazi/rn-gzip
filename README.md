# rn-gzip
 Gzip compression and decompression

## Installation Guide

```
yarn add rn-gzip
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