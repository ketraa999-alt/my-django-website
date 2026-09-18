"""
URL configuration for gymmanageih project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main import views
from .views import user_login_view
from .views import user_register_view





urlpatterns = [
    path('admin/', admin.site.urls),
    # path('aboutuS1/', views.aboutus),
    # path('aboutuS1/<int:aboutid>', views.aboutusDetails),   
    # path('aboutuS1/<slug:aboutany>', views.aboutusDetails1), 
    # path('aboutuS1/<str:aboutname>', views.aboutusDetails2), 
    path('', views.user_home), 
    # path('user_login/', views.user_login),
    # path('user_register/', views.user_register),
    path('user_contact/', views.user_contact),
    path('user_dashboard/', views.user_dashboard_view, name = "dashboard"),
   

# user_register_view

# login
    path('user_login/', user_login_view, name = "login" ),
    path('user_register/', user_register_view, name = "register" ),
    #  register
    
    path('user_about/', views.user_about),
 



#  trainer
    path('trainer_dashboard/', views.trainer_dashboard),
    path('trainer_login/', views.trainer_login),
    path('trainer_register/',views.trainer_register),
    # fun(parametername )=<dt:urldetails name>

#admin
 

    path('admin_register/',views.admin_register),
    path('admin_login/', views. admin_login),
    path('admin_dashboard/',views.admin_dashboard),
]


# path ('urlname/',views.function in views.py created)
# path(urlname/<dt:uelname1 ,or urlname2,or urlname3.....>', views.function ),   
