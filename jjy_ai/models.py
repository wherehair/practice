from django.db import models  # Django에서는 models.py라는 파일명이 필요해서 포함
import os
import torch
from torchvision import transforms
from torchvision.models import resnet18
import torch.nn as nn

# ✅ 이미지 전처리 (학습과 동일해야 함)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225]),
])

# ✅ 학습 당시 class 순서 그대로 복사
class_names = [
    'Hairline_Norwood_1',
    'Hairline_Norwood_2',
    'Vertex_Ludwig_1',
    'Vertex_Ludwig_2',
    'Vertex_Ludwig_3',
    'Vertex_Norwood_3',
    'Vertex_Norwood_4_5',
    'Vertex_Norwood_6_7',
]

# ✅ 모델 로딩 함수
def load_model():
    num_classes = len(class_names)
    model = resnet18(pretrained=False)
    model.fc = nn.Linear(model.fc.in_features, num_classes)

    # 모델 파일 경로 (백엔드 내부 경로 기준)
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(BASE_DIR, 'saved_models', 'hairloss_resnet18_flat.pt')

    model.load_state_dict(torch.load(model_path, map_location='cpu'))
    model.eval()
    return model

# ✅ 모델 객체 생성 (모듈 import 시 자동으로 불러오도록)
model = load_model()
