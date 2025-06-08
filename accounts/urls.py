print("✅ accounts.urls 로드됨")
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup_view), 
    path('login/', views.login_view),
    path('logout/', views.logout_view),
    path('protected/', views.protected_view),
]