import socket
dir = '/home/odin/Test/Senior-Design/ws_livox'

class EdgeClient():
    def __init__(self, ip='127.0.0.1', port=6000, vehicle=None):
        self.ip = ip
        self.port = port
        self.FRAME_SIZE = 16
        self.send_frame_size = True
        server_address = (ip, port)
        # Create a TCP/IP socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # Connect the socket to the port where the server is listening
        server_address = (ip, port)
        print(sys.stderr, 'connecting to %s port %s' % server_address)
        sock.connect(server_address)
        try:
            print("connected")
            data = b""
            while(data.decode() != "exit"):
                sock.sendall(input().encode())
                data = sock.recv(1024)
        finally:
            sock.close()
        print('Received', repr(data))
