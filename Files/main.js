let a = 'a'
while (a) {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
}
console.log('[CODE] https://discord.gift/' + code + "\n");
code += '\n'
}
