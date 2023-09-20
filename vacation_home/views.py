from django.shortcuts import render
from .models import VacatoinHome
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializzer, VacationHomeSerializer
from rest_framework import generics
# Create your views here.

# def vacation_home_index(request):
    
#     return render(request, "airbnb_clone/templates/base.html")


def all_vacation_home_api(request):
    data = list(VacatoinHome.objects.values())
    return JsonResponse(data, safe=False)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializzer
    permission_classes = [permissions.IsAuthenticated]

class VacationHomeViewSet(generics.ListCreateAPIView):
    queryset = VacatoinHome.objects.all()
    serializer_class = VacationHomeSerializer
        