from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer

@api_view(['POST'])
def login_view(request):
    """Хэрэглэгчийн нэр болон нууц үгийг шалгах логик энд байх болно."""
    username = request.data.get('username', '')

    try:
        user = UserProfile.objects.get(username=username)
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)
    except UserProfile.DoesNotExist:
        return Response(
            {
                'error': 'User not found'
            },
            status=status.HTTP_404_NOT_FOUND
        )
    
@api_view(['GET'])
def profile_view(request, user_id):
    '''Хэрэглэгчийн профайл мэдээллийг авах энд байх болно.'''
    try:
        user = UserProfile.objects.get(id=user_id)
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)
    except UserProfile.DoesNotExist:
        return Response(
            {
                'error': 'User not found'
            },
            status=status.HTTP_404_NOT_FOUND
        )
    
@api_view(['PUT'])
def update_profile_view(request, user_id):
    '''Хэрэглэгчийн профайл мэдээллийг шинэчлэх энд байна'''
    try:
        user = UserProfile.objects.get(id=user_id)
        serializer = UserProfileSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except UserProfile.DoesNotExist:
        return Response(
            {
                'error': 'User not found'
            },
            status=status.HTTP_404_NOT_FOUND
        )
    

@api_view(['POST'])
def register_view(request):
    '''Шинэ хэрэглэгчийг бүртгэх энд байна'''
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
