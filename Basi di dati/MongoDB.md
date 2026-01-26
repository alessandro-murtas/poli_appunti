Basato sui documenti (in formato JSON).
Esempio di documento:
```json
{
	"_id": 1,
	"first_name": "Tom",
	"email": "tom@example.com",
	"cell": "765-555-5555",
	"likes": [ "fashion", "spas", "shopping" ],
	"businesses": [
		{
			"name": "Entertainment 1080",
			"partner": "Jean",
			"status": "Bankrupt",
			"date_founded": {
				"$date": "2012-05-19T04:00:00Z"
			}
		},
		{
			"name": "Swag for Tweens",
			"date_founded": { 
				"$date": "2012-11-01T04:00:00Z" 
			}
		}
	]
}
```

## Mongosh
Per trovare tutti gli utenti di nome Alessandro:
```mongosh
> db.users.find({"name": "Alessandro"})
...
> db.users.find({"name": "Alessandro"}).count()
3
```
Per trovare quanti utenti minorenni:
```mongosh
> db.users.find({age: {$lt: 18}}).count()
13
```

Operatori di confronto:

| Sintassi | Significato |
| -------- | ----------- |
| $gt      | $\gt$       |
| $lt      | $\lt$       |
| $gte     | $\geq$      |
| $lte     | $\leq$      |
| $ne      | $\neq$      |
| $eq      | $=$         |
Operatori inclusione

|     |     |
| --- | --- |
|     |     |
|     |     |
Operatori logici