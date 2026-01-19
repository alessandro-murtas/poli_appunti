ODBC=Open Database Connectivity
# Java
```Java
import java.sql.*;

// Connessione al DB
Connection con = DriverManager.getConnection("odbc:jdbc:myDB", dbUsername, dbPswd);

// Esecuzione query
Statement stmt = con.createStatement();
stmt.executeUpdate("INSERT INTO USERS " + "VALUES ("Alex", "12345", 42)");
stmt.close();

// Transazioni
try {
	con.setAutoCommit(false);
	Statement st = con.createStatement();
	
	st.executeUpdate("…");
	st.executeUpdate("…");
	con.commit();
}
catch (Exception ex) {
	try {
		con.rollback();
	}
	catch (SQLException sqx){
		// Fa qualcosa
	}
}

con.close();
```
# Python
```python
import mysql.connector

con = mysql.connector.connect (host='localhost', port=3306, database='universita', user='root', password='basiDiDati')

cursor = con.cursor()
cursor.execute("SELECT * FROM studente")
for row in cursor.fetchall():
	print(row)

cursor.close()
con.close()
```