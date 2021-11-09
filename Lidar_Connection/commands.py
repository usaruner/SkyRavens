#!/usr/bin/env python
# coding: utf-8

# In[3]:


import time
import subprocess 
from datetime import datetime
import os
import sys
# In[4]:


class livox_python:
	def __init__(self, dir = sys.path[0], cp1 = None, cp2 = None, cp3 = None, cp4 = None):
		self.dir = dir
		self.cp1 = cp1
		self.cp2 = cp2
		self.cp3 = cp3
		self.wind_path = "c:\\Windows\\System32\\cmd.exe"
    def connect_lidar(self):
        self.cp1 = subprocess.call('echo hello', shell=True)
    def start_record(self):
        self.cp2 = subprocess.call('echo hello', shell=True)
	def end_record(self):
		try:
			self.cp2.terminate()
		except:
			print("error")
		pass
	def disconnect_lidar(self):
		self.cp1.terminate()
	def terminate_all(self):
		try:
			self.cp1.terminate()
			self.cp2.terminate()
			self.cp3.terminate()
		except(AttributeError):
			pass


# In[ ]:




