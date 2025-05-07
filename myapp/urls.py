from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_view),
    path('', views.hello_view)
]