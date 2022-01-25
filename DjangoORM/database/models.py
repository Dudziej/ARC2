from django.db import models


class Producent(models.Model):
    text = models.CharField(max_length=300)


class Typ(models.Model):
    text = models.CharField(max_length=300)


class Rodzaj(models.Model):
    text = models.CharField(max_length=300)


class Wodoszczelnosc(models.Model):
    text = models.CharField(max_length=300)


class Kolor(models.Model):
    text = models.CharField(max_length=300)


class RodzajPaska(models.Model):
    text = models.CharField(max_length=300)


class KsztaltKoperty(models.Model):
    text = models.CharField(max_length=300)


class Mechanizm(models.Model):
    text = models.CharField(max_length=300)


class Zapiecie(models.Model):
    text = models.CharField(max_length=300)


class MaterialKoperty(models.Model):
    text = models.CharField(max_length=300)


class RodzajSzkla(models.Model):
    text = models.CharField(max_length=300)


class Gwarancja(models.Model):
    text = models.CharField(max_length=300)


class CechyDodatkowe(models.Model):
    text = models.CharField(max_length=300)


class Funkcje(models.Model):
    text = models.CharField(max_length=300)


class Styl(models.Model):
    text = models.CharField(max_length=300)


class Popularne(models.Model):
    text = models.CharField(max_length=300)


class KrajProducenta(models.Model):
    text = models.CharField(max_length=300)


class Wzor(models.Model):
    text = models.CharField(max_length=300)


class LiniaZegarkow(models.Model):
    text = models.CharField(max_length=300)


class Zegarek_A_10(models.Model):
    producent = models.ForeignKey(Producent, on_delete=models.CASCADE, null=True, default=None)
    typ = models.ForeignKey(Typ, on_delete=models.CASCADE, null=True, default=None)
    rodzaj = models.ForeignKey(Rodzaj, on_delete=models.CASCADE, null=True, default=None)
    wodoszczelnosc = models.ForeignKey(Wodoszczelnosc, on_delete=models.CASCADE, null=True, default=None)
    kolor = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_paska = models.ForeignKey(RodzajPaska, on_delete=models.CASCADE, null=True, default=None)
    ksztalt_koperty = models.ForeignKey(KsztaltKoperty, on_delete=models.CASCADE, null=True, default=None)
    kolor_tarczy = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,
                                     related_name='kolor_tarczy')
    mechanizm = models.ForeignKey(Mechanizm, on_delete=models.CASCADE, null=True, default=None)
    zapiecie = models.ForeignKey(Zapiecie, on_delete=models.CASCADE, null=True, default=None)


class Zegarek_A_20(models.Model):
    producent = models.ForeignKey(Producent, on_delete=models.CASCADE, null=True, default=None)
    typ = models.ForeignKey(Typ, on_delete=models.CASCADE, null=True, default=None)
    rodzaj = models.ForeignKey(Rodzaj, on_delete=models.CASCADE, null=True, default=None)
    wodoszczelnosc = models.ForeignKey(Wodoszczelnosc, on_delete=models.CASCADE, null=True, default=None)
    kolor = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_paska = models.ForeignKey(RodzajPaska, on_delete=models.CASCADE, null=True, default=None)
    ksztalt_koperty = models.ForeignKey(KsztaltKoperty, on_delete=models.CASCADE, null=True, default=None)
    kolor_tarczy = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,
                                     related_name='kolor_tarczy1')
    mechanizm = models.ForeignKey(Mechanizm, on_delete=models.CASCADE, null=True, default=None)
    zapiecie = models.ForeignKey(Zapiecie, on_delete=models.CASCADE, null=True, default=None)
    material_koperty = models.ForeignKey(MaterialKoperty, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_szkla = models.ForeignKey(RodzajSzkla, on_delete=models.CASCADE, null=True, default=None)
    gwarancja = models.ForeignKey(Gwarancja, on_delete=models.CASCADE, null=True, default=None)
    cechy_dodatkowe = models.ForeignKey(CechyDodatkowe, on_delete=models.CASCADE, null=True, default=None)
    funkcje = models.ForeignKey(Funkcje, on_delete=models.CASCADE, null=True, default=None)
    kolor_paska = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,
                                    related_name='kolor_paska1')
    styl = models.ForeignKey(Styl, on_delete=models.CASCADE, null=True, default=None)
    popularne = models.ForeignKey(Popularne, on_delete=models.CASCADE, null=True, default=None)
    kraj_producenta = models.ForeignKey(KrajProducenta, on_delete=models.CASCADE, null=True, default=None)
    wzor = models.ForeignKey(Wzor, on_delete=models.CASCADE, null=True, default=None)


