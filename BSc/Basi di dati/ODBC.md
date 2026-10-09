ODBC=Open DataBase Connectivity
# Java
```Java
import java.sql.*;

// Connessione al DB
Connection con = DriverManager.getConnection("odbc:jdbc:myDB", dbUsername, dbPswd);

// Query 1
String query = "SELECT * FROM USERS";
Statement stmt1 = con.createStatement();
ResultSet rs = stmt1.executeQuery(query);

while (rs.next()) {
	String s = rs.getString("Username");
	int n = rs.getInt("Age");
	System.out.println(s + " " + n);
}

rs.close();
stmt.close();

// Query 2
Statement stmt2 = con.createStatement();
stmt2.executeUpdate("INSERT INTO USERS VALUES ('Alex', '12345', 42)");
stmt2.close();

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

# Connessione al DB
con = mysql.connector.connect (host='localhost', port=3306, database='universita', user='root', password='basiDiDati')

cursor = con.cursor()
cursor.execute("SELECT * FROM studente")
for row in cursor.fetchall():
	print(row)

cursor.close()
con.close()
```