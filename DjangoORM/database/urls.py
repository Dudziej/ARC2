from django.urls import path

from . import views

urlpatterns = [
    path('fill_database', views.fill_database, name='fill_database'),
    path('get_jsons', views.get_jsons, name='get_jsons'),
]
