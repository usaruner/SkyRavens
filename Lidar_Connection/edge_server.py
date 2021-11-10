import socket

#Jetson Nano: 10.42.0.23
#Alex Laptop: 192.168.1.58
#defaultLocation = ("10.42.0.23", 80)
import socket
import os
import sys
import subprocess
import commands

HOST = '192.168.1.58'  # Standard loopback interface address (localhost)
PORT = 1028        # Port to listen on (non-privileged ports are > 1023)


#Jetson Nano: 10.42.0.23
#Alex Laptop: 192.168.1.58
#defaultLocation = ("10.42.0.23", 80)

HOST = '192.168.1.58'  # Standard loopback interface address (localhost)
PORT = 1028        # Port to listen on (non-privileged ports are > 1023)

class edge_server():
    def __init__(self, ip='127.0.0.1', port=6000):
        self.ip = ip
        self.port = port
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.sock.settimeout(120)
        self.sock.bind((ip,port))
        self.sock.listen(1)
        self.sub = commands.livox_python()
        print(self.sub.dir)
        stop = True
        try:
            while stop:
                # Wait for a connection
                print(stop)
                print(sys.stderr, 'waiting for a connection')
                connection, client_address = self.sock.accept()
                print("connected")
                while stop:
                    data = connection.recv(1024)
                    print(data.decode(),data.decode() == "exit")
                    print(stop)
                    if not data: 
                        stop = False
                        break
                    connection.sendall(data)
                    if data.decode() == "exit": 
                        self.sub.terminate_all()
                        stop = False
                        break
                    if data.decode() == "connect": 
                        self.sub.connect_lidar()
                        break
                    if data.decode() == "start": 
                        self.sub.start_record()
                        break
                connection.sendall("exit".encode())
            print("close")
        finally:
            self.sock.close()
            connection.close()
    def close():
        sock.close()
    

    