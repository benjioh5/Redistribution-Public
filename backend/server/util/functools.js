import caver from "../caver";

export function returnsToList(returns) {
    const result = []
    for (let i = 0; i < returns.__length__; i++) result.push(returns[i]);
    return result;
}

export function toHex32(number) {
    const rawHex = parseInt(number).toString(16);
    const ansHex = `0x${new Array(8 - rawHex.length).fill(0).join('')}${rawHex}`.toLowerCase();
    return ansHex;
}

export async function send(to, amount, unit) {
    return await caver.klay.sendTransaction({
        type: 'VALUE_TRANSFER',
        from: caver.klay.accounts.wallet[0].address,
        to: to,
        value: caver.utils.toPeb(amount, unit),
        gas: new caver.utils.BN(1500000)
    });
}