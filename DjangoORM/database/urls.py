from django.urls import path

from . import views

urlpatterns = [
    path('fill_database', views.fill_database, name='fill_database'),
    path('get_jsons', views.get_jsons, name='get_jsons'),

    path('A_10_1', views.A_10_1, name='A_10_1'),
    path('A_20_1', views.A_20_1, name='A_20_1'),
    path('A_40_1', views.A_40_1, name='A_40_1'),
    path('DN_100_1', views.DN_100_1, name='DN_100_1'),
    path('DN_10_1', views.DN_10_1, name='DN_10_1'),
    path('DN_1_1', views.DN_1_1, name='DN_1_1'),

    path('A_20_2', views.A_20_2, name='A_20_2'),
    path('DN_100_2', views.DN_100_2, name='DN_100_2'),

    path('A_20_3', views.A_20_3, name='A_20_3'),
    path('DN_100_3', views.DN_100_3, name='DN_100_3'),

    path('A_20_4', views.A_20_4, name='A_20_4'),
    path('DN_100_4', views.DN_100_4, name='DN_100_4'),

    path('A_20_5', views.A_20_5, name='A_20_5'),
    path('DN_100_5', views.DN_100_5, name='DN_100_5'),
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
