# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

* Reconstruir los módulos de Node
```
    npm install
    npm run dev
```

## Llenar la base de datos con información de pruebas

Llamar:
```
    http://localhost:3000/api/seed
```