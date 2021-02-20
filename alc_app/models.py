from django.db import models

# Create your models here.

from django.contrib.auth.models import User
from multiselectfield import MultiSelectField

class Beer(models.Model):
    ALCOHOL_LOW = 'al'
    ALCOHOL_MIDDLE = 'am'
    ALCOHOL_HIGH = 'ah'
    BITTER_LOW = 'bl'
    BITTER_MIDDLE = 'bm'
    BITTER_HIGH = 'bh'
    FIZZY_LOW = 'fl'
    FIZZY_MIDDLE = 'fm'
    FIZZY_HIGH = 'fh'
    AA_LOW = 'aal'
    AA_MIDDLE = 'aam'
    BEER_CHOICES = (
        (ALCOHOL_LOW, 'Alcohol (~5.5%'),
        (ALCOHOL_MIDDLE, 'Alcohol (5.6~7.6%'),
        (ALCOHOL_HIGH, 'Alcohol (7.7~13.0%'),
        (BITTER_LOW, 'Bitterness (0~29'),
        (BITTER_MIDDLE, 'Bitterness (30~59'),
        (BITTER_HIGH, 'Bitterness (60~100'),
        (FIZZY_LOW, 'Fizziness (CO2) (0~1.5'),
        (FIZZY_MIDDLE, 'Fizziness (CO2) (1.6~2.5'),
        (FIZZY_HIGH, 'Fizziness (CO2) (2.6~4.0'),
        (AA_LOW, 'Apparent Accentuation (70~80%'),
        (AA_MIDDLE, 'Apparent Accentuation (80~100%'),
    )

    beerAttributes = SelectMultipleField(
        max_length = 10,
        choices = BEER_CHOICES
    )
