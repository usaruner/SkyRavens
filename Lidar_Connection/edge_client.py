import socket
dir = '/home/odin/Test/Senior-Design/ws_livox'

class EdgeClient(Thread):
	def __init__(self, ip='localhost', port=1028, vehicle=None):
