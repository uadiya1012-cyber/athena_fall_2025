from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer

    @action(detail=True, methods=["post"])
    def favorite(self, request, pk=None):
        contact = self.get_object()
        contact.is_favorite = not contact.is_favorite
        contact.save()
        serializer = self.get_serializer(contact)
        return Response(serializer.data)