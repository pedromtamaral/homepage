# Setup

    # Install Nodejs (Ubuntu)
    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    
    # Clone the project
    git clone https://github.com/pedromtamaral/homepage.git
    cd homepage
    
    # Install the dependencies
    npm install -g bower
    npm install -g grunt-cli
    npm install
    bower install
    (use sass version 3.3.14)

# Development

    grunt
    grunt watch
