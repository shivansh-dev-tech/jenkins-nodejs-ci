pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning source code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                bat 'npm test'
            }
        }

        stage('Build Check') {
            steps {
                echo 'Checking Node.js application...'
                bat 'npm run build'
            }
        }

        stage('Run Application') {
            steps {
                echo 'Running Node.js application...'
                bat 'npm start'
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESSFUL - CI pipeline completed.'
        }

        failure {
            echo 'BUILD FAILED - Check the console output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
