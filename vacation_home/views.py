from django.shortcuts import render
from .models import VacatoinHome
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializzer, VacationHomeSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import Http404
# Create your views here.

class VacationHomeList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    
    def get(self,request, format=None):
        vacation_homes = VacatoinHome.objects.all().order_by('-id')
        serializer = VacationHomeSerializer(vacation_homes, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):
        # request.query_params  ONLY FOR API TESTING
        # Change back to request.data for AJAX
        serializer = VacationHomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacationHomeDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return VacatoinHome.objects.get(pk=pk)
        except VacatoinHome.DoesNotExist:
            raise Http404
        
    def get(self, request,pk, format=None):
        vacation_home = self.get_object(pk)
        serializer = VacationHomeSerializer(vacation_home)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        vacation_home = self.get_object(pk)
        serializer = VacationHomeSerializer(vacation_home, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        vacation_home = self.get_object(pk)
        vacation_home.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    





# Function View

# @api_view(['GET', 'POST'])
# def vacation_home_list(request):
#     # List all vacation homes or create a new home
#     if request.method == "GET":
#         print("getting all homes")
#         vacation_homes = VacatoinHome.objects.all().order_by('-id')
#         serializer = VacationHomeSerializer(vacation_homes, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         print("Creating a new home!!!!!")   
#         # request.query_params  ONLY FOR API TESTING
#         # Change back to request.data for AJAX
#         print(request.data)
#         serializer = VacationHomeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET', 'PUT', 'DELETE'])
# def vacation_home_detail(request, pk):
#     print('right after the request')

#     # Retrieve, update or delete a code snippet.
#     try:
#         vacation_home = VacatoinHome.objects.get(pk=pk)
#     except VacatoinHome.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         print(request)    
#         serializer = VacationHomeSerializer(vacation_home)
#         return Response(serializer.data)
    
#     elif request.method == 'PUT':
#         # request.query_params  ONLY FOR API TESTING
#         # Change back to request.data for AJAX
#         serializer = VacationHomeSerializer(vacation_home, data=request.data)
#         print(request.data)
#         # print(request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         print("after the DELETE request")
#         vacation_home.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)



# def all_vacation_home_api(request):
#     data = list(VacatoinHome.objects.values())
#     return JsonResponse(data, safe=False)

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializzer
#     permission_classes = [permissions.IsAuthenticated]

# class VacationHomeViewSet(generics.ListCreateAPIView):
#     queryset = VacatoinHome.objects.all()
#     serializer_class = VacationHomeSerializer

# def create(request):
#     if request.method == "POST":
#         print("here is Django")
#         title = request.POST['title']
#         new_vacation_home = VacatoinHome(title=title)
#         new_vacation_home.save()
#         return HttpResponse()