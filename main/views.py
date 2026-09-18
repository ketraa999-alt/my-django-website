from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.models import User


# from django.contrib.auth.models import User
# from django.contrib import messages
# from django.contrib.auth import authenticate, login

# def aboutus(request):
     
     # return HttpResponse("hey your 1st page")

# def aboutusDetails(request,aboutid):

     # return HttpResponse(aboutid)


# def aboutusDetails1(request,aboutany):

     # return HttpResponse(aboutany)


# def aboutusDetails2(request,aboutname):

     # return HttpResponse(aboutname)

# def homepage(request):

     # return render (request,"homepage.html")

def user_home(request):
     return render(request,"user_home.html")
def user_login_view(request):
     return render(request,"user_login.html")
# def user_loginlogin(request):

#    kavya registeration
# from django.shortcuts import render, redirect

# from django.contrib import messages
# from django.contrib.auth import authenticate, login

from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login


def user_register1_view(request):
    if request.method == "POST":
        fname = request.POST.get('first_name')
        lname = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            messages.error(request, "Passwords do not match")
            return render(request, 'user_register.html')

        if len(password) != 8:
            messages.error(request, "Password must be exactly 8 characters")
            return render(request, 'user_register.html')

        if User.objects.filter(username=email).exists():
            messages.error(request, "This email is already registered")
            return render(request, 'user_register.html')

        User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=fname,
            last_name=lname
        )

        # ✅ redirect to login page
        return redirect('login')

    return render(request, 'user_register.html')


def user_login1_view(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('login')
        else:
            messages.error(request, "Invalid email or password")

    return render(request, 'user_login.html')





# # userlogin form
# def user_login1(request):
#     if request.method == "POST":
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         User = authenticate(request, Username=email, password=password)

#         if User is not None:
#             login(request, User)
#             return redirect('/')   # change to your dashboard/home page
#         else:
#             messages.error(request, "Invalid email or password")

#     return render(request, 'user_login.html')
# userloginform

     #     kavya
     # return HttpResponseRedirect("user_dashboard.html")
     
def user_register_view(request):
     return render(request,"user_register.html")
def user_contact(request):
     return render(request,"user_contact.html")
def user_dashboard_view(request):
     return render(request,"user_dashboard.html")
def user_about(request):
     return render(request,"user_about.html")


# trainer

def trainer_dashboard(request):
     return render(request,"trainer_dashboard.html")

def trainer_login(request):
     return render(request,"trainer_login.html")

def trainer_register(request):
     return render(request,"trainer_register.html")

# admin


def admin_register(request):
     return render(request,"admin_register.html")

def admin_login(request):
     return render(request,"admin_login.html")
def admin_dashboard(request):
     return render(request,"admin_dashboard.html")