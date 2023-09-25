from django.contrib.auth.models import User
from rest_framework import serializers
from .models import VacatoinHome

class UserSerializzer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class VacationHomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = VacatoinHome
        fields = ['title', 'id']        