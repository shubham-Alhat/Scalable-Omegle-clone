# Learnings from this project

_this is small learnings / notes to remember or revised some concepts in future._

---

### Nodejs process & exit code

Nodejs bydefault runs on single cpu core. we can run multiple instances of same nodejs on avaialble cpu cores on our machine using PM2. this is called **vertical scaling**.

`process.exit(0)` this exit code represents success. meaning shutting down correctly without any error.

`process.exit(1)` this exit code represents failure/error in nodejs proccess. meaning shutting down nodejs because of failure.

---

### Understanding TCP, UDP, Websocket & WebRTC protocols

> [!Note]  
> **Even though `TCP`, `UDP`, `Websockets` & `WebRTC` are all communication protocols, they operate at different layers of the networking stack and serve different purposes**  
> TCP & UDP is on Transport layer on networking stack.
> Websockets & WebRTC is on Application layer on networking stack.

#### TCP & UDP

**TCP (Transmission Control Protocol)** is protocol which optimized for **Data reliability** over speed. it has connection setup flow to set connection with server. while transmiting data, it checks for errors and data lost, if there is any error or data lost, it retries and send the lost data packets to destination. guarantee order and data acknowledgments. **Best for: Applications where exact data integrity matters more than speed. eg: such as web browsing (HTTP/HTTPS), file transfers (FTP), and emails.**

**UDP (User Datagram Protocol)** is protocol optimized for **speed** over data reliability. it doesn't have a proper setup flow / rules to established a connection to server. it is Connectionless (sends data immediately without a handshake or prior setup). **it has low/best efforts. it does not retransmit lost data packets to destination.** Does not guarantee order and data acknowledgments. **Best for: Speed-critical applications where dropping a packet is better than waiting for a resend. eg: such as live video streaming, voice calls, and online gaming.**

#### Websockets & WebRTC
