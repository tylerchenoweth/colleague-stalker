from django.urls import path, include

from . import views

from rest_framework.routers import DefaultRouter
from .views import HobbyViewSet

from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('hobbies', HobbyViewSet)

urlpatterns = [
    path("", views.home, name="home"),
    path("api/", include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)