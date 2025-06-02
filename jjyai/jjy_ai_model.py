import os
import torch
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder
from torchvision.models import resnet18
from torch.utils.data import DataLoader
from torch import nn, optim
from tqdm import tqdm

# ✅ 하이퍼파라미터
batch_size = 32
epochs = 8
lr = 1e-4

# ✅ flatten된 데이터 경로
data_dir = "C:/Users/82109/cs_image/loss_hair_flat"

# ✅ 이미지 전처리 (학습/예측 공통)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# ✅ 데이터셋 & 로더
dataset = ImageFolder(root=data_dir, transform=transform)
dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

# ✅ 클래스 수
num_classes = len(dataset.classes)
print(f"클래스 수: {num_classes}")
print(f"클래스 목록: {dataset.classes}")

# ✅ 모델 정의 (ResNet18 + 새 출력층)
model = resnet18(pretrained=True)
model.fc = nn.Linear(model.fc.in_features, num_classes)

# ✅ 디바이스 설정
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

# ✅ 손실 함수 & 옵티마이저
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=lr)

# ✅ 학습 루프
model.train()
for epoch in range(epochs):
    running_loss = 0.0
    for imgs, labels in tqdm(dataloader, desc=f"Epoch {epoch+1}/{epochs}"):
        imgs, labels = imgs.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(imgs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

    avg_loss = running_loss / len(dataloader)
    print(f"📘 Epoch {epoch+1}/{epochs} - Loss: {avg_loss:.4f}")

# ✅ 모델 저장
save_path = "hairloss_resnet18_flat.pt"
torch.save(model.state_dict(), save_path)
print(f"✅ 모델 저장 완료: {save_path}")