class Zegarek_A_40(models.Model):
    producent = models.ForeignKey(Producent, on_delete=models.CASCADE, null=True, default=None)
    typ = models.ForeignKey(Typ, on_delete=models.CASCADE, null=True, default=None)
    rodzaj = models.ForeignKey(Rodzaj, on_delete=models.CASCADE, null=True, default=None)
    wodoszczelnosc = models.ForeignKey(Wodoszczelnosc, on_delete=models.CASCADE, null=True, default=None)
    kolor = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_paska = models.ForeignKey(RodzajPaska, on_delete=models.CASCADE, null=True, default=None)
    ksztalt_koperty = models.ForeignKey(KsztaltKoperty, on_delete=models.CASCADE, null=True, default=None)
    kolor_tarczy = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,related_name='kolor_tarczy2')
    mechanizm = models.ForeignKey(Mechanizm, on_delete=models.CASCADE, null=True, default=None)
    zapiecie = models.ForeignKey(Zapiecie, on_delete=models.CASCADE, null=True, default=None)
    material_koperty = models.ForeignKey(MaterialKoperty, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_szkla = models.ForeignKey(RodzajSzkla, on_delete=models.CASCADE, null=True, default=None)
    gwarancja = models.ForeignKey(Gwarancja, on_delete=models.CASCADE, null=True, default=None)
    cechy_dodatkowe = models.ForeignKey(CechyDodatkowe, on_delete=models.CASCADE, null=True, default=None)
    funkcje = models.ForeignKey(Funkcje, on_delete=models.CASCADE, null=True, default=None)
    kolor_paska = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,related_name='kolor_paska2')
    styl = models.ForeignKey(Styl, on_delete=models.CASCADE, null=True, default=None)
    popularne = models.ForeignKey(Popularne, on_delete=models.CASCADE, null=True, default=None)
    kraj_producenta = models.ForeignKey(KrajProducenta, on_delete=models.CASCADE, null=True, default=None)
    wzor = models.ForeignKey(Wzor, on_delete=models.CASCADE, null=True, default=None)
    producent2 = models.ForeignKey(Producent, on_delete=models.CASCADE, null=True, default=None, related_name='i')
    typ2 = models.ForeignKey(Typ, on_delete=models.CASCADE, null=True, default=None, related_name='j')
    rodzaj2 = models.ForeignKey(Rodzaj, on_delete=models.CASCADE, null=True, default=None, related_name='k')
    wodoszczelnosc2 = models.ForeignKey(Wodoszczelnosc, on_delete=models.CASCADE, null=True, default=None, related_name='l')
    kolor2 = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None, related_name='m')
    rodzaj_paska2 = models.ForeignKey(RodzajPaska, on_delete=models.CASCADE, null=True, default=None, related_name='n')
    ksztalt_koperty2 = models.ForeignKey(KsztaltKoperty, on_delete=models.CASCADE, null=True, default=None, related_name='o')
    kolor_tarczy2 = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,related_name='r')
    mechanizm2 = models.ForeignKey(Mechanizm, on_delete=models.CASCADE, null=True, default=None, related_name='p')
    zapiecie2 = models.ForeignKey(Zapiecie, on_delete=models.CASCADE, null=True, default=None, related_name='zapiecie2')
    material_koperty2 = models.ForeignKey(MaterialKoperty, on_delete=models.CASCADE, null=True, default=None, related_name='material2')
    rodzaj_szkla2 = models.ForeignKey(RodzajSzkla, on_delete=models.CASCADE, null=True, default=None, related_name='a')
    gwarancja2 = models.ForeignKey(Gwarancja, on_delete=models.CASCADE, null=True, default=None, related_name='b')
    cechy_dodatkowe2 = models.ForeignKey(CechyDodatkowe, on_delete=models.CASCADE, null=True, default=None, related_name='c')
    funkcje2 = models.ForeignKey(Funkcje, on_delete=models.CASCADE, null=True, default=None, related_name='d')
    kolor_paska2 = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None,related_name='s')
    styl2 = models.ForeignKey(Styl, on_delete=models.CASCADE, null=True, default=None, related_name='e')
    popularne2 = models.ForeignKey(Popularne, on_delete=models.CASCADE, null=True, default=None, related_name='f')
    kraj_producenta2 = models.ForeignKey(KrajProducenta, on_delete=models.CASCADE, null=True, default=None, related_name='g')
    wzor2 = models.ForeignKey(Wzor, on_delete=models.CASCADE, null=True, default=None, related_name='h')


