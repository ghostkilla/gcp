# gcp

## 概要
意味ないけどfirestoreに保存してすぐ取り出すだけのbackendアプリケーション。  
動作確認ができればおk

### 使用GCPリソース
- Cloud Build
- Cloud Functions
- Firestore(FirebaseのFirestoreではない)

### 必須API有効化一覧
- Cloud Build
- Cloud Functions
- Cloud Resource Manager

### Cloud Build サービス アカウント権限設定（Cloud Buildの設定メニュー）
Cloud FunctionsとService Accountsを有効にする。

### やったこと（学んだこと）
- Cloud Buildを利用したGithubと連携したCD/CI環境構築
- Cloud Buildを利用したCloud Functionsデプロイ
- TypescriptのソースコードをCloud Functionsへデプロイ
- Firestore利用
- IAMの設定（権限周り）
- Google Cloud API周り
- Cloud FunctionsとFirestoreのローカル環境構築（docker）
