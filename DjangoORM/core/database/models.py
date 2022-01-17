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


class Zegarek(models.Model):
    producent = models.ForeignKey(Producent, on_delete=models.CASCADE, null=True, default=None)
    typ = models.ForeignKey(Typ, on_delete=models.CASCADE, null=True, default=None)
    rodzaj = models.ForeignKey(Rodzaj, on_delete=models.CASCADE, null=True, default=None)
    wodoszczelnosc = models.ForeignKey(Wodoszczelnosc, on_delete=models.CASCADE, null=True, default=None)
    kolor = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_paska = models.ForeignKey(RodzajPaska, on_delete=models.CASCADE, null=True, default=None)
    ksztalt_koperty = models.ForeignKey(KsztaltKoperty, on_delete=models.CASCADE, null=True, default=None)
    kolor_tarczy = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    mechanizm = models.ForeignKey(Mechanizm, on_delete=models.CASCADE, null=True, default=None)
    zapiecie = models.ForeignKey(Zapiecie, on_delete=models.CASCADE, null=True, default=None)
    material_koperty = models.ForeignKey(MaterialKoperty, on_delete=models.CASCADE, null=True, default=None)
    rodzaj_szkla = models.ForeignKey(RodzajSzkla, on_delete=models.CASCADE, null=True, default=None)
    gwarancja = models.ForeignKey(Gwarancja, on_delete=models.CASCADE, null=True, default=None)
    cechy_dodatkowe = models.ForeignKey(CechyDodatkowe, on_delete=models.CASCADE, null=True, default=None)
    funkcje = models.ForeignKey(Funkcje, on_delete=models.CASCADE, null=True, default=None)
    kolor_paska = models.ForeignKey(Kolor, on_delete=models.CASCADE, null=True, default=None)
    styl = models.ForeignKey(Styl, on_delete=models.CASCADE, null=True, default=None)
    popularne = models.ForeignKey(Popularne, on_delete=models.CASCADE, null=True, default=None)
    kraj_producenta = models.ForeignKey(KrajProducenta, on_delete=models.CASCADE, null=True, default=None)
    wzor = models.ForeignKey(Wzor, on_delete=models.CASCADE, null=True, default=None)
    linia_zegarkow = models.ForeignKey(LiniaZegarkow, on_delete=models.CASCADE, null=True, default=None)
