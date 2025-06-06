from sklearn.metrics import classification_report, confusion_matrix
import pandas as pd
import os

# ✅ CSV 로드
df = pd.read_csv("prediction_results.csv")

# ✅ 실제 클래스 추출 함수 (폴더 이름에서)
def extract_true_class(path):
    parts = path.replace("\\", "/").split("/")
    return parts[-2]  # flatten된 폴더명 = 실제 클래스명

df["실제 클래스"] = df["이미지 경로"].apply(extract_true_class)

# ✅ 예측 vs 실제 비교
y_true = df["실제 클래스"]
y_pred = df["예측 클래스"]

# ✅ 평가 출력
print("\n✅ [Classification Report]")
print(classification_report(y_true, y_pred, zero_division=0))

print("\n✅ [Confusion Matrix]")
print(confusion_matrix(y_true, y_pred))
