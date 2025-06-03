from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import torch
from .models import model, transform, class_names

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

@csrf_exempt
def predict_view(request):
    if request.method == 'POST' and request.FILES.get('image'):
        try:
            image = Image.open(request.FILES['image']).convert("RGB")
            input_tensor = transform(image).unsqueeze(0).to(device)

            with torch.no_grad():
                output = model(input_tensor)
                pred_idx = torch.argmax(output, dim=1).item()
                pred_class = class_names[pred_idx]

            return JsonResponse({'result': pred_class})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    else:
        return JsonResponse({'error': 'POST 요청과 이미지 파일이 필요합니다.'}, status=400)
