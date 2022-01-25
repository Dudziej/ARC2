from django.urls import path

from . import views

urlpatterns = [
    path('fill_database', views.fill_database, name='fill_database'),
    # path('fill_database_one', views.fill_database_one, name='fill_database_one'),
    path('get_jsons', views.get_jsons, name='get_jsons'),
    # path('1_1_1', views.r_1_1_1, name='1_1_1'),
    # path('1_2_1', views.r_1_2_1, name='1_2_1'),
    # path('2_1_1', views.r_2_1_1, name='2_1_1'),
    # path('2_2_1', views.r_2_2_1, name='2_2_1'),
    # path('2_3_1', views.r_2_3_1, name='2_3_1'),
    # path('3_1_1', views.r_3_1_1, name='3_1_1'),
    # path('3_2_1', views.r_3_2_1, name='3_2_1'),
    # path('4_1_1', views.r_4_1_1, name='4_1_1'),
    # path('4_2_1', views.r_4_2_1, name='4_2_1'),
    # path('5_1_1', views.r_5_1_1, name='5_1_1'),
    # path('5_2_1', views.r_5_2_1, name='5_2_1'),
    # path('6_1_1', views.r_6_1_1, name='6_1_1'),
    # path('6_2_1', views.r_6_2_1, name='6_2_1'),
    # path('7_1_1', views.r_7_1_1, name='7_1_1'),
    # path('7_2_1', views.r_7_2_1, name='7_2_1'),
]
