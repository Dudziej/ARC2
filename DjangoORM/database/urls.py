from django.urls import path

from . import views

urlpatterns = [
    path('fill_database', views.fill_database, name='fill_database'),
]
