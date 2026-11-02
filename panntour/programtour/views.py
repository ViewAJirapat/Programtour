from rest_framework import viewsets
from programtour.serializers import AdminInformationSerializer, UserInformationSerializer, UserBookingSerializer, UserRefundSerializer, ToursDetailSerializer
from programtour.models import AdminInfomation, UserInformation, UserBooking, UserRefund, ToursDetail
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import AllowAny



class CsrfExemptSessionAuthentication(SessionAuthentication):###########

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

# authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]###############
# permission_classes = [AllowAny]

class AdminInfomationViewSet(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    queryset = AdminInfomation.objects.all()
    serializer_class = AdminInformationSerializer

class UserInformationViewSet(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    queryset = UserInformation.objects.all()
    serializer_class = UserInformationSerializer



@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def userRegister(request):
    data = request.data
    AddUserName = data['username']
    AddPassWord = data['password']
    AddNameUser = data['name_user']
    AddSurnameUser = data['surname_user']
    AddUserEmail = data['useremail']
    AddUserPhoneNumber = data['userphonenumber']
    UserInformation.objects.create(username=AddUserName, password=AddPassWord, user_name=AddNameUser,
    user_surname=AddSurnameUser, user_email=AddUserEmail, user_phonenumber=AddUserPhoneNumber)
    return Response({'addUser Complete'})

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def adminLogin(request, format=None):
    data = request.data
    PadminUser = data.get('adminuser')
    PadminPassword = data.get('adminpassword')
    
    if not PadminUser or not PadminPassword:
        return Response({'detail': 'adminuser and adminpassword are required'}, status=400)
    
    AdminID = AdminInfomation.objects.filter(adminuser=PadminUser, adminpassword=PadminPassword).first()
    
    if not AdminID:
        return Response({'detail': 'invalid credentials'}, status=401)
    
    return Response(AdminID.id)

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def userLogin(request):
    data = request.data
    Pusername = data.get('username')
    Ppassword = data.get('password')
    
    if not Pusername or not Ppassword:
        return Response({'detail': 'username and password are required'}, status=400)
    
    UserID = UserInformation.objects.filter(username=Pusername, password=Ppassword).first()
    
    if not UserID:
        return Response({'detail': 'invalid credentials'}, status=401)
    
    return Response(UserID.id)



class UserBookingViewSet(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    queryset = UserBooking.objects.all()
    serializer_class = UserBookingSerializer

    def get_queryset(self):
        bookings = UserBooking.objects.all().order_by('id')
        userid = self.request.query_params.get('userid')
        if userid:
            bookings = bookings.filter(userid=userid)
        return bookings

class UserRefundViewset(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    queryset = UserRefund.objects.all()
    serializer_class = UserRefundSerializer

class ToursDetailViewSet(viewsets.ModelViewSet):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]
    queryset = ToursDetail.objects.all()
    serializer_class = ToursDetailSerializer

@api_view(['POST'])  #เพิ่มข้อมูลใน database
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def addTourDetail(request):
    data = request.data
    Dtourid = data['tourid']
    Dtourcategory = data['tourcategory']
    Dtourname = data['tourname']
    Dtourdetail = data['tourdetail']
    Dtravelplan = data['travelplan']
    Dtoursinpackage = data['tourinpackage']
    Dtoursnotinpackage = data['tournotinpackage']
    Dtourpolicy = data['tourpolicy']
    Dtourprice = data['tourprice']
    Dtourimage1 = data['tourimage1']
    Dtourimage2 = data['tourimage2']
    ToursDetail.objects.create(tourid=Dtourid, tourcategory=Dtourcategory,
    tourname=Dtourname, tourdetail=Dtourdetail, travelplan=Dtravelplan, tourinpackage=Dtoursinpackage, tournotinpackage=Dtoursnotinpackage,
    tourpolicy=Dtourpolicy, tourprice=Dtourprice, tourimage1=Dtourimage1,
    tourimage2=Dtourimage2)
    return Response({'OK'})

@api_view(['POST']) #อัพเดทข้อมูล
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def updateTourDetail(request):
    data = request.data
    Did = data['id']
    
    snippets = ToursDetail.objects.filter(id=Did)
    if(len(snippets)>0):
        Dtourid = data['tourid']
        if Dtourid != '':
            ToursDetail.objects.filter(id=Did).update(tourid=Dtourid)
        Dtourcategory = data['tourcategory']
        if Dtourcategory != '':
            ToursDetail.objects.filter(id=Did).update(tourcategory=Dtourcategory)
        Dtourname = data['tourname']
        if Dtourname != '':
            ToursDetail.objects.filter(id=Did).update(tourname=Dtourname)
        Dtourdetail = data['tourdetail']
        if Dtourdetail != '':
            ToursDetail.objects.filter(id=Did).update(tourdetail=Dtourdetail)
        Dtravelplan = data['travelplan']
        if Dtravelplan != '':
            ToursDetail.objects.filter(id=Did).update(travelplan=Dtravelplan)
        Dtoursinpackage = data['toursinpackage']
        if Dtoursinpackage != '':
            ToursDetail.objects.filter(id=Did).update(tourinpackage=Dtoursinpackage)
        Dtoursnotinpackage = data['toursnotinpackage']
        if Dtoursnotinpackage !='':
            ToursDetail.objects.filter(id=Did).update(tournotinpackage=Dtoursnotinpackage)
        Dtourpolicy = data['tourpolicy']
        if Dtourpolicy !='':
            ToursDetail.objects.filter(id=Did).update(tourpolicy=Dtourpolicy)
        Dtourprice = int(data['tourprice'])
        if Dtourprice != 0 :
            ToursDetail.objects.filter(id=Did).update(tourprice=Dtourprice)
        Dtourimage1 = data['tourimage1']
        if Dtourimage1 !='':
            Dimgename1 = data['tourimagename']
            ToursDetail.objects.create(tourimage1=Dtourimage1)
            ToursDetail.objects.filter(id=Did).update(tourimage1=Dimgename1)
        Dtourimage2 = data['tourimage2']
        if Dtourimage2 !='':
            Dimgename2 = data['tourimagename2']
            ToursDetail.objects.create(tourimage2=Dtourimage2)
            ToursDetail.objects.filter(id=Did).update(tourimage2=Dimgename2)
        return Response({'Update Complete'})
    else:
        return Response({'Not Found TourDetail'})

@api_view(['POST']) #ลบข้อมูลทัวร์
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def deleteTourDetail(request):
    data = request.data
    Did = data['id']
    snippets = ToursDetail.objects.filter(id=Did)
    if(len(snippets)>0):
        ToursDetail.objects.filter(id=Did).delete()
        return Response({'Delete Complete'})
    else:
        return Response({'Not Found TourDetail'})

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def addTourBooking(request):
    names = ['userid', 'tourname', 'bookingdate', 'user_name_booking',
             'user_surname_booking', 'tourid', 'child_count', 'adult_count',
             'user_phonenumber_booking', 'tourprice']
    clean = {}
    for name in names:
        value = request.data.get(name)
        if value in ('null', 'undefined'):
            value = None
        clean[name] = value

    if clean['child_count'] is None or clean['child_count'] == '':
        clean['child_count'] = 0

    clean['paymentstatus'] = '0'
    clean['bookingstatus'] = '0'

    serializer = UserBookingSerializer(data=clean)
    if not serializer.is_valid():
        return Response(serializer.errors, status=400)

    if serializer.validated_data['adult_count'] < 1:
        return Response({'detail': 'adult_count must be at least 1'}, status=400)
    if serializer.validated_data['child_count'] < 0:
        return Response({'detail': 'child_count must not be negative'}, status=400)

    booking = serializer.save()
    return Response({'id': booking.id}, status=201)
