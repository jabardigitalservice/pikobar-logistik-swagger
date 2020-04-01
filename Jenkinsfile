pipeline {

    agent any
    environment {
        STAGING_USER = "${env.STAGING_USER}"
        STAGING_HOST_LOGISTIK = "${env.STAGING_HOST_LOGISTIK}"
 
    }

    options {
        timeout(time: 1, unit: 'HOURS')
    }

    stages {

        stage('hello world'){
            steps{
                sh 'echo "hello world"'
            }
        }

        stage('Run Docker on production') {

            environment {
                SSH_COMMAND = "ssh-agent bash -c 'ssh-add ~/.ssh/id_rsa; git pull origin master'"     
            }

            steps{
                   sshagent (['']){
                        // ssh block
                    sh 'ssh -o StrictHostKeyChecking=no $STAGING_USER@$STAGING_HOST_LOGISTIK "cd /home/ubuntu/app/pikobar-logistik-swagger && $SSH_COMMAND \
                                                                                    && docker-compose -f docker-compose.yml down \
                                                                                    && docker-compose -f docker-compose.yml build --no-cache \
                                                                                    && docker-compose -f docker-compose.yml up -d"'
                                                                                        
                    }
                
            }      
         }
        
    } 

}
