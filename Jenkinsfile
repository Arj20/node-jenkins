pipeline {
  agent any

  stages {
     stage('Debug workspace') {
    steps {
        sh 'ls -R'
        }
    }
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Run Node Script') {
      steps {
        sh '''
          docker run --rm \
            -v "$WORKSPACE":/app \
            -w /app \
            node:18 \
            node src/index.js
        '''
      }
    }
  }
}
