import {Buffer} from 'buffer';
import pako from 'pako';

export default class Gzip {
  /**
   * Gzip json to string
   * @param {*} data : string
   */
  public static zip = (data: string) => {
    //here are the steps in order to convert binary string data to compressed base64
    //1. binary-encoded string
    //2. number-bytes array
    //3. deflate (compress)
    //4. compressed base64
    return Buffer.from(
      pako.deflate(Buffer.from(data, 'binary')),
      'binary',
    ).toString('base64');
  };

  /**
   * Gunzip base64 string to
   * @param {*} base64 : string
   * @returns unzip string
   */
  public static unzip = (base64: string) => {
    //here are the steps in order to convert base64 to final product
    //1. base64
    //2. number byte array (Uint8Array)
    //3. inflate (decompress)
    //4. convert to decompressed binary string
    //5. return
    return Buffer.from(
      pako.inflate(new Uint8Array(Buffer.from(base64, 'base64'))),
      'binary',
    ).toString('binary');
  };
}

export const Base64 = {
  btoa: (data: string) => Buffer.from(data, 'binary').toString('base64'),
  atob: (data: string) => Buffer.from(data, 'base64').toString('binary'),
};
