from django.contrib import admin
from .models import VacatoinHome
# Register your models here.
class VacationHomeAdmin(admin.ModelAdmin):
    pass

admin.site.register(VacatoinHome,VacationHomeAdmin)