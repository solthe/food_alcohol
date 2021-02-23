from django.shortcuts import render
from django.template import Template, Context

# Create your views here.
from django.http import HttpResponse
import re
from django.utils.timezone import datetime
import pandas as pd
import json


def direct_home(request):
    return render(request, 'alc_app/templates/index.html', {})


def beer_info(request):
    beerList = ['Blonde Ale','Hefeweizen','Witbier','Classic Pilsner',
    'British Style Beer','American Wheat Ale','India Pale Ale','Double/ Imperial IPA',
    'Oktoberfest','Pale Ale','Red/ Amber Ale','Barley Wine','Brown Ale','Old/ Strong Ale',
    'Abbey Dubbel','Dark Lager','Porter','Sweet/ Oatmeal Stout','Imperial Stout']
    
    beerOrigin = ['US','Germany','Canada','Germany','US','Germany',
    'US','Germany','Canada','Germany','US','Germany',
    'US','Germany','Canada','Germany','US','Germany','US']

    beerAlc = ['4.1-5.1','6.0-12.0']

    beerIBU = ['68','100']

    beerCO2 = '2'

    return render(request,"alc_app/templates/beerSelect.html", {"beerList": beerList,"beerOrigin": beerOrigin, "beerAlc" : beerAlc, "beerIBU": beerIBU, "beerCO2": beerCO2} )


#def beer_select(request):
    #return render(request, "alc_app/templates/beerSelect.html",{})

def show_beer(request):
    selected_beer = request.GET['selected_beer']

    return render(request, "alc_app/templates/showBeer.html", {"beerSelected": selected_beer})

def ing_pairing(selected_beer, number = 20):

    selected_beer = request.GET['slct']

    df = pd.read_excel('real_pairing.xlsx')

    df_a = df.loc[:, ['Unnamed: 0', alcohol]]
    df_a = df_a.sort_values(by=[alcohol], ascending=False).values
    df_r = df_a[:number]

    for i in range(0,number):
        i == 0
        if i < number:
            hi = df_r[i][0]
            bye = print(hi) 
            bye      

    return render(request, "alc_app/templates/showBeer.html", {"ingredients": bye, "selectedBeer": selectedBeer})


