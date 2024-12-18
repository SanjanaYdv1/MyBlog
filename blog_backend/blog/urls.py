from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CategoryViewSet

router = DefaultRouter()
router.register('posts', PostViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
