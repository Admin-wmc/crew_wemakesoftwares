

from django.urls import path,include
from . import views
# urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
urlpatterns = [
    
    path('register_api/', views.RegisterView.as_view(), name='register'),
    path('login_api/', views.LoginView.as_view(), name='login'),
    path('register/', views.Register_form, name = "register"),
    path('login/',views.login_form,name='login'),
 
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
