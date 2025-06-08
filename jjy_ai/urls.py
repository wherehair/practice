print("✅ ai.urls 로드됨")
from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict),
]