import {TextDecoder, TextEncoder} from 'text-decoding';
import pako from 'pako';

export default class Gzip {
  /**
   * Gzip json to string
   * @param {*} data : json
   */
  public static zip = (data : JSON) => {
    let stringData = JSON.stringify(data);

    let decoded = new TextEncoder('ascii').encode(stringData);

    let deflateData = pako.deflate(decoded);

    let binData = Array.from(deflateData);

    // Convert character-number array to binary string
    let binaryData = binData
      .map(function (x) {
        return String.fromCharCode(x);
      })
      .join('');

    // Encode base64 (convert binary to ascii)
    let strData = Base64.btoa(binaryData);

    return strData;
  };

  /**
   * Gunzip base64 string to
   * @param {*} base64 : string
   * @returns unzip string
   */
  public static unzip = (base64 : string) => {
    // Decode base64 (convert ascii to binary)
    let strData = Base64.atob(base64);

    // Convert binary string to character-number array
    let charData = strData.split('').map(function (x) {
      return x.charCodeAt(0);
    });

    let binData = new Uint8Array(charData);

    let data = pako.inflate(binData);

    return new TextDecoder('utf-8').decode(data);
  };
}

// Inspired by: https://github.com/davidchambers/Base64.js/blob/master/base64.js
const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const Base64 = {
  btoa: (input = '') => {
    let str = input;
    let output = '';

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = '='), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.",
        );
      }

      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};
