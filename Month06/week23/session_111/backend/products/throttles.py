from rest_framework.throttling import UserRateThrottle

class BurstRateThrottle(UserRateThrottle):
    rate = '60/min' 

class SustainedRateThrottle(UserRateThrottle):
    rate = '1000/day'