from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import re
from django.utils.timezone import datetime


def direct_home(request):
    return render(request, 'alc_app/templates/index.html', {})

def beer_select(request):
    return render(request, "alc_app/templates/beerSelect.html",{})

