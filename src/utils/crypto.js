    // const CryptoJS = require('crypto-js');  //引用AES源码js
    import CryptoJS from 'crypto-js'
/**

    上面的代码中的 key 是密钥 ，iv 是密钥偏移量，这个一般是接口返回的，为了方便，我们这里就直接在这里定义了。
 */


    const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量  
    
    //解密方法
    function Decrypt(word) {
        console.log(word)
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        let dtaa = decryptedStr.toString()
        console.log(dtaa)
        return dtaa;
    }
    
    //加密方法
    function Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.ciphertext.toString().toUpperCase();
    }
    
    export default {
        Decrypt ,
        Encrypt
    }


