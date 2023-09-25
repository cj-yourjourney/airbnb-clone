from django.urls import path,include
from . import views
from rest_framework import routers
from . import views
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'vacation-homes', views.UserViewSet)




urlpatterns = [
    
    # Template URLs
    path("vacation-homes/", TemplateView.as_view(template_name="vacation_homes/vacation_homes.html")),
    path('create-vacation-home/', TemplateView.as_view(template_name='vacation_homes/new_vacation_home.html')),
    path('vacation-homes/detail/<int:id>/', TemplateView.as_view(template_name='vacation_homes/vacation_home_detail.html')),
    path('vacation-homes/detail/<int:id>/edit/', TemplateView.as_view(template_name='vacation_homes/vacation_home_edit.html')),
    
    # API  URLs
    path('vacation-homes-api/',views.VacationHomeList.as_view()),
    path('vacation-homes-api/<int:pk>/',views.VacationHomeDetail.as_view()),

]


