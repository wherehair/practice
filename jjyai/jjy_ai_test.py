import os
import torch
from torchvision import transforms
from torchvision.models import resnet18
from PIL import Image
from torchvision.datasets import ImageFolder
from torch import nn

# === [1] 모델 및 클래스 정보 ===
model_path = "C:/Users/82109/OneDrive/바탕 화면/jjycs_ai/practice/jjyai/hairloss_resnet18_flat.pt"
class_list_dir = "C:/Users/82109/cs_image/loss_hair_flat"  # 학습에 사용한 flatten 폴더

# === [2] 테스트 이미지 폴더 ===
test_image_dir = "C:/Users/82109/cs_image/test_images"

# === [3] 이미지 전처리 (학습과 동일해야 함)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# === [4] 클래스 목록 불러오기 (학습 기준)
class_names = ImageFolder(root=class_list_dir).classes
num_classes = len(class_names)

# === [5] 모델 불러오기
model = resnet18()
model.fc = nn.Linear(model.fc.in_features, num_classes)
model.load_state_dict(torch.load(model_path, map_location='cpu'))
model.eval()

# === [6] 테스트 이미지 예측
results = []

for file in os.listdir(test_image_dir):
    if file.lower().endswith(('.jpg', '.jpeg', '.png')):
        img_path = os.path.join(test_image_dir, file)
        try:
            image = Image.open(img_path).convert("RGB")
            input_tensor = transform(image).unsqueeze(0)

            with torch.no_grad():
                output = model(input_tensor)
                pred_idx = torch.argmax(output, dim=1).item()
                pred_class = class_names[pred_idx]

            results.append({
                "파일명": file,
                "예측 클래스": pred_class
            })
        except Exception as e:
            results.append({
                "파일명": file,
                "예측 클래스": f"예측 실패: {e}"
            })

# === [7] 결과 출력
print("\n📌 테스트 이미지 예측 결과:")
for result in results:
    print(f"[{result['파일명']}] → 예측 클래스: {result['예측 클래스']}")