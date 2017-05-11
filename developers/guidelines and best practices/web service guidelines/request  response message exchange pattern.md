## Request / Response Message Exchange Pattern

Web Services exposed by Genus utilize the "Request-response" pattern. This is one of the most common message exchange patterns (MEP) describing how two parts of a message passing system connect and communicate with each other.

In the "Request/response" pattern the service consumer invokes the operation with a request (input) message, and expects an answer through the response (output) message.

Although an operation can be defined without a request/ response message, one should always consider the potential of making the operation more diverse by providing these messages.