from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'success': False, 'message': '아이디와 비밀번호가 필요합니다.'}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': '이미 존재하는 아이디입니다.'}, status=400)

        User.objects.create_user(username=username, password=password)
        return JsonResponse({'success': True, 'message': '회원가입 완료'})

    return JsonResponse({'success': False, 'message': 'POST 요청만 허용됩니다.'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': '로그인 완료'})
        else:
            return JsonResponse({'success': False, 'message': '아이디 또는 비밀번호가 틀렸습니다.'}, status=401)

    return JsonResponse({'success': False, 'message': 'POST 요청만 허용됩니다.'}, status=405)

@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'success': True, 'message': '로그아웃 되었습니다.'})
    return JsonResponse({'success': False, 'message': 'POST 요청만 허용됩니다.'}, status=405)
