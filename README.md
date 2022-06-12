METACHAT - BALANCING THE PRIVACY/PERFORMANCE RATIO
						
CENTRALIZED - END-TO-END - TRUSTLESS - PSEUDO-ANONYMOUS - HEAVILY ENCRYPTED - REAL TIME
Messaging service

MAI 2022 - KRY






Privacy Problem:

It all boils down to the human nature of Capitalism, almost all of the instant messaging services and apps out there do not provide a true secure end-to-end encryption at least not by default or simply claim to do but when it comes to non-open-source projects we will never know the truth. 
But why? Is it technically too hard to provide privacy-respecting service? Otherwise what is the motive of these apps shifting towards unencrypted communication channels?
First, let’s understand the purpose of corporations and startups, it’s simply to make money. Maintaining a free truly secure end-to-end service is at the end of the road far from profitable, because chat apps traditionally profit from selling its user’s data to keep the project up and running.
“If you are not paying for the product, you are the product”. Like it or not this is how things work on an economical scale and it is a right for the project maintainer to receive a fair trade in exchange for his time and effort. But false claiming security is the sin.

Problem Resolution :

Notice that this paper will not focus on the economical aspect of maintaining this service but rather tackle the problem by trying to implement a trust-less centralized server in which trust is not the key to solve the problem like traditional centralization but rather math and cryptography which we all believe for its trustworthiness. 
First let’s start by asking a simple question:
“What would it take to achieve fully encrypted communication between two ends (Clients) with the presence of a middleman (Server) that we don’t have to trust?”. 
This paper is a proof of concept of the feasibility of maintaining a communication protocol in which the user does not send any bit of plain text unencrypted data.
We will be working with a set of cryptographic methods and algorithms instead of traditional logic based backend code to keep the middleman (Server) as clueless as possible.


Our recipe list :

Pseudo-anonymity:
  Each user will be associated with a random yet unique id obtained by hashing the username using SHA256 thus ensuring the ease of verification yet hard to reverse (To obtain the username from the identifier). This hash will be used to identify and distinguish users within the protocol.

End-to-end encryption:
	Each sensitive information (Message body..) is encrypted using asymmetric cryptography (AES256) before being sent. Then once received by the other end, a decryption process takes place resulting in obtaining the original unencrypted human readable data.

Tamper evident communication :
	Each packet sent between the ends(Clients) should be tamper evident, thus the server cannot change its content while forwarding it. In addition each client should be able to check whether the received packet is authentic and it came from the right origin. 

Cross-platform support :
The used cryptographic mechanisms must be publicly available and easy to implement
and these crypto algorithms must be synchronized with the same parameters to work correctly.

Data persistence :
For the sake of UX, the user should have access to his data across his devices and avoid data loss.




Data components :



In our scenario Alice wants to register and start an end-to-end encrypted channel.

On the client end :

Identifier:
This is a SHA256 Hash of the username, each client must keep its username private and never send it but only sends its hash thus the server will only have random bytes as the user identifier and never actually knows it’s real username. 
Username Exchange can happen when an encrypted end-to-end communication channel between the two parties is established.
Thus we achieve Pseudo-anonymity.

Public Key:
The public key serves as an identity for the user, you can share it wherever you wish. This key is used by the sender to encrypt messages thus only the private key associated with the public key’s owner can decrypt it. It is also used to verify signatures.

Private Key:
The private key must be kept secret and never shared, this key is used to sign packets and decrypt messages. 

On the server end:

Keypair database:
This database contains keypairs of the registered users. The private key is encrypted by the user during the registration process. The purpose of this component is to simplify the login process, more about this in the following sections.

The server uses a simple folder to store key pairs.

Primary database:
This database is responsible for the persistence of data: each message forwarded by the server will be also stored for future access. Users' availability status is also stored.


Database screenshot, encrypted message applet.




Secure Packet Transmission Standard :




User registration :


Calculate identifier:
	The client app hashes the given username with SHA256 algorithm.
Generate RSA Key Pair:
Now the client generates an RSA Key Pair.

Key size
2048
Format
HEADLESS PEM





Encrypt private key:
	Encrypt private key using the provided hashed (SHA256) password via AES256.


