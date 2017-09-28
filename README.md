# react-native-project-template

* Project was created with react-native init **[project-name]**
* **src** folder includes react and redux related folders
* All logic will be in **src** folder as is normal react web apps

# How to start
* *npm install* -> to install dependencies
* *npm run android* -> to run android application (a runnig amulator or device is needed)
* *npm run ios* -> to run ios


# NOTES
* If you get an packager error related with port number, probably port
8081 is being used by another process

    - *sudo lsof -i :8081* -> to find out which process uses port
    - *sudo kill -9* **[PID]**
    - then retry to *run npm run ios (android)*

