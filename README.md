# Socket.io Message Passing

Need A Socket.io Server Just To Send Messages Between Clients
**Without Setting Up A Server** 🧐? Use Our **FREE** Server Instead 🤑!

## Usage

To Use Our Server Add The Following Line To Your HTML File:

```html
<script src="https://msg-pass.up.railway.app/socket.io/socket.io.js"></script>
```

Now In A Separate JS File Add The Following Line:

```js
const socket = io("wss://msg-pass.up.railway.app");
```

Now Every Event You Emit Will Be **Forwarded To All Connected Clients**, Example:

```js
socket.emit("myEvent", data);

// 👇 That Broadcasts This To Everyone

socket.on("myEvent", data => {
    // ...
  }
);

// 🌏 You Can Also Listen To All Events

socket.onAny((eventName, data) => {
  // ...
});
```

**Note**: Every Emitted Event Is Logged On Our Server **_DONT SEND SENSITIVE INFORMATION_**
