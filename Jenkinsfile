pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t node-jenkins-test .'
      }
    }

    stage('Run App') {
      steps {
        sh 'docker run --rm node-jenkins-test'
      }
    }
  }
}
