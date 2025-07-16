// Jenkinsfile
pipeline {
    agent any

    environment {
        // Define Node.js version
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📦 Checking out code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📥 Installing backend & frontend dependencies...'
                dir('backend') {
                    sh 'npm install'
                }
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo '🛠️ Building frontend...'
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo '🧪 Running backend tests (if any)...'
                dir('backend') {
                    // You can skip or add real test commands here
                    sh 'echo "No backend tests added yet."'
                }
            }
        }

        stage('Start App') {
            steps {
                echo '🚀 Starting app (example)...'
                sh 'echo "App ready for deployment."'
            }
        }
    }

    post {
        success {
            echo '✅ CI Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
