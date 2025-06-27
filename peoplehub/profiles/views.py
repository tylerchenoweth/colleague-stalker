from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets

from .models import Colleague, Hobby
from .serializers import ColleagueSerializer, HobbySerializer

# Create your views here.

def home(request):
    return HttpResponse("hello, world!")


class ColleagueViewSet(viewsets.ModelViewSet):
    queryset = Colleague.objects.all()
    serializer_class = ColleagueSerializer

class HobbyViewSet(viewsets.ModelViewSet):
    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer