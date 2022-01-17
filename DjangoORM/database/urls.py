from django.urls import path

from . import views

urlpatterns = [
    path('fill_database', views.fill_database, name='fill_database'),
    path('fill_database_one', views.fill_database_one, name='fill_database_one'),
    path('get_jsons', views.get_jsons, name='get_jsons'),
    path('1_1_1', views.r_1_1_1, name='1_1_1'),
]
