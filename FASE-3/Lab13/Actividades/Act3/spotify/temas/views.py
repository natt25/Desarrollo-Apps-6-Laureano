from django.shortcuts import render

# Create your views here.
from django.core import serializers
from .models import *
from .serializer import AlbumSerializer
from rest_framework import viewsets

class AlbumesView(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
