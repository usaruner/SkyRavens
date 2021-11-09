import socket

#Jetson Nano: 10.42.0.23
#Alex Laptop: 192.168.1.58
#defaultLocation = ("10.42.0.23", 80)

HOST = '192.168.1.58'  # Standard loopback interface address (localhost)
PORT = 1028        # Port to listen on (non-privileged ports are > 1023)

class edge_server():
    def __init__(self, ip='localhost', port=1028):
        self.ip = ip
        self.port = port

        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.bind((ip,port))
        sock.listen(1)

        while True:
            # Wait for a connection
            print >> sys.stderr, 'waiting for a connection'
            connection, client_address = sock.accept()
    

    