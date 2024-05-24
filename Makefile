rf:
	ng serve --poll 1 --open --port 4400


jquery: 
	npm install jquery --save
	npm install @types/jquery --save-dev


#Crear un Routing y Module dentro de una carpeta con el mismo nombre del componente. 
#El --flat hace que no cree otra carpeta con el mismo nombre
#El --routing genera el routing. 
# EJEMPLO: TODO/web-dental/src/app/angular-practica$ ng generate module angular-practica --routing --flat
routing:
	ng generate module angular-practica --routing --flat

# "nvm ls" para ver la lista de versiones de node.js que tengo disponible. 
# "nvm list-remote" para ver todas las versiones disponibles a instalar de node.js 
# "nvm install <version> para instalar la version deseada
# "nvm use <version> para usar la version deseada."

# sudo npm uninstall -g @angular/cli para desintalar angular globalmente. 
# Luego usar "nvm use <version-compatible-con-'version deseada de angular'>, y tras eso colocar "node -v" y luego
# usar "sudo npm install -g @angular/cli". De este modo, NPM reconocera cual es la version mas compatible con el node usado, e instalara esa version de angular. Para ello fijarse en la tabla de compatibilidad y ver que instalara. 
# Link de tabla de compatibilidad.  https://angular.io/guide/versions
# Para volver a usar la version para "trabajo" Sigue estos pasos. 'nvm use system', 'sudo npm uninstall -g @angular/cli', 'sudo npm i @angular/cli@16.2.12 -g' y quedara la version compatible con tu ambiente de trabajo. 


build-qa build qa:
	ng build --configuration qa