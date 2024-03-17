
## Інструкція з встановлення backend частини застосунку
1. Завантажити Node.js
https://nodejs.org/en
2. Завантажити репозиторій з кодом backend частини застосунку
3. Запустити застосунок за допомогою команди 
```shell
cd /path/to/project
npm run dev
```
4. Endpoints
#### get all
http://localhost:4444/objects (method get) - отримати всі об’єкти
http://localhost:4444/addresses (method get) - отримати всі адреси
http://localhost:4444/types (method get) - отримати всі типи
http://localhost:4444/indicators (method get) - отримати всі індикатори
#### get one
http://localhost:4444/objects/1 (method get) - отримати один об’єкт
http://localhost:4444/addresses/1 (method get) - отримати одну адресу
http://localhost:4444/types/1 (method get) - отримати один тип
http://localhost:4444/indicators/1 (method get) - отримати один індикатор
#### post one
http://localhost:4444/objects (method post) - створити один об’єкт
```json
"body": {
	"name": "String", 
	"addressId": "ObjectId"
}
```
http://localhost:4444/addresses (method post) - створити одну адресу
```json
"body": {
	"city": "String",
	"street": "String",
	"longitude": "String",
	"latitude": "String"
}
```

http://localhost:4444/types (method post) - створити один тип
```json
"body": {
	"name": "String"
}
```
http://localhost:4444/indicators (method post) - створити один індикатор
```json
"body": {
	"name": "String",
	"unit": "String",
	"typeId": "ObjectId",
	"objectId": "ObjectId"
}
```
#### update one 
http://localhost:4444/indicators/1 (method patch) - змінити один індикатор
```json
"body": {
	"name": "String",
	"unit": "String",
	"typeId": "ObjectId",
	"objectId": "ObjectId",
	"values": [
				{
					"value": "String", 
					"date": "Date"
				}
			]
}
```