class Zegarek_DN_100(models.Model):
    producent = models.CharField(max_length=300)
    typ = models.CharField(max_length=300)
    rodzaj = models.CharField(max_length=300)
    wodoszczelnosc = models.CharField(max_length=300)
    kolor = models.CharField(max_length=300)
    rodzaj_paska = models.CharField(max_length=300)
    ksztalt_koperty = models.CharField(max_length=300)
    kolor_tarczy = models.CharField(max_length=300)
    mechanizm = models.CharField(max_length=300)
    zapiecie = models.CharField(max_length=300)
    material_koperty = models.CharField(max_length=300)
    rodzaj_szkla = models.CharField(max_length=300)
    gwarancja = models.CharField(max_length=300)
    cechy_dodatkowe = models.CharField(max_length=300)
    funkcje = models.CharField(max_length=300)
    kolor_paska = models.CharField(max_length=300)
    styl = models.CharField(max_length=300)
    popularne = models.CharField(max_length=300)
    kraj_producenta = models.CharField(max_length=300)
    wzor = models.CharField(max_length=300)
    linia_zegarkow = models.CharField(max_length=300)


class Zegarek_DN_10(models.Model):
    producent = models.CharField(max_length=300)
    typ = models.CharField(max_length=300)
    rodzaj = models.CharField(max_length=300)
    wodoszczelnosc = models.CharField(max_length=300)
    kolor = models.CharField(max_length=300)
    rodzaj_paska = models.CharField(max_length=300)
    ksztalt_koperty = models.CharField(max_length=300)
    kolor_tarczy = models.CharField(max_length=300)
    mechanizm = models.CharField(max_length=300)
    zapiecie = models.CharField(max_length=300)
    material_koperty = models.CharField(max_length=300)
    rodzaj_szkla = models.CharField(max_length=300)
    gwarancja = models.CharField(max_length=300)
    cechy_dodatkowe = models.CharField(max_length=300)
    funkcje = models.CharField(max_length=300)
    kolor_paska = models.CharField(max_length=300)
    styl = models.CharField(max_length=300)
    popularne = models.CharField(max_length=300)
    kraj_producenta = models.CharField(max_length=300)
    wzor = models.CharField(max_length=300)
    linia_zegarkow = models.CharField(max_length=300)


class Zegarek_DN_1(models.Model):
    producent = models.CharField(max_length=300)
    typ = models.CharField(max_length=300)
    rodzaj = models.CharField(max_length=300)
    wodoszczelnosc = models.CharField(max_length=300)
    kolor = models.CharField(max_length=300)
    rodzaj_paska = models.CharField(max_length=300)
    ksztalt_koperty = models.CharField(max_length=300)
    kolor_tarczy = models.CharField(max_length=300)
    mechanizm = models.CharField(max_length=300)
    zapiecie = models.CharField(max_length=300)
    material_koperty = models.CharField(max_length=300)
    rodzaj_szkla = models.CharField(max_length=300)
    gwarancja = models.CharField(max_length=300)
    cechy_dodatkowe = models.CharField(max_length=300)
    funkcje = models.CharField(max_length=300)
    kolor_paska = models.CharField(max_length=300)
    styl = models.CharField(max_length=300)
    popularne = models.CharField(max_length=300)
    kraj_producenta = models.CharField(max_length=300)
    wzor = models.CharField(max_length=300)
    linia_zegarkow = models.CharField(max_length=300)
