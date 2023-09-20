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
    path("api-vacation-homes/", views.VacationHomeViewSet.as_view()),
    path("vacation-homes/", TemplateView.as_view(template_name="base.html"))
    # path('vacations-homes/', views.all_vacation_home_api, name="all-vacation-house-api"),
    # path('vacation-homes/',views.vacation_home_index,name="vacation-home-index"),
    # path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

# urlpatterns = format_suffix_patterns(urlpatterns)
