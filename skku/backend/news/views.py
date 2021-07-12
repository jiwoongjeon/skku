from django.shortcuts import render, get_object_or_404, redirect
from .models import News
from django.utils import timezone
from rest_framework import generics

# Create your views here.


from .serializers import NewsSerializer

class ListNews(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class DetailNews(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
