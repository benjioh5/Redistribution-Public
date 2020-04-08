import Caver from 'caver-js';
import ACCOUNT from './account';
import CONFIG from '../config';

const caver = new Caver(CONFIG.caverNetwork);
const account = caver.klay.accounts.createWithAccountKey(ACCOUNT.address, ACCOUNT.accountKey._key);
caver.klay.accounts.wallet.add(account);

export default caver;