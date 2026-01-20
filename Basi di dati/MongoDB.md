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
