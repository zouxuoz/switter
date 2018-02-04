# Switter
Chat with UDP bots.

## Installing dependecies

```
  yarn
```

## switter-service
The service receives messages from bots and sends it to all connected clients over WebSocket.

Command for start service:
```
  yarn start:service
```

## switter-bot
Bot generates and sends messages to the service. You can run more than 1 bot, as much as you want.

Command for start bot:
```
  yarn start:bot
```

## switter-client
The client connects to service and shows all incoming messages.

Command for start client:
```
  yarn start:client
```
