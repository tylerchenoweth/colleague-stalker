from django.urls import path, include

from . import views

from rest_framework.routers import DefaultRouter
from .views import ColleagueViewSet, HobbyViewSet



router = DefaultRouter()
router.register('hobbies', HobbyViewSet)
router.register('coleagues', ColleagueViewSet)

urlpatterns = [
    path("", views.home, name="home"),
    path("api/", include(router.urls))
] 

