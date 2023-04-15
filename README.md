<!-- TODO: Replace "server-addr" with the actual address. -->

**_(WORK IN PROGRESS NOTHING IS WORKING YET)_**

# Socket.io Message Passing

Need A Socket.io Server Just To Send Messages Between Clients
**Without Setting Up A Server** 🧐? Use Our **FREE** Server Instead 🤑!

## Usage

To Use Our Server Add The Following Line To Your HTML File:

```html
<script src="https://server-addr/socket.io/socket.io.js"></script>
```

Now In A Separate JS File Add The Following Line:

```js
const socket = io("wss://server-addr");
```

Now Every Event You Emit Will Be **Forwarded To All Connected Clients**, Example:

```js
socket.emit("myEvent", data);

// ☝️ That Broadcasts This To Everyone 👇

socket.on("myEvent", data => {
    // ...
  }
);

// You Can Also Listen To All Events 🌏

socket.onAny((eventName, data) => {
  // ...
});
```

**Note**: Every Emitted Event Is Logged On Our Server **_DONT SEND SENSITIVE INFORMATION_**
