# Redistribution-Public

## backend
```
npm install
npm run build
./restartDevServer.sh
```

## frontend
```
npm install
npx webpack --env.prod
```
public/index.html을 Kumiho에서 배포하면 됩니다.

## solidity
단순히 event를 발생시키기 위한 solidity로 Kumiho에서 배포하면 됩니다.

backend는 여기서 발생하는 이벤트로 winner를 뽑습니다. 그러므로 해당 contract의 주소를 backend/server의 config.js에 설정해주어야 합니다.

## 주의사항
- backend/server의 config.js를 수정하여야 합니다.
- backend/server/caver/account.js를 수정하여야 합니다.
- contract 배포시 vote함수를 /redistribution/vote로 설정해야 합니다.
- contract 배포시 Vote이벤트를 /redistribution/event/Vote로 설정해야 합니다.
- frontend/src/views/LastWinners.js의 'http://kumiho.org:3333/winners'를 backend에 알맞게 수정해주셔야 합니다.
- frontend/src의 모든 코드에서 kumiho.klay/redistribution/vote를 알맞게 수정해주셔야 합니다.
- frontend/src의 모든 코드에서 kumiho.klay/redistribution/event/Vote를 알맞게 수정해주셔야 합니다.
