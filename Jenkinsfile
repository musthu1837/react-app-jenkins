@Library('shared-library@master') _
pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Git Checkout') {
            steps{
               
                gitCheckout(
                    branch: "master",
                    url: "https://github.com/musthu1837/react-app-jenkins.git"
                )
            }
        }    
        stage("Build"){
            steps{
                script{
                    buildSystems.nodeBuild()
                }
            }
        }
        stage("Dev") {
            steps {
                echo "Started stage Dev"
            }
        }

        stage("Prod") {
            steps {
                echo "Started stage prod"
            }
        }
        
        stage("deploy"){
            steps{
                script{
                    deploySystems.nodeDeploy()
                }                
            }
        }
    }
}
