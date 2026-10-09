### Creazione tabella
```sql
CREATE TABLE users (
	id int PRIMARY KEY,
	name varchar(20) NOT NULL,
	age int CHECK (age > 0)
);

CREATE TABLE voti (
	id int PRIMARY KEY,
	voto int CHECK (voto > 0 AND voto <= 30,
	data date,
	idStudente int REFERENCES users(id)
);
```

### Inserimento
```sql
INSERT INTO users (name, age) VALUES ('Alex', 19);
```

### Modifica
```sql
UPDATE users SET age=20 WHERE name='Alex';
```

### Rimozione
```sql
DELETE FROM users WHERE name='Alex';
```

### Trigger
