from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets

from .models import Hobby
from .serializers import HobbySerializer

# Create your views here.

def home(request):
    return HttpResponse("hello, world!")

class HobbyViewSet(viewsets.ModelViewSet):
    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer